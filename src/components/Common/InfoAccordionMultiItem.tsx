import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Image,
  Link,
  Text
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { Locales } from '../../i18n/locales';
import { StyledBox } from '../Styled/Styled';

export type IAccordionItemBasicType = 'page' | 'title' | 'image' | 'text';

export type IAccordionItemType =
  | IAccordionItemBasicType
  | 'point'
  | 'lastPoint'
  | 'buttonLink'
  | 'twoSection';

interface InfoAccordionItemProps {
  title: string;
  content?: {
    type: IAccordionItemType;
    key: string;
    secondKey?: string;
  }[];
  node?: React.ReactElement;
  pageCallback?: (page: number) => void;
  callback?: () => void;
}

const InfoAccordionMultiItem: React.FC<InfoAccordionItemProps> = ({
  title,
  content,
  node,
  pageCallback,
  callback
}: InfoAccordionItemProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          onClick={() => {
            if (callback) {
              callback();
            }
          }}
        >
          <Box flex="1" textAlign="left" fontWeight="600">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {!pageCallback && <Box pt={3} />}
        {content &&
          content.map((each, index) => (
            <Fragment key={each.key + index}>
              {each.type === 'text' && (
                <Box pb={3} textAlign={isArabic ? 'right' : 'left'}>
                  {each.key}
                </Box>
              )}
              {each.type === 'point' && (
                <Box pb={0} textAlign={isArabic ? 'right' : 'left'}>
                  {each.key}
                </Box>
              )}
              {each.type === 'lastPoint' && (
                <Box pb={3} textAlign={isArabic ? 'right' : 'left'}>
                  {each.key}
                </Box>
              )}
              {each.type === 'title' && (
                <Box
                  fontWeight="bold"
                  pt={3}
                  textAlign={isArabic ? 'right' : 'left'}
                >
                  {each.key}
                </Box>
              )}
              {each.type === 'twoSection' && (
                <Box textAlign={isArabic ? 'right' : 'left'}>
                  <Text py={1}>
                    <span style={{ fontWeight: 'bold' }}>{each.key}</span>{' '}
                    <span>{each.secondKey}</span>
                  </Text>
                </Box>
              )}
              {each.type === 'image' && <Image py={3} src={each.key} />}
              {each.type === 'page' && pageCallback && (
                <Box
                  pb={1}
                  cursor="pointer"
                  onClick={() => {
                    pageCallback(index);
                    setCurrentItem(index);
                  }}
                >
                  <Button
                    style={{ width: '-webkit-fill-available' }}
                    display="flex"
                    justifyContent={isArabic ? 'flex-end' : 'flex-start'}
                    bgColor={currentItem === index ? 'gray.200' : undefined}
                  >
                    {each.key}
                  </Button>
                </Box>
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
                    {each.key}
                  </StyledBox>
                </Link>
              )}
            </Fragment>
          ))}
        {node}
        {!pageCallback && <Box pb={3} />}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InfoAccordionMultiItem;
