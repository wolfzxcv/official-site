import { Box, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Locales } from '../../i18n/locales';
import { StyledFlex } from '../Styled/Styled';

interface DownloadButtonProps {
  text: string;
  href: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text,
  href
}: DownloadButtonProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'sa';

  return (
    <Link
      isExternal
      href={href}
      _hover={{
        textDecoration: 'none'
      }}
    >
      <StyledFlex
        direction={isArabic ? 'row-reverse' : 'row'}
        justify="center"
        p={3}
        fontSize="28px"
        bg="#4da506"
        color="white"
        _hover={{
          bgColor: 'green.600',
          transform: 'scale(1.1)'
        }}
      >
        <AiOutlineDownload fontSize="40px" />
        <Box>{text}</Box>
      </StyledFlex>
    </Link>
  );
};

export default DownloadButton;
