"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface AudioPlayerProps {
  title: string;
  image: any;
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, image, audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!isDragging) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [isDragging]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updateProgressFromClick(e.nativeEvent.clientX);
  };

  const updateProgressFromClick = (clientX: number) => {
    const audio = audioRef.current;
    if (!audio || !progressBarRef.current) return;

    const { left, width } = progressBarRef.current.getBoundingClientRect();
    let newProgress = ((clientX - left) / width) * 100;
    newProgress = Math.max(0, Math.min(100, newProgress));

    setProgress(newProgress);
    audio.currentTime = (newProgress / 100) * audio.duration;
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    updateProgressFromClick(clientX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleDragMove);
      window.addEventListener("touchend", handleDragEnd);
    } else {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging]);

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        Math.max(audioRef.current.currentTime + seconds, 0),
        audioRef.current.duration
      );
    }
  };

  return (
    <div className="flex items-center bg-black text-white sm:p-6 p-3 shadow-lg w-full h-[25vh] sm:h-[30vh]">
      {/* Kwadratowy obrazek */}
      <div className="w-24 h-24 sm:w-56 sm:h-56 mr-4 sm:ml-0 ml-4 overflow-hidden">
        <Image src={image} alt={title} width={256} height={256} className="object-cover w-full h-full" />
      </div>

      {/* Zawartość */}
      <div className="flex-1 flex flex-col justify-between h-full">
        <h3 className="text-2xl font-medium ml-8 mb-4 hover:underline cursor-pointer">{title}</h3>

        <div className="flex flex-col items-left sm:w-full w-[80%] gap-4">
          {/* Kontrola odtwarzania */}
          <div className="flex items-center gap-6 ml-7 mb-5">
            <button onClick={() => skipTime(-10)} className="mb-1 text-lg">
              -10s
            </button>

            {/* Nowa customowa ikona Play/Pause */}
            <button onClick={togglePlayPause} className="text-lg flex items-center justify-center  rounded-full">
              {isPlaying ? (
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
              )}
            </button>

            <button onClick={() => skipTime(10)} className="mb-1 text-lg">
              +10s
            </button>
          </div>

          {/* Pasek postępu */}
          <div
            className="relative w-full ml-5 bg-gray-500 h-1 rounded-full cursor-pointer"
            onClick={handleProgressClick}
            ref={progressBarRef}
          >
            {/* Pasek wypełniony */}
            <div className="bg-white h-1 rounded-full" style={{ width: `${progress}%` }}></div>

            {/* Kropka do przeciągania */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md cursor-pointer"
              style={{ left: `calc(${progress}% - 7px)` }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            ></div>
          </div>
        </div>

        <audio ref={audioRef} src={audioSrc}></audio>
      </div>
    </div>
  );
};

export default AudioPlayer;