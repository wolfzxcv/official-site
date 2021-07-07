import { Box, IconButton } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const BackToTopMobile: React.FC<{}> = () => {
  const { t } = useTranslation(['common']);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box position="fixed" bottom="0" left="45%">
      <IconButton
        title={t('top')}
        borderRadius="50%"
        onClick={scrollToTop}
        aria-label={t('top')}
        icon={<BiArrowToTop fontSize="32px" />}
      />
    </Box>
  );
};

export default BackToTopMobile;
