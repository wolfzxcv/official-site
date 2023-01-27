import React from 'react';
import PopUp from './PopUp';

const NewYearVideo: React.FC<{}> = () => {
  return (
    <PopUp
      title="WCG Markets"
      content={<NewYearVideoContent />}
      useBorder={false}
    />
  );
};

const NewYearVideoContent: React.FC<{}> = () => {
  return (
    <video
      controls
      autoPlay
      playsInline
      loop
      muted
      src={'/../assets/NewYearVideo.mp4'}
    >
      Sorry, your browser doesn&apos;t support embedded videos, but don&apos;t
      worry, you can
      <a href={'/../assets/NewYearVideo.mp4'}>download it</a>
      and watch it with your favorite video player!
    </video>
  );
};

export default NewYearVideo;
