import { Box, Center, Image, Link, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Locales } from '../../i18n/locales';
import { StyledFlex } from '../Styled/Styled';

interface DownloadButtonProps {
  text: string;
  href: string;
  type?: 'android' | 'ios';
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text,
  href,
  type
}: DownloadButtonProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'hk';
  const isArabic = currentLang === 'sa';

  return (
    <Link
      isExternal
      href={href}
      _hover={{
        textDecoration: 'none'
      }}
    >
      <Tooltip
        label={
          type === 'android' ? (
            <Image
              minW="150px"
              height="150x"
              src="../assets/images/android-qr.png"
              alt="android-qr"
            />
          ) : type === 'ios' ? (
            <Image
              minW="150px"
              height="150x"
              src="../assets/images/ios-qr.png"
              alt="ios-qr"
            />
          ) : (
            ''
          )
        }
        hasArrow
        arrowSize={15}
      >
        <StyledFlex
          direction={isArabic ? 'row-reverse' : 'row'}
          justify="center"
          p={3}
          fontSize={isChinese ? '28px' : '22px'}
          bg="#4da506"
          color="white"
          _hover={{
            bgColor: 'green.600',
            transform: 'scale(1.1)'
          }}
        >
          <Center>
            {type === 'android' ? (
              <Image
                minW="28px"
                height="28px"
                src="../assets/images/android.png"
                alt="android"
              />
            ) : type === 'ios' ? (
              <Image
                minW="28px"
                height="28px"
                src="../assets/images/ios.png"
                alt="ios"
              />
            ) : (
              <AiOutlineDownload fontSize="40px" />
            )}
          </Center>

          <Box mx={2}>{text}</Box>
        </StyledFlex>
      </Tooltip>
    </Link>
  );
};

export default DownloadButton;
