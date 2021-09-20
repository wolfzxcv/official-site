import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box, Button, Image
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { Locales } from '../../i18n/locales';

interface InfoAccordionItemProps {
  title: string;
  content?: {type: "text" | "title" | "image" | "page", key: string}[];
  node?: React.ReactElement;
  pageCallback?: (page: number)=>void;
  callback?: ()=>void;
}

const InfoAccordionMultiItem: React.FC<InfoAccordionItemProps> = ({
  title,
  content,
  node,
  pageCallback,
  callback,
}: InfoAccordionItemProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';
  const [currentItem, setCurrentItem] = useState(0)

  return (
    <AccordionItem>
      <h2>
        <AccordionButton onClick={()=>{
          if (callback){
            callback()
          }
        }}>
          <Box flex="1" textAlign="left" fontWeight="600">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {!pageCallback && <Box pt={3}/>}
        {content && content.map((each, index) => (
          <Fragment key={each.key + index}>
            {each.type === "text" && (
              <Box pb={3} textAlign={isArabic ? 'right' : 'left'}>
                {each.key}
              </Box>
            )}
            {each.type === "title" && (
              <Box fontWeight="bold" pt={3} textAlign={isArabic ? 'right' : 'left'}>
                {each.key}
              </Box>
            )}
            {each.type === "image" && (
              <Image py={3} src={each.key} />
            )}
            {each.type === "page" && pageCallback && (
              <Box 
                pb={1} 
                cursor="pointer" 
                onClick={()=>{
                  pageCallback(index)
                  setCurrentItem(index)
                }} 
              >
                <Button 
                  style={{width: "-webkit-fill-available"}} 
                  display="flex"
                  justifyContent={isArabic ? "flex-end" : "flex-start"}
                  bgColor={currentItem === index ? "gray.200" :undefined}
                >
                  {each.key}
                </Button>
              </Box>
            )}
          </Fragment>
        ))}
        {node}
        {!pageCallback && <Box pb={3}/>}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InfoAccordionMultiItem;
