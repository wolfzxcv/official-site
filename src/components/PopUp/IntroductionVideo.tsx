import { Locales } from '@/i18n/config';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  const WCG_VIDEO_LANG = isChinese ? 'video' : 'video_en';

  return (
    <video
      controls
      autoPlay
      playsInline
      loop
      muted
      src={`../assets/${WCG_VIDEO_LANG}.mp4`}
      poster="../assets/video_pic.jpg"
    >
      Sorry, your browser doesn&apos;t support embedded videos, but don&apos;t
      worry, you can
      <a href={`../assets/${WCG_VIDEO_LANG}.mp4`}>download it</a>
      and watch it with your favorite video player!
    </video>
  );
};

export default IntroductionVideo;
