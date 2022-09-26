import { Image } from '@chakra-ui/react';
import PopUp from './PopUp';

const WCGIFX: React.FC<{}> = () => {
  return <PopUp title="Notice" content={<WCGIFXContent />} useBorder={false} />;
};

const WCGIFXContent: React.FC<{}> = () => {
  return <Image src={`/../assets/images/activity_WCGIFX.jpg`} alt="notice" />;
};

export default WCGIFX;
