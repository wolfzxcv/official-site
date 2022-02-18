import { links } from '@/assets/links';
import { openChatWindow } from '@/utils';
import {
  Center,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import LinkButton from './LinkButton';

const TopLinks: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <Flex
      bgColor="gray.700"
      minH="70px"
      alignItems="center"
      justify="center"
      color="white"
      py={1}
    >
      <LinkButton
        text={t('openRealAccount')}
        href={links.registerReal}
        inMobile
        borderColor="#b81c22"
      ></LinkButton>

      <LinkButton
        text={t('openDemoAccount')}
        onClick={openChatWindow}
        inMobile
        borderColor="green"
      ></LinkButton>

      <Popover trigger={'hover'} placement={'bottom-start'}>
        <PopoverTrigger>
          <Center>
            <LinkButton text={t('usersCenter')}></LinkButton>
          </Center>
        </PopoverTrigger>

        <PopoverContent border={0} bg="gray.700" px={0} py={3} width="auto">
          <Stack spacing={3}>
            <LinkButton
              text={t('usersCenterNew')}
              href={links.usersCenterNew}
            ></LinkButton>
            <LinkButton
              text={t('usersCenterOld')}
              href={links.usersCenterOld}
            ></LinkButton>
          </Stack>
        </PopoverContent>
      </Popover>

      <Popover trigger={'hover'} placement={'bottom-start'}>
        <PopoverTrigger>
          <Center>
            <LinkButton text={t('iBCenter')}></LinkButton>
          </Center>
        </PopoverTrigger>

        <PopoverContent border={0} bg="gray.700" px={0} py={3} width="auto">
          <Stack spacing={3}>
            <LinkButton
              text={t('iBCenterNew')}
              href={links.iBCenterNew}
            ></LinkButton>
            <LinkButton
              text={t('iBCenterOld')}
              href={links.iBCenterOld}
            ></LinkButton>
          </Stack>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default TopLinks;
