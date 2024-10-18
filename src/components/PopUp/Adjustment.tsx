import { Locales } from '@/i18n/config';
import { Box, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import PopUp from './PopUp';

export const Adjustment = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="美國總統選舉保證金要求調整"
      content={<AdjustmentZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="美国总统选举保证金要求调整"
      content={<AdjustmentCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="Adjustments to bond requirements for U.S. presidential election"
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
        由於美國將在2024年11月05日（星期二）舉行總統選舉，預期市況將會非常波動，為應對市場變化、降低客戶交易風險及提升客戶風險管理能力，本公司會於2024年10月25日（星期五）收市後，將保證金調高到基本保證金之300%，如客戶帳號中的保證金不足相關百分比，本公司會按照收市價對帳戶進行強制平倉，直至帳戶的保證金滿足相關百分比要求為止。
      </Box>
      <br />

      <StyledTable>
        <thead>
          <tr>
            <th>執行日期及時間</th>
            <th>保證金比率要求</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              2024年10月25日（星期五）收市後
              <br /> – 直至另行通知
            </td>
            <td>基本保證金之300%</td>
          </tr>
        </tbody>
      </StyledTable>
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
        由于美国将在2024年11月05日（星期二）举行总统选举，预期市况将会非常波动，为应对市场变化、降低客户交易风险及提升客户风险管理能力，本公司会于2024年10月25日（星期五）收市后，将保证金调高到基本保证金之300%，如客户账号中的保证金不足相关百分比，本公司会按照收市价对账户进行强制平仓，直至账户的保证金满足相关百分比要求为止。
      </Box>
      <br />

      <StyledTable>
        <thead>
          <tr>
            <th>执行日期及时间</th>
            <th>保证金比率要求</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              2024年10月25日（星期五）收市后
              <br /> – 直至另行通知
            </td>
            <td>基本保证金之300%</td>
          </tr>
        </tbody>
      </StyledTable>
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
        United States will hold a presidential election on November 5, 2024
        (Tuesday), the market conditions are expected to be very volatile. In
        order to respond to market changes, reduce customer transaction risks
        and improve customer risk management capabilities, the company will
        conduct After the market closes on the 5th (Friday), the margin will be
        increased to 300% of the basic margin. If the margin in the
        customer&apos;s account is less than the relevant percentage, the
        company will force-close the account according to the closing price
        until the margin in the account meets the relevant percentage
        requirements. until.
      </Box>
      <br />

      <StyledTable>
        <thead>
          <tr>
            <th>Execution date and time</th>
            <th>Margin ratio requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              After market close on Friday , October 25 , 2024
              <br /> – until further notice
            </td>
            <td>300% of basic margin</td>
          </tr>
        </tbody>
      </StyledTable>
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

const StyledTable = styled.table`
  border-collapse: collapse;
  td,
  th {
    border: 1px solid black;
    text-align: start;
  }
`;
