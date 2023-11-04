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
import React from 'react';
import { BiUser } from 'react-icons/bi';

type DownloadButtonProps = {
  text?: string;
  type?: 'apk1' | 'apk2' | 'android' | 'ios' | 'pc' | 'user';
  href: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text,
  href,
  type
}: DownloadButtonProps) => {
  const [isDesktop] = useMediaQuery('(min-width: 1000px)');

  const placement = isDesktop ? 'right' : 'bottom';

  const isMobileItems =
    type === 'apk1' || type === 'apk2' || type === 'android' || type === 'ios';

  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  let el;

  switch (type) {
    case 'apk1':
      el = <Image width="200px" src="/../assets/images/apk.png" alt="apk1" />;
      break;
    case 'apk2':
      el = <Image width="200px" src="/../assets/images/apk.png" alt="apk2" />;
      break;
    case 'android':
      el = (
        <Image
          width="200px"
          src="/../assets/images/android.png"
          alt="android"
        />
      );
      break;
    case 'ios':
      el = <Image width="200px" src="/../assets/images/ios.png" alt="ios" />;
      break;
    case 'pc':
      el = <Image width="200px" src="/../assets/images/pc.png" alt="pc" />;
      break;
    case 'user':
      el = (
        <Flex
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
            <BiUser fontSize="36px" />
          </Center>
          <Box mx={2}>{text}</Box>
        </Flex>
      );
      break;
    default:
      el = <></>;
      break;
  }

  return (
    <>
      {isMobileItems ? (
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
              <Image
                width="150px"
                src={`/../assets/images/${type}-qr.png`}
                alt={type}
              />
            }
            hasArrow
            arrowSize={15}
          >
            {el}
          </Tooltip>
        </Link>
      ) : (
        <Link
          isExternal
          href={href}
          _hover={{
            textDecoration: 'none'
          }}
        >
          {el}
        </Link>
      )}
    </>
  );
};

export default DownloadButton;
