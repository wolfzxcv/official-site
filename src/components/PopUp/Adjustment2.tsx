import { Locales } from '@/i18n/config';
import { Box, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import PopUp from './PopUp';

export const Adjustment2 = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp title="處理通知" content={<AdjustmentZh />} useBorder={false} />
  ) : currentLang === 'cn' ? (
    <PopUp title="处理通知" content={<AdjustmentCn />} useBorder={false} />
  ) : (
    <PopUp
      title="Notice of processing"
      content={<AdjustmentEn />}
      useBorder={false}
    />
  );
};

const AdjustmentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box fontWeight="bold" textAlign="center">
        周五或假期前夕過市的保證金比例不足100%處理通知
      </Box>
      <br />

      <Box>
        鑒於市况波動，本公司爲降低客戶交易風險，决定于2024年3月1日(星期五)，調整周末及假期前夕過市保證金政策，保證金水平不足所需保證金100%
        時，系統會爲客戶强制平倉至維持保證金高100%爲止，强制平倉價格會按當天收市價進行結算。
      </Box>
      <Box>
        若客戶之交易單需要持倉過周末及假期休市，請客戶在周末及假期休市前補充足够的保證金，以避免被强制平倉。
      </Box>

      <Box fontWeight="bold">
        重要提示：爲避免在同一時間客戶集中注資，導致渠道擠擁，從而影響注資流𣈱性，建議客戶提前做好存款準備。
      </Box>
    </Stack>
  );
};

const AdjustmentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box fontWeight="bold" textAlign="center">
        周五或假期前夕过市的保证金比例不足100%处理通知
      </Box>
      <br />

      <Box>
        鉴于市况波动，本公司爲降低客户交易风险，决定于2024年3月1日(星期五)，调整周末及假期前夕过市保证金政策，保证金水平不足所需保证金100%
        时，系统会爲客户强制平仓至维持保证金高100%爲止，强制平仓价格会按当天收市价进行结算。
      </Box>
      <Box>
        若客户之交易单需要持仓过周末及假期休市，请客户在周末及假期休市前补充足够的保证金，以避免被强制平仓。
      </Box>

      <Box fontWeight="bold">
        重要提示：爲避免在同一时间客户集中注资，导致渠道挤拥，从而影响注资流𣈱性，建议客户提前做好存款准备。
      </Box>
    </Stack>
  );
};

const AdjustmentEn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '6px', md: '12px' }}>
      <Box fontWeight="bold" textAlign="center">
        Notice of processing: if the margin ratio is less than 100% on Friday or
        the eve of a holiday
      </Box>
      <br />

      <Box>Dear Clients, </Box>
      <Box>
        We hope this message finds you well. We appreciate your continued trust
        in WCG Market for your trading needs.
      </Box>
      <Box>
        In view of the volatile market conditions, the Company has decided to
        reduce the trading risk of customers, on March 1, 2024 (Friday), to
        adjust the weekend and holiday eve margin policy, if the margin level is
        less than 100% of the required margin, the system will force customers
        to close their positions until the guarantee level is maintained at
        100%, and the forced closing price will be settled at the closing price
        of the day.
      </Box>

      <Box>
        If the customer&apos;s order requires the position to be held over
        weekends and holidays, the customer is required to replenish sufficient
        margin before the market is closed on weekends and holidays to avoid
        being forced to close the position.
      </Box>

      <Box fontWeight="bold">
        Important note: In order to avoid customers’ concentrated capital
        injection at the same time, which will lead to channel congestion and
        thus affect the liquidity of capital injection, it is recommended that
        customers make deposit preparations in advance.
      </Box>
    </Stack>
  );
};
