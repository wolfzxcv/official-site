import { Box, Image } from '@chakra-ui/react';
import PopUp from './PopUp';

const WCGIFX: React.FC<{}> = () => {
  return <PopUp title="Notice" content={<WCGIFXContent />} />;
};

const WCGIFXContent: React.FC<{}> = () => {
  return (
    <Box>
      <Image src={`../assets/images/activity_WCGIFX.png`} alt="notice" />
    </Box>
  );
};

export default WCGIFX;
