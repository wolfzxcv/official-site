import { Text } from '@chakra-ui/react';
import React from 'react';

interface InfoTitleProps {
  title: string;
}

const InfoTitle: React.FC<InfoTitleProps> = ({ title }: InfoTitleProps) => {
  return (
    <Text fontWeight={700} fontSize={'30px'} my={2}>
      {title}
    </Text>
  );
};

export default InfoTitle;
