import { Text } from '@chakra-ui/react';
import React from 'react';

type InfoTitleSubProps = {
  title: string;
};

const InfoTitleSub: React.FC<InfoTitleSubProps> = ({
  title
}: InfoTitleSubProps) => {
  return (
    <Text my={5} color="gray.400">
      {title}
    </Text>
  );
};

export default InfoTitleSub;
