"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import pic2 from '../../../public/B7.webp';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const updateProgress = () => {
        if (audio && !isDragging) {
          const currentTime = audio.currentTime;
          setProgress((currentTime / audio.duration) * 100);
        }
      };

      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [isDragging]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && event.currentTarget) {
      const { offsetX } = event.nativeEvent;
      const { offsetWidth } = event.currentTarget;
      const newProgress = offsetX / offsetWidth;
      const newTime = newProgress * audioRef.current.duration;
      setProgress(newProgress * 100);
      audioRef.current.currentTime = newTime;
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleProgressClick(event);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-gray-100 p-4 flex justify-right items-center h-[calc(100svh)]">
      <Image
        src={pic2}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0"
      />
      <div className="bg-white px-4 z-30 ml-24 sm:ml-64 sm:mt-64 mt-0 h-30 sm:mb-0 mb-12 sm:h-30 sm:h-40 rounded-lg shadow-md w-3/4 sm:w-1/2">
        <p className="text-gray-600 text-sm text-center mt-4">Curtesy.mp3</p>
        <div className="flex justify-center items-center">
          <button onClick={togglePlayPause} className="hover:gray-300 focus:outline-none mx-4">
            {isPlaying ? (
              <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#000000"></path>
                <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#000000"></path>
              </svg>
            ) : (
              <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3.89779V20.1022C5 21.2949 6.3219 22.0644 7.37187 21.5484L18.4385 15.4462C19.4476 14.9538 19.4476 13.0462 18.4385 12.5538L7.37187 6.45164C6.3219 5.93564 5 6.70512 5 7.89779Z" fill="#000000"></path>
              </svg>
            )}
          </button>
        </div>
        {/* <!-- Progress Bar --> */}
        <div
          className="mt-6 bg-gray-200 h-2 rounded-full relative cursor-pointer"
          onClick={handleProgressClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className="bg-black h-2 rounded-full"
            style={{ width: `${progress}%` }}
          >
            {/* Draggable Handle */}
            <div
              className="absolute right-0 top-[-4px] w-4 h-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer transform -translate-x-1/2"
              style={{ left: `${progress}%` }}
            />
          </div>
        </div>
        {/* <!-- Time Information --> */}
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{formatTime((progress / 100) * duration)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        {/* <!-- Audio Element --> */}
        <audio ref={audioRef} src="/sounds/Curtesy.mp3"></audio>
      </div>
    </div>
  );
};

export default AudioPlayer;