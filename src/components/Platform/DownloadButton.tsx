import { Locales } from '@/i18n/config';
import {
  Box,
  Center,
  Flex,
  Image,
  Link,
  Tooltip,
  useMediaQuery
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';

type DownloadButtonProps = {
  text: string;
  href?: string;
  type?: 'android' | 'ios' | 'user';
  onClick?: React.MouseEventHandler;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text,
  href,
  type,
  onClick
}: DownloadButtonProps) => {
  const [isDesktop] = useMediaQuery('(min-width: 1000px)');

  const placement = isDesktop ? 'right' : 'bottom';

  return (
    <>
      {href ? (
        <Link
          isExternal
          href={href}
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Tooltip
            placement={placement}
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
            <CommonContent text={text} type={type} onClick={onClick} />
          </Tooltip>
        </Link>
      ) : (
        <CommonContent text={text} type={type} onClick={onClick} />
      )}
    </>
  );
};

const CommonContent = forwardRef<HTMLDivElement, DownloadButtonProps>(
  ({ text, type, onClick, ...rest }: DownloadButtonProps, ref) => {
    const router = useRouter();
    const currentLang = router.locale as Locales;
    const isChinese = currentLang === 'cn' || currentLang === 'zh';
    const isArabic = currentLang === 'ar';
    return (
      <Flex
        ref={ref}
        {...rest}
        onClick={onClick ? onClick : () => false}
        direction={isArabic ? 'row-reverse' : 'row'}
        justify="center"
        p={3}
        fontSize={isChinese ? '28px' : '22px'}
        bg="#4da506"
        color="white"
        _hover={{
          bgColor: 'green.600',
          transition: '1s',
          cursor: 'pointer'
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
          ) : type === 'user' ? (
            <BiUser fontSize="36px" />
          ) : (
            <AiOutlineDownload fontSize="40px" />
          )}
        </Center>

        <Box mx={2}>{text}</Box>
      </Flex>
    );
  }
);

CommonContent.displayName = 'CommonContent';

export default DownloadButton;
