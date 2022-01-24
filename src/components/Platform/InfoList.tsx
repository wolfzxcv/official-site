import { CheckCircleIcon } from '@chakra-ui/icons';
import { ListIcon, ListItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/config';

interface InfoListProps {
  text: string;
}

const InfoList: React.FC<InfoListProps> = ({ text }: InfoListProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  return (
    <ListItem>
      {isArabic && text}
      <ListIcon as={CheckCircleIcon} color="red.600" mx={1} />
      {!isArabic && text}
    </ListItem>
  );
};

export default InfoList;
