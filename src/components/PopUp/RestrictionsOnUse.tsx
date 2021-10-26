import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';

const RestrictionsOnUse: React.FC<{}> = () => {
  return (
    <Stack spacing={2} py={2}>
      <Text>
        Products and Services on this website are not suitable for Hong Kong
        residents. Such information and materials should not be regarded as or
        constitute a distribution, an offer, solicitation to buy or sell any
        investments.
      </Text>
      <Text>
        使用限制：
        本網站的產品及服務不適合香港居民使用。網站內部的信息和素材不應被視為分銷，要約，買入或賣出任何投資產品。
      </Text>
    </Stack>
  );
};

export default RestrictionsOnUse;
