import { Text } from '@chakra-ui/react';
import React from 'react';

interface InfoTitleProps {
  title: string;
  size?: string;
}

const InfoTitle: React.FC<InfoTitleProps> = ({
  title,
  size
}: InfoTitleProps) => {
  return (
    <Text fontWeight={700} fontSize={size ? size : '30px'} my={2}>
      {title}
    </Text>
  );
};

export default InfoTitle;
