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
    <Accordion width={'80vw'} allowToggle>
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
        <AccordionButton>
          {date && (
            <Box bg="red" mr={5}>
              {date}
            </Box>
          )}
          <Box flex="1" textAlign="left" fontWeight="600" py={2}>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {content &&
          content.length &&
          content.map((each) =>
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

        {htmlContent && (
          <Box dangerouslySetInnerHTML={{ __html: htmlContent }} />
        )}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InfoAccordion;
