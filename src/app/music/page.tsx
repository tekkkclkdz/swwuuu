import React from 'react';
import AudioPlayer from '../components/AudioPlayer';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <div>
      <AudioPlayer />
      <NavBar home={0} isSelected={3}/>
    </div>
  );
};

export default Home;