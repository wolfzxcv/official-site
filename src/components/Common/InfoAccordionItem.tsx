import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';

interface InfoAccordionItemProps {
  title: string;
  content: string[];
}

const InfoAccordionItem: React.FC<InfoAccordionItemProps> = ({
  title,
  content
}: InfoAccordionItemProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'sa';

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight="600">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {content.map((each) => (
          <Box py={3} key={each} textAlign={isArabic ? 'right' : 'left'}>
            {each}
          </Box>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InfoAccordionItem;
