import React from 'react';
import PopUp from './PopUp';

const IntroductionVideo: React.FC<{}> = () => {
  return (
    <PopUp
      title="WCG Markets"
      content={<IntroductionVideoContent />}
      useBorder={false}
    />
  );
};

const IntroductionVideoContent: React.FC<{}> = () => {
  return (
    <video
      controls
      autoPlay
      playsInline
      loop
      muted
      src={'/../assets/WCG_IFX_ EXPO.mp4'}
      poster="../assets/video_pic2.jpg"
    >
      Sorry, your browser doesn&apos;t support embedded videos, but don&apos;t
      worry, you can
      <a href={'/../assets/WCG_IFX_ EXPO.mp4'}>download it</a>
      and watch it with your favorite video player!
    </video>
  );
};

export default IntroductionVideo;
