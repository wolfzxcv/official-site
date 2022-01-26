import { Locales } from '@/i18n/config';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Link,
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { StyledBox } from '../Styled/Styled';

type InfoAccordionProps = {
  data: InfoAccordionItemProps[];
};

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

type IAccordionItemType =
  | 'title'
  | 'image'
  | 'text'
  | 'text'
  | 'buttonLink'
  | 'twoSection';

type IComplexContent = {
  type: IAccordionItemType;
  objectKey: string;
  secondKey?: string;
};
export type InfoAccordionItemProps = {
  date?: string;
  title: string;
  htmlContent?: string;
  content?: string[];
  complexContent?: IComplexContent[];
  internalHref?: string;
  externalHref?: string;
};

const InfoAccordionItem: React.FC<InfoAccordionItemProps> = ({
  date = '',
  title,
  content = [],
  complexContent = [],
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
        {content &&
          content.map((each) => {
            let pl = '0';
            if (each.startsWith('  ')) {
              pl = '30px';
            } else if (each.startsWith(' ')) {
              pl = '15px';
            }

            return internalHref ? (
              <NextLink key={each} href={internalHref} locale={currentLang}>
                <Box
                  py={3}
                  pl={pl}
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
                <Box pl={pl} py={3} textAlign={isArabic ? 'right' : 'left'}>
                  {each}
                </Box>
              </Link>
            ) : (
              <Box
                pl={pl}
                py={3}
                key={each}
                textAlign={isArabic ? 'right' : 'left'}
              >
                {each}
              </Box>
            );
          })}
        {complexContent &&
          complexContent.map((each, index) => (
            <Fragment key={each.type + each.objectKey + index}>
              {each.type === 'text' && (
                <Box py={2} textAlign={isArabic ? 'right' : 'left'}>
                  {each.objectKey}
                </Box>
              )}
              {each.type === 'title' && (
                <Box
                  fontWeight="bold"
                  pt={{ base: 5, md: 10 }}
                  pb={2}
                  textAlign={isArabic ? 'right' : 'left'}
                >
                  {each.objectKey}
                </Box>
              )}
              {each.type === 'twoSection' && (
                <Box textAlign={isArabic ? 'right' : 'left'}>
                  <Text py={2}>
                    <span style={{ fontWeight: 'bold' }}>{each.objectKey}</span>{' '}
                    <span>{each.secondKey}</span>
                  </Text>
                </Box>
              )}
              {each.type === 'image' && (
                <Image alt="image" py={2} src={each.objectKey} />
              )}
              {each.type === 'buttonLink' && each.secondKey && (
                <Link
                  _hover={{
                    textDecoration: 'none'
                  }}
                  href={each.secondKey}
                  isExternal
                >
                  <StyledBox
                    mb={10}
                    p={2}
                    bg="red.600"
                    color="white"
                    fontSize="14px"
                    textAlign="center"
                    width="250px"
                    _hover={{
                      bgColor: 'red.500',
                      cursor: 'pointer',
                      transition: '1s'
                    }}
                  >
                    {each.objectKey}
                  </StyledBox>
                </Link>
              )}
            </Fragment>
          ))}
        {htmlContent && (
          <Box my={2} dangerouslySetInnerHTML={{ __html: htmlContent }} />
        )}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InfoAccordion;
