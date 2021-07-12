import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react';
import React from 'react';

interface InfoAccordionItemProps {
  title: string;
  content: string[];
}

const InfoAccordionItem: React.FC<InfoAccordionItemProps> = ({
  title,
  content
}: InfoAccordionItemProps) => {
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
          <Box my={1} key={each}>
            {each}
          </Box>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InfoAccordionItem;
