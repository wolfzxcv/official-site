import { Locales } from '@/i18n/config';
import { Box, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import PopUp from './PopUp';

export const Adjustment = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="保證金調整回復通知"
      content={<AdjustmentZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="保证金调整回復通知"
      content={<AdjustmentCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="Adjustments retrieval"
      content={<AdjustmentEn />}
      useBorder={false}
    />
  );
};

const AdjustmentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box>致尊貴的客戶：</Box>
      <br />
      <Box>
        由於美國總統選舉已經結束，早前為應對市場變化、降低客戶交易風險而調整了保證金比率要求，本公司會於2024年11月08日（星期五）收市後，將保證金調回復到原本的水平，如客戶帳號中的保證金不足相關百分比，本公司會按照收市價對賬戶進行強制平倉，直至帳戶的保證金滿足相關百分比要求為止。
      </Box>
      <br />

      <Box>
        請留意帳戶資金水平，提前做好資金調配。如有任何查詢，歡迎隨時致電我們的客戶服務部。
      </Box>
      <br />
      <Box>WCG MARKETS謹啓</Box>
    </Stack>
  );
};

const AdjustmentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box>致尊贵的客户：</Box>
      <br />
      <Box>
        由于美国总统选举已经结束，早前为应对市场变化、降低客户交易风险而调整了保证金比率要求，本公司会于2024年11月08日（星期五）收市后，将保证金调回復到原本的水平，如客户帐号中的保证金不足相关百分比，本公司会按照收市价对账户进行强制平仓，直至账户的保证金满足相关百分比要求为止。
      </Box>
      <br />

      <Box>
        请留意账户资金水平，提前做好资金调配。如有任何查询，欢迎随时致电我们的客户服务部。
      </Box>
      <br />
      <Box>WCG MARKETS谨啓</Box>
    </Stack>
  );
};

const AdjustmentEn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '6px', md: '12px' }}>
      <Box>To our valued customers:</Box>
      <br />
      <Box>
        Since the U.S. presidential election has ended, the margin ratio
        requirements were adjusted earlier in order to respond to market changes
        and reduce customer transaction risks. The company will return the
        margin to the original level after the market closes on November 8, 2024
        (Friday). If the margin in the customer&apos;s account is less than the
        relevant percentage, the company will force the account to be liquidated
        based on the closing price until the margin in the account meets the
        relevant percentage requirements.
      </Box>
      <br />

      <Box>
        Please pay attention to the level of funds in your account and make fund
        allocations in advance. If you have any inquiries, please feel free to
        call our customer service department.
      </Box>
      <br />
      <Box>Sincerely, WCG MARKETS</Box>
    </Stack>
  );
};
