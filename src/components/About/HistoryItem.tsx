import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

interface HistoryItemProps {
  location?: 'left' | 'right';
  year: string;
  month: string;
  text: string;
  color: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
  location = 'right',
  year,
  month,
  text,
  color
}: HistoryItemProps) => {
  return (
    <Box>
      <HistoryWording
        month={location === 'left' ? month : ''}
        text={location === 'left' ? text : ''}
      />
      <Box></Box>
      <HistoryWording
        month={location === 'right' ? month : ''}
        text={location === 'right' ? text : ''}
      />
    </Box>
  );
};

interface HistoryWordingProps {
  month?: string;
  text?: string;
}

const HistoryWording: React.FC<HistoryWordingProps> = ({
  month,
  text
}: HistoryWordingProps) => {
  return (
    <Flex direction="column">
      {month && text && (
        <>
          <Box>{month}</Box>
          <Box>{text}</Box>
        </>
      )}
    </Flex>
  );
};

export default HistoryItem;
