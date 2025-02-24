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
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const { offsetX } = e.nativeEvent;
    const { offsetWidth } = e.currentTarget;
    const newTime = (offsetX / offsetWidth) * audio.duration;
    audio.currentTime = newTime;
    setProgress((newTime / audio.duration) * 100);
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        Math.max(audioRef.current.currentTime + seconds, 0),
        audioRef.current.duration
      );
    }
  };

  return (
    <div className="flex items-center bg-black text-white p-6  shadow-lg w-full h-[30vh] ">
      {/* Kwadratowy obrazek */}
      <div className="w-60 h-60 mr-4 overflow-hidden">
        <Image src={image} alt={title} width={256} height={256} className="object-cover w-full h-full" />
      </div>

      {/* Zawartość */}
      <div className="flex-1 flex flex-col justify-between h-full">
        <h3 className="text-2xl font-medium mb-4 hover:underline cursor-pointer">{title}</h3>

        <div className="flex flex-col items-left w-full gap-4">
          {/* Kontrola odtwarzania */}
          <div className="flex items-center gap-6 ml-7 mb-5">
            <button 
              onClick={() => skipTime(-10)} 
              className="mb-1 text-lg"
            >
              -10s
            </button>

            <button 
              onClick={togglePlayPause} 
              className=" text-lg"
            >
              {isPlaying ? "▐▐" : "▶"}
            </button>

            <button 
              onClick={() => skipTime(10)} 
              className="mb-1 text-lg"
            >
              +10s
            </button>
          </div>

          {/* Pasek postępu */}
          <div 
            className="w-full ml-5 bg-gray-600 h-1 rounded-full cursor-pointer" 
            onClick={handleProgressClick}
          >
            <div 
              className="bg-white h-1 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <audio ref={audioRef} src={audioSrc}></audio>
      </div>
    </div>
  );
};

export default AudioPlayer;