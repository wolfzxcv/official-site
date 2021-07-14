import { Box, IconButton } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { scrollToTop } from '../../utils';

const BackToTopMobile: React.FC<{}> = () => {
  const { t } = useTranslation(['common']);

  return (
    <Box zIndex={1} position="fixed" bottom="0" left="45%">
      <IconButton
        title={t('top')}
        borderRadius="50%"
        onClick={scrollToTop}
        aria-label={t('top')}
        icon={<BiArrowToTop fontSize="40px" />}
      />
    </Box>
  );
};

export default BackToTopMobile;
