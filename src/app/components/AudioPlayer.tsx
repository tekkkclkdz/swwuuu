"use client"
import React, { useRef, useState } from 'react';

import Image from 'next/image';

import PIC1 from "../../../public/B6.webp"

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

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

  const updateProgress = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      setProgress((currentTime / duration) * 100);
      setDuration(duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-gray-100 p-4 flex justify-center items-center  h-[calc(100svh)]">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        {/* <!-- Album Cover --> */}
        <Image src={PIC1} alt="idk" className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50" />
        {/* <!-- Song Title --> */}
        <h2 className="text-xl font-semibold text-center">idk</h2>
        {/* <!-- Artist Name --> */}
        <p className="text-gray-600 text-sm text-center">64.mp3</p>
        {/* <!-- Music Controls --> */}
        <div className="mt-6 flex justify-center items-center">
          {/* <button onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
            <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
              <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000"></path>
              <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000"></path>
            </svg>
          </button> */}
          <button onClick={togglePlayPause} className=" hover:gray-300 focus:outline-none mx-4">
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
          {/* <button onClick={() => audioRef.current && (audioRef.current.currentTime += 10)} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
            <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000"></path>
              <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000"></path>
            </svg>
          </button> */}
        </div>
        {/* <!-- Progress Bar --> */}
        <div className="mt-6 bg-gray-200 h-2 rounded-full">
          <div className="bg-black h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        {/* <!-- Time Information --> */}
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{formatTime((progress / 100) * duration)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        {/* <!-- Audio Element --> */}
        <audio ref={audioRef} onTimeUpdate={updateProgress} src="/sounds/64.mp3"></audio>
      </div>
    </div>
  );
};

export default AudioPlayer;


// na stronie glownej 