import { Text } from '@chakra-ui/react';
import React from 'react';

type InfoTitleProps = {
  title: string;
  size?: string;
  minH?: string;
};

const InfoTitle: React.FC<InfoTitleProps> = ({
  title,
  size,
  minH
}: InfoTitleProps) => {
  return (
    <Text
      color="inherit"
      minH={minH ? minH : 'auto'}
      fontWeight={700}
      fontSize={size ? size : '30px'}
      my={2}
    >
      {title}
    </Text>
  );
};

export default InfoTitle;
