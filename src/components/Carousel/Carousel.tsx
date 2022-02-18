import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Fade, Flex, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

type CarouselProps = {
  defaultSlider: JSX.Element;
  sliders?: Array<JSX.Element>;
  showArrow?: boolean;
  duration?: number;
  transition?: number;
};

const Carousel: React.FC<CarouselProps> = ({
  defaultSlider,
  sliders,
  showArrow = true,
  duration = 1,
  transition = 10
}: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const [isPlay, setIsPlay] = useState(true);

  const allSliders = sliders && sliders.length > 0 ? sliders : [defaultSlider];

  useEffect(() => {
    let id: NodeJS.Timeout | undefined;
    if (isPlay) {
      id = setInterval(() => {
        handleRightArrowClick();
      }, transition * 1000);
    }
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [isPlay]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelect = async (dotIndex: number) => {
    setIsPlay(false);

    await setIndex(dotIndex);

    setIsPlay(true);
  };

  const handleLeftArrowClick = () => {
    let result;

    if (index - 1 < 0) {
      result = allSliders.length - 1;
    } else {
      result = index - 1;
    }

    handleSelect(result);
  };

  const handleRightArrowClick = () => {
    let result;

    if (index + 1 >= allSliders.length) {
      result = 0;
    } else {
      result = index + 1;
    }

    handleSelect(result);
  };

  return (
    <Box minH="500px">
      <Fade key={index} in={true} transition={{ enter: { duration } }}>
        {allSliders[index]}
        {showArrow && (
          <ChevronLeftIcon
            zIndex={5}
            position="absolute"
            left={{ base: 0, md: 0 }}
            top="500px"
            onClick={() => handleLeftArrowClick()}
            fontSize={{ base: '72px', md: '96px' }}
            color="blue.700"
            bg="transparent"
            borderRadius="50%"
            _hover={{ cursor: 'pointer' }}
          />
        )}
        {showArrow && (
          <ChevronRightIcon
            zIndex={5}
            position="absolute"
            right={{ base: 0, md: 20 }}
            top="500px"
            onClick={() => handleRightArrowClick()}
            _hover={{ cursor: 'pointer' }}
            fontSize={{ base: '72px', md: '96px' }}
            color="blue.700"
            bg="transparent"
            borderRadius="50%"
          />
        )}
      </Fade>
      <Flex justify="center" mt={5}>
        {allSliders.map((each, idx) => (
          <Flex
            key={idx}
            onClick={() => handleSelect(idx)}
            align="center"
            _hover={{ cursor: 'pointer' }}
          >
            <Dot dotIndex={idx} currentIndex={index} />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

type DotProps = {
  dotIndex: number;
  currentIndex: number;
};

const Dot: React.FC<DotProps> = ({ dotIndex, currentIndex }: DotProps) => {
  const isSelected = dotIndex === currentIndex;

  return (
    <CircleIcon
      boxSize={isSelected ? 6 : 8}
      color={isSelected ? 'red.500' : 'blue.700'}
    />
  );
};

const CircleIcon = (props: { boxSize: number; color: string }) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

export default Carousel;
