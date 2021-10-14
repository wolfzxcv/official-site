import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

type ILocation = 'left' | 'right';
export interface HistoryItemProps {
  location?: ILocation;
  year: string;
  month: string;
  text: string[];
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
    <>
      {/* desktop layout */}
      <Flex
        width="100%"
        border="2px"
        borderColor="white"
        display={{ base: 'none', md: 'inherit' }}
      >
        <HistoryWording
          location="left"
          month={location === 'left' ? month : ''}
          text={location === 'left' ? text : []}
        />
        <Flex>
          <HistoryCircle
            location="left"
            color={location === 'left' ? color : ''}
            year={location === 'left' ? year : ''}
          />
          <Stem location={location} color={color} />
          <HistoryCircle
            color={location === 'right' ? color : ''}
            year={location === 'right' ? year : ''}
          />
        </Flex>
        <HistoryWording
          month={location === 'right' ? month : ''}
          text={location === 'right' ? text : []}
        />
      </Flex>

      {/* mobile layout */}
      <Flex
        width="100%"
        border="2px"
        borderColor="white"
        borderRight="none"
        display={{ base: 'inherit', md: 'none' }}
      >
        <Stem color={color} />
        <HistoryCircle color={color} year={year} />
        <HistoryWording month={month} text={text} />
      </Flex>
    </>
  );
};

interface StemProps {
  location?: ILocation;
  color: string;
}

const Stem: React.FC<StemProps> = ({
  color,
  location = 'right'
}: StemProps) => {
  return (
    <Flex
      width={{ base: '20px', md: '30px' }}
      minH={{ base: '180px', md: '120px' }}
      bg={color}
      align="center"
    >
      <Box
        width="25px"
        height="25px"
        bg={color}
        border="2px"
        borderColor="white"
        borderRadius="50%"
        position="relative"
        left={{
          base: location === 'right' ? '10px' : '-10px',
          md: location === 'right' ? '15px' : '-15px'
        }}
      ></Box>
    </Flex>
  );
};

interface HistoryCircleProps {
  location?: ILocation;
  color: string;
  year: string;
}

const HistoryCircle: React.FC<HistoryCircleProps> = ({
  location = 'right',
  color,
  year
}: HistoryCircleProps) => {
  return (
    <Flex
      width="150px"
      align="center"
      justify={location === 'right' ? 'inherit' : 'flex-end'}
    >
      {color && year && (
        <>
          {location === 'right' && (
            <Box width="30px" height="0.6em" bg={color}></Box>
          )}
          <Flex
            width={{ base: '70px', md: '5em' }}
            height={{ base: '70px', md: '5em' }}
            bg={color}
            borderRadius="50%"
            justify="center"
            align="center"
          >
            <Flex
              width={{ base: '50px', md: '3.5em' }}
              height={{ base: '50px', md: '3.5em' }}
              bg="white"
              borderRadius="50%"
              justify="center"
              align="center"
              style={{ boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.5)' }}
            >
              <Box fontWeight="600">{year}</Box>
            </Flex>
          </Flex>
          {location === 'left' && (
            <Box width="30px" height="0.6em" bg={color}></Box>
          )}
        </>
      )}
    </Flex>
  );
};

interface HistoryWordingProps {
  location?: ILocation;
  month?: string;
  text?: string[];
}

const HistoryWording: React.FC<HistoryWordingProps> = ({
  location = 'right',
  month,
  text
}: HistoryWordingProps) => {
  return (
    <Flex direction="column" width={{ base: '80%', md: '40%' }}>
      {month && text && text.length && (
        <Stack spacing={1}>
          <Box
            fontWeight="600"
            textAlign={location === 'right' ? 'inherit' : 'right'}
            pt={{ base: 5, md: 0 }}
          >
            {month}
          </Box>
          {text.map((x) => (
            <Text
              textAlign={location === 'right' ? 'inherit' : 'right'}
              key={x}
            >
              {x}
            </Text>
          ))}
        </Stack>
      )}
    </Flex>
  );
};

export default HistoryItem;
