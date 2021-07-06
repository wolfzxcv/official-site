import { Text } from '@chakra-ui/layout';
import React from 'react';

export const Copyright: React.FC<{}> = () => (
  <Text fontSize="large" alignSelf={{ base: 'center', sm: 'start' }}>
    &copy; {new Date().getFullYear()} Alice Chou. All rights reserved. Non
    commercial usage.
  </Text>
);
