import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Fade, Flex, Icon, keyframes } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const arrowsPositionFromTheTop = '500px';

const barPositionFromTheTop = '600px';

const arrowColor = 'blue.700';

const unselectedItem = 'blue.700';

const selectedItem = 'red.500';

type CarouselProps = {
  defaultSlider: JSX.Element;
  sliders?: Array<JSX.Element>;
  showArrow?: boolean;
  duration?: number;
  transition?: number;
  type?: 'circle' | 'bar';
};

const Carousel: React.FC<CarouselProps> = ({
  defaultSlider,
  sliders,
  showArrow = false,
  duration = 0.5,
  transition = 10,
  type = 'circle'
}: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const [isPlay, setIsPlay] = useState(true);

  const defaultClientXValue = 0;

  const [clientXValue, setClientXValue] = useState(defaultClientXValue);

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

  const handleMove = async (value: number, type: 'start' | 'end') => {
    if (type === 'start') {
      await setClientXValue(value);
    } else if (type === 'end') {
      const startValue = clientXValue;
      const endValue = value;

      const movement = startValue - endValue;

      // add tolerance value to prevent up down swipe on mobile triggering this event
      const tolerance = 50;

      if (movement > tolerance) {
        // start value > end value : left swipe, so equal to right arrow click
        handleLeftArrowClick();
      } else if (movement < -tolerance) {
        // start value < end value : right swipe, so equal to left arrow click
        handleRightArrowClick();
      }

      // reset start value
      await setClientXValue(0);
    }
  };

  return (
    <Box minH={arrowsPositionFromTheTop}>
      <Fade
        key={index}
        in={true}
        transition={{ enter: { duration } }}
        onTouchStart={(e: React.TouchEvent) =>
          handleMove(e.changedTouches[0].clientX, 'start')
        }
        onTouchEnd={(e: React.TouchEvent) =>
          handleMove(e.changedTouches[0].clientX, 'end')
        }
        onMouseDown={(e: React.MouseEvent) => handleMove(e.clientX, 'start')}
        onMouseUp={(e: React.MouseEvent) => handleMove(e.clientX, 'end')}
      >
        {allSliders[index]}
        {showArrow && (
          <ChevronLeftIcon
            display={{ base: 'none', md: showArrow ? 'block' : 'none' }}
            zIndex={5}
            position="absolute"
            left={{ base: 0, md: 0 }}
            top={arrowsPositionFromTheTop}
            onClick={() => handleLeftArrowClick()}
            fontSize={{ base: '72px', md: '96px' }}
            color={arrowColor}
            bg="transparent"
            borderRadius="50%"
            _hover={{ cursor: 'pointer' }}
          />
        )}
        {showArrow && (
          <ChevronRightIcon
            display={{ base: 'none', md: showArrow ? 'block' : 'none' }}
            zIndex={5}
            position="absolute"
            right={{ base: 0, md: 20 }}
            top={arrowsPositionFromTheTop}
            onClick={() => handleRightArrowClick()}
            _hover={{ cursor: 'pointer' }}
            fontSize={{ base: '72px', md: '96px' }}
            color={arrowColor}
            bg="transparent"
            borderRadius="50%"
          />
        )}
        {type === 'bar' && (
          <Flex
            zIndex={5}
            top={barPositionFromTheTop}
            position="absolute"
            bg="transparent"
            width="100%"
          >
            <Flex mx={'auto'}>
              {allSliders.map((each, idx) => (
                <Flex
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  align="center"
                  _hover={{ cursor: 'pointer' }}
                >
                  <ProgressBar
                    dotIndex={idx}
                    currentIndex={index}
                    transition={transition}
                    amount={allSliders.length}
                  />
                </Flex>
              ))}
            </Flex>
          </Flex>
        )}
      </Fade>
      {type === 'circle' && (
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
      )}
    </Box>
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

type ProgressBarProps = DotProps & { transition: number; amount: number };

const ProgressBar: React.FC<ProgressBarProps> = ({
  dotIndex,
  currentIndex,
  transition,
  amount
}: ProgressBarProps) => {
  const isSelected = dotIndex === currentIndex;
  let mobileBarWidth = 40;

  const browserWidth = window.document.body?.clientWidth;
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

type DotProps = {
  dotIndex: number;
  currentIndex: number;
};

export const Dot: React.FC<DotProps> = ({
  dotIndex,
  currentIndex
}: DotProps) => {
  const isSelected = dotIndex === currentIndex;

  return (
    <CircleIcon
      boxSize={isSelected ? 6 : 8}
      color={isSelected ? selectedItem : unselectedItem}
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
