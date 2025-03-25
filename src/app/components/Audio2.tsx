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
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [remainingTime, setRemainingTime] = useState("0:00");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!isDragging) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(formatTime(audio.currentTime));
        setRemainingTime(formatTime(audio.duration - audio.currentTime));
      }
    };

    const setAudioDuration = () => {
      setDuration(formatTime(audio.duration));
      setRemainingTime(formatTime(audio.duration));
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioDuration);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [isDragging]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex items-center bg-black text-white sm:p-6 p-3 shadow-lg w-full h-[30vh] sm:h-[35vh]">
      <div className="w-24 h-24 sm:w-56 sm:h-56 mr-4 sm:ml-0 ml-4 overflow-hidden">
        <Image src={image} alt={title} width={256} height={256} className="object-cover  w-full h-full" />
      </div>

      <div className="flex-1 flex flex-col justify-between h-full">
        <h3 className="text-2xl font-medium ml-8 mt-10 mb-6 hover:underline cursor-pointer ">{title}</h3>

        <div className="flex flex-col items-left sm:w-full w-[80%] gap-4 mb-10">
          <div className="flex items-center gap-6 ml-7 ">
            <button onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)} className="mb-1 text-lg">-10s</button>
            <button onClick={() => { isPlaying ? audioRef.current?.pause() : audioRef.current?.play(); setIsPlaying(!isPlaying); }} className="text-lg flex items-center justify-center rounded-full">
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button onClick={() => audioRef.current && (audioRef.current.currentTime += 10)} className="mb-1 text-lg">+10s</button>
          </div>

          <div className="flex flex-col ml-5">
            <div className="relative w-full bg-gray-500 h-1 rounded-full cursor-pointer" onClick={(e) => {
              if (!audioRef.current || !progressBarRef.current) return;
              const { left, width } = progressBarRef.current.getBoundingClientRect();
              let newProgress = ((e.clientX - left) / width) * 100;
              newProgress = Math.max(0, Math.min(100, newProgress));
              setProgress(newProgress);
              audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
            }} ref={progressBarRef}>
              <div className="bg-white h-1 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>{currentTime}</span>
              <span>{remainingTime}</span>
            </div>
          </div>
        </div>
        <audio ref={audioRef} src={audioSrc}></audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
