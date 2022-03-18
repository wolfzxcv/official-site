import { Box, Flex, keyframes } from '@chakra-ui/react';
import { DotProps, selectedItem, unselectedItem } from './Carousel';

type ProgressBarProps = DotProps & { transition: number; amount: number };

const ProgressBar: React.FC<ProgressBarProps> = ({
  dotIndex,
  currentIndex,
  transition,
  amount
}: ProgressBarProps) => {
  const isSelected = dotIndex === currentIndex;
  let mobileBarWidth = 40;

  const browserWidth = window?.document.body?.clientWidth;
  if (browserWidth) {
    const newWidth = (browserWidth - 100) / amount;

    if (newWidth < mobileBarWidth) {
      mobileBarWidth = newWidth;
    }
  }

  return (
    <Flex
      width={{ base: `${mobileBarWidth}px`, md: '50px' }}
      height="8px"
      bg={unselectedItem}
      mx={2}
      justify="start"
    >
      <Box
        animation={`${widthChange} ${transition}s linear infinite`}
        height="8px"
        bg={isSelected ? selectedItem : 'auto'}
      ></Box>
    </Flex>
  );
};

const widthChange = keyframes`
0% {
    width:0%;
    
  }
  100% {
    width: 100%;   
  }
`;

export default ProgressBar;
