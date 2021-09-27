import {
  Accordion,
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

interface InfoAccordionProps {
  data: InfoAccordionItemProps[];
}

const InfoAccordion: React.FC<InfoAccordionProps> = ({
  data
}: InfoAccordionProps) => {
  return (
    <Accordion width={{ base: '90vw', md: '80vw' }} my={10} allowToggle>
      {data.map((x) => (
        <InfoAccordionItem key={x.title} {...x} />
      ))}
    </Accordion>
  );
};

export interface InfoAccordionItemProps {
  date?: string;
  title: string;
  htmlContent?: string;
  content?: string[];
  internalHref?: string;
  externalHref?: string;
}

const InfoAccordionItem: React.FC<InfoAccordionItemProps> = ({
  date = '',
  title,
  content = [],
  htmlContent = '',
  internalHref = '',
  externalHref = ''
}: InfoAccordionItemProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  return (
    <AccordionItem>
      <h2>
        <AccordionButton fontSize={{ base: '12px', md: 'inherit' }}>
          {date && (
            <Box
              bg="gray.500"
              color="white"
              px={{ base: 1, md: 2 }}
              py={1}
              mr={{ base: 3, md: 20 }}
            >
              {date}
            </Box>
          )}
          <Box flex="1" textAlign="left" fontWeight="600" py={2}>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} fontSize={{ base: '12px', md: 'inherit' }}>
        {content && content.length
          ? content.map((each) =>
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
            )
          : null}
        {htmlContent && (
          <Box my={2} dangerouslySetInnerHTML={{ __html: htmlContent }} />
        )}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InfoAccordion;
