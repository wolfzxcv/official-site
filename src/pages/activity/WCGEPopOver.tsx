import {
  Button,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger
} from '@chakra-ui/react';
import React from 'react';

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const WCGEPopOver: React.FC<{}> = () => {
  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <Button
          my={2}
          bg="none"
          fontWeight="normal"
          _hover={{
            background: 'none'
          }}
          p={0}
        >
          <Image
            mr={3}
            w="25px"
            h="26px"
            src="/../assets/images/activity_WCGE_icon5.png"
            alt="icon5"
          />
          WCGMarkets
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <Image
            src="/../assets/images/activity_WCGE_wechat.png"
            alt="wechat"
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default WCGEPopOver;
