import { Locales } from '@/i18n/config';
import { Box, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import PopUp from './PopUp';

export const Adjustment3 = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="交易產品編號更新通告"
      content={<AdjustmentZh />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="交易产品编号更新通告"
      content={<AdjustmentCn />}
      useBorder={false}
    />
  );
};

const AdjustmentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box>
        WCG
        MARKETS致力提供更方便的產品服務於客戶，讓交易產品編號更統一，我們將於23/02/2024週五收市之後把部分產品的後綴，
        (如:#，-S)等取消。所有交易包括持倉單，交易規則等都不會受到影響。
      </Box>
      <br />
      <Box>敬希垂注</Box>
      <br />
      <Box>WCG MARKETS</Box>
      <Box>23/02/2024</Box>
    </Stack>
  );
};

const AdjustmentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box>
        WCG
        MARKETS致力提供更方便的产品服务于客户，让交易产品编号更统一，我们将于23/02/2024週五收市之后把部分产品的后缀，
        (如:#，-S)等取消。所有交易包括持仓单，交易规则等都不会受到影响。
      </Box>
      <br />
      <Box>敬希垂注</Box>
      <br />
      <Box>WCG MARKETS</Box>
      <Box>23/02/2024</Box>
    </Stack>
  );
};
