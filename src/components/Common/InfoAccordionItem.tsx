import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';

interface InfoAccordionItemProps {
  title: string;
  content: string[];
  internalHref?: string;
  externalHref?: string;
}

const InfoAccordionItem: React.FC<InfoAccordionItemProps> = ({
  title,
  content,
  internalHref = '',
  externalHref = ''
}: InfoAccordionItemProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

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
        {content.map((each) =>
          internalHref ? (
            <NextLink key={each} href={internalHref} locale={currentLang}>
              <Box
                py={3}
                textAlign={isArabic ? 'right' : 'left'}
                _hover={{ cursor: 'pointer' }}
              >
                {each}
              </Box>
            </NextLink>
          ) : externalHref ? (
            <Link
              key={each}
              _hover={{
                textDecoration: 'none'
              }}
              href={externalHref}
              isExternal
            >
              <Box py={3} textAlign={isArabic ? 'right' : 'left'}>
                {each}
              </Box>
            </Link>
          ) : (
            <Box py={3} key={each} textAlign={isArabic ? 'right' : 'left'}>
              {each}
            </Box>
          )
        )}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InfoAccordionItem;
