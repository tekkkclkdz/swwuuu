"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import L1 from "../../../public/long_best/top1-ezgif.com-png-to-webp-converter.webp"
import L2 from "../../../public/long_best/L2_edit2-ezgif.com-optiwebp.webp"
import L3 from "../../../public/long2/SWU21-copy_3_3412x4799.jpg"
import L4 from "../../../public/long2/SWU21-copy_4_3412x4799.jpg"
import L5 from "../../../public/long_best/SWU21-copy_5_3412x4799-ezgif.com-optiwebp.webp"
import L6 from "../../../public/long2/SWU21-copy_6_3412x4799.jpg"
import LV from "../../../public/long_best/podfilm-ezgif.com-png-to-webp-converter.webp"

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

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + 10);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  return (
    <div className='relative'>
      <div className="relative bg-gray-100 p-8 flex justify-right items-center h-[calc(100svh)]">
      <Image
        src={L4}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="relative"
      />
      <div className="bg-white px-4 z-30 ml-0 mt-60 sm:ml-32 sm:mt-64 mb-0 sm:mb-72 h-[100px] sm:h-[100px] shadow-md w-11/12 sm:w-3/4">
        <p className="text-gray-600 text-sm text-center mt-4">Curtesy.mp3</p>

        {/* Flex container for buttons */}
        <div className="flex justify-center items-center">
          {/* Skip Backward Button */}
          <div className="flex items-center mx-4">
            <span className="text-sm text-gray-600 mr-2">-10</span> {/* Tekst -10 */}
            <button onClick={skipBackward} className="hover:gray-300 focus:outline-none mt-0.5">
              <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19V5L7 12L15 19Z" fill="#000000" />
              </svg>
            </button>
          </div>

          {/* Play/Pause Button */}
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

          {/* Skip Forward Button */}
          <div className="flex items-center mx-4">
            <button onClick={skipForward} className="hover:gray-300 mt-0.5 focus:outline-none">
              <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5V19L17 12L9 5Z" fill="#000000" />
              </svg>
            </button>
            <span className="text-sm text-gray-600 ">+10</span> {/* Tekst +10 */}
          </div>
        </div>

        {/* Progress Bar */}
        <div
          className="mt-2 bg-gray-200 h-1 rounded-full relative cursor-pointer"
          onClick={handleProgressClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className="bg-black h-1 rounded-full"
            style={{ width: `${progress}%` }}
          >
            {/* Draggable Handle */}
            {/* <div
              className="absolute right-0 top-[-4px] w-4 h-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer transform -translate-x-1/2"
              style={{ left: `${progress}%` }}
            /> */}
          </div>
        </div>

        {/* Time Information */}
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{formatTime((progress / 100) * duration)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Audio Element */}
        <audio ref={audioRef} src="/sounds/Curtesy.mp3"></audio>
      </div>
    </div>
    </div>
    
  );
};

export default AudioPlayer;