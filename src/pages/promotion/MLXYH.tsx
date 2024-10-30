import HTMLHead from '@/components/Base/HTMLHead';
import SubmitForm, { IField } from '@/components/Form/SubmitForm';
import { Box, Flex, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import * as Yup from 'yup';

const MLXYH_BG = '#8d0100';

const MLXYH_FOOTER_BG = '#590306';
const MLXYH_DATE_BG = '#e5392b';
const MLXYH_DATE_BORDER = '#c89179';

const MLXYH_FONT_WHITE = 'white';
const MLXYH_FONT_YELLOW = '#f0d58a';
const MLXYH_FONT_BLACK = 'black';

const MLXYH_TABLE_BG_LIGHT_BROWN = '#ac1a1a';
const MLXYH_TABLE_BG_DARK_BROWN = '#8d0100';

const SUBMIT_BUTTON_COLOR = '#e82006';
const SUBMIT_FORM_BG = '#991c1a';

const MLXYH: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

      {/* banner */}
      <Flex
        minH={{ base: '280px', md: '600px' }}
        bg={MLXYH_BG}
        bgImage={{
          base: '/../assets/images/activity_MLXYH_M.jpg',
          md: '/../assets/images/activity_MLXYH.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize="cover"
        bgRepeat="no-repeat"
      />

      {/* content */}
      <MLXYHContent />

      {/* rules */}
      <Flex bg={MLXYH_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={MLXYH_FONT_WHITE}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <MLXYHRules />
        </Stack>
      </Flex>
    </>
  );
};

const MLXYHContent: React.FC<{}> = () => (
  <Flex
    bg={MLXYH_BG}
    color={MLXYH_FONT_WHITE}
    flexDir="column"
    align="center"
    pt={10}
  >
    <MLXYHTitle />
    <MLXYHForm />

    <Box mt="50px" fontSize={{ base: '14px', md: '22px' }}>
      您需达成下列交易手数即可以提取赠金
    </Box>
    <Box mb="20px" color={MLXYH_FONT_YELLOW} textAlign="center">
      You need to reach the following trading lot requirements to withdraw the
      bonus.
    </Box>
    {/* table */}
    <MLXYHTable />
  </Flex>
);

export const MLXYHTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    pb={20}
    fontSize={{ base: '14px', md: '20px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
    bg={{ base: MLXYH_BG, md: MLXYH_BG }}
    color="white"
  >
    <Box
      border="1px"
      borderColor={MLXYH_DATE_BORDER}
      borderRadius={{ base: '20px', md: '40px' }}
      bg={MLXYH_DATE_BG}
      p={2}
      mt={{ base: 0, md: 10 }}
      mb={10}
      width={{ base: '100%', md: 'auto' }}
      px={{ base: 'auto', md: '50px' }}
      whiteSpace="nowrap"
      fontSize={{ base: '14px', md: '22px' }}
      textAlign="center"
    >
      <Box color={MLXYH_FONT_WHITE}>活动日期:2024年10月1日至2025年1月31日</Box>
      <Box color={MLXYH_FONT_YELLOW}>
        Event Date: October 1, 2024 to January 31, 2025
      </Box>
    </Box>
  </Flex>
);

const MLXYHTable: React.FC<{}> = () => (
  <Box
    width={{ base: '95vw', md: '800px' }}
    mt={8}
    mb={{ base: '50px', md: '100px' }}
    fontSize={{ base: '10px', md: '18px' }}
  >
    <StyledMLXYHTable>
      <thead>
        <tr>
          <th>
            Deposit <br /> requirements
          </th>
          <th>
            20% <br /> Bonus
          </th>
          <th>
            Lot withdrawal <br /> requirements
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5000</td>
          <td>1000</td>
          <td>250</td>
        </tr>
        <tr>
          <td>2000</td>
          <td>400</td>
          <td>100</td>
        </tr>
        <tr>
          <td>1000</td>
          <td>200</td>
          <td>50</td>
        </tr>
        <tr>
          <td>500</td>
          <td>100</td>
          <td>25</td>
        </tr>
        <tr>
          <td>200</td>
          <td>40</td>
          <td>10</td>
        </tr>
        <tr>
          <td>100</td>
          <td>20</td>
          <td>5</td>
        </tr>
      </tbody>
    </StyledMLXYHTable>
  </Box>
);

const StyledMLXYHTable = styled.table`
  width: 100%;
  color: ${MLXYH_FONT_WHITE};
  border-collapse: collapse;
  td,
  th {
    border: 1px solid ${MLXYH_FONT_WHITE};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  thead > tr > th {
    background-color: ${MLXYH_TABLE_BG_DARK_BROWN};
  }

  tbody > tr > td {
    background-color: ${MLXYH_TABLE_BG_LIGHT_BROWN};
  }

  th {
    font-size: ${{ base: '16px', md: '20pt' }};
    white-space: ${{ base: 'nowrap', md: 'inherit' }};
  }
`;

const MLXYHRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动规则 | Event rules
    </Box>

    <Box>1. 交易赠金只限交易之用，不能取出。</Box>
    <Box mb={2}>
      1. The trading bonus is for trading purposes only and cannot be withdraw.
    </Box>
    <Box>2. 本次活动允许MT4账户的最大杠杆上限为 1:200。</Box>
    <Box mb={2}>
      2. The minimum leverage limit for MT4 accounts in this event is 1:200
    </Box>
    <Box>3. 客户必须通过提交申请表格方可参加活动。</Box>
    <Box mb={2}>
      3. Customers must apply to participate by submitting the application form.
    </Box>
    <Box>4. 未能转变成现金奖励的交易赠金额于活动结束日收市后自动扣除。</Box>
    <Box mb={2}>
      4. Any unconverted trading bonus will be automatically deducted at the
      close of the event.
    </Box>
    <Box>
      5.
      客户需自行注意交易账户中交易赠金的变化，这可能引起保证金的变化，有机会导致强制平仓的风险。
    </Box>
    <Box mb={2}>
      5. Customers should monitor the changes in the trading bonus, as this may
      affect margin and lead to potential forced liquidation.
    </Box>
    <Box>
      6.
      客户在活动期间内申请提取全部成部分资金，将取消此活动资格，并实时取消所获的奖励或交易赠金。
    </Box>
    <Box mb={2}>
      6. If a customer withdraws funds during the event, they will be
      disqualified from the event, and any bonuses will be immediately
      cancelled.
    </Box>
    <Box>7. 客户在活动期间完成所属的人金和交易手数后，即可提取赠金。</Box>
    <Box mb={2}>
      7. Customers can withdraw the bonus once they meet the deposit and trading
      lot requirements during the event.
    </Box>
    <Box>8. 要求是从活动日期起开仓计算的已平仓单方计算交易手数。</Box>
    <Box mb={2}>
      8. The trading lot requirements are calculated from the opening of trades
      during the event period and based on closed trades.
    </Box>
    <Box>
      9.
      贵金属，原油交易手数定义;黄金1标准手100盎司，白银1标准手2500盎司，原油1标准手1000桶;外汇产品交易2标准手=1手计算。
    </Box>
    <Box mb={2}>
      9. Definition of trading lots for precious metals and crude oil: Gold 1
      standard lot is 100 ounces, Silver 1 standard lot is 2500 ounces, Oil 1
      standard lot is 1000 barrels, Forex products - 2 standard lots = 1 lot.
    </Box>
    <Box>10. 达到要求的现金奖励于活动结束后一周内发放。</Box>
    <Box mb={2}>
      10. The cash bonus will be issued within one week after the event ends.
    </Box>
    <Box>11. 每位客户只可使用一个账号参加一次交易赠金发放。</Box>
    <Box mb={2}>
      11. Each customer can participate in the event using only one account and
      can receive the bonus only once.
    </Box>
    <Box>12. 单一交易账户最高可获得交易赠金1000美元。</Box>
    <Box mb={2}>
      12. A single trading account can receive up to 1000 USD in trading
      bonuses.
    </Box>
    <Box>
      13.
      所有异常交易包括通过超短线刷单(15分钟内)、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box mb={2}>
      13. All abnormal transactions including ultra-short-term order brushing
      (within 15 minutes), AB position trading, or the use of plug-in software
      or other computer programs that cause multiple accounts to place orders at
      the same time using the same IP address, as well as transactions completed
      by other suspicious operations will be considered It is an invalid trading
      lot and is not included in the calculation range of this activity (for the
      definition of abnormal transactions, please refer to the WCG official
      website).
    </Box>
    <Box>
      14.
      高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
    <Box mb={2}>
      14. High Risk Investment Warning: Contracts for Difference ( CFD ) are
      complex financial products, and their use of leveraged transactions may
      lead to a higher possibility of rapid loss of principal, and you may be
      required to add margin as a result. Please understand the product
      principles of CFDs before entering the market and consider whether you can
      bear the risk. The past prices and performance of all financial derivative
      instruments do not guarantee or represent future trends. Such financial
      products are not suitable for all investors. Please be sure to fully
      understand all potential risks before entering the market, and seek
      independent advice when necessary.
    </Box>
    <Box>15. 活動名額有限，送完即止。</Box>
    <Box mb={2}>
      15. The number of places for the event is limited while supplies last.
    </Box>
    <Box>
      16.
      所有異常交易包括通過超短線刷單(15分鐘內)、AB倉交易或者利用外掛軟件或其他計算機程序導致多個戶口使用相同IP地址同時下單，以及其他可疑操作完成的交易將被視為無效交易手數，不計入此活動的計算範圍內(異常交易的定義參閱WCG官網)。
    </Box>
    <Box mb={2}>
      16. All abnormal transactions including ultra-short-term order brushing
      (within 15 minutes) , AB warehouse transactions, or the use of plug-in
      software or other computer programs that cause multiple accounts to place
      orders simultaneously using the same IP address, as well as transactions
      completed by other suspicious operations will be considered invalid. The
      number of trading lots is not included in the calculation range of this
      activity( For the definition of abnormal transactions, please refer to the
      WCG official website).
    </Box>
    <Box>
      17.
      WCG保留随时修改·暂停或终止本活动计划及相会规则的权利·无需事先通却客户。
    </Box>
    <Box mb={2}>
      17. WCG reserves the righto modify, suspend, or terminate this promotion
      and any related rules at any time without prior notice to customers.
    </Box>
    <Box>18. 公司保留活動最終解釋權。</Box>
    <Box>
      18. The company reserves the right of final interpretation of the event.
    </Box>
  </>
);

const StyledSubmitForm = styled.div`
  .chakra-button {
    background-color: ${SUBMIT_BUTTON_COLOR};

    margin: 20px 0 0 10px;
    &:hover {
      background-color: ${SUBMIT_BUTTON_COLOR};
      opacity: 0.5;
      transition: all 1s;
    }
  }

  .chakra-input {
    width: 'inherit';
    color: ${MLXYH_FONT_BLACK};
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
    }
  }
`;

const MESSAGES = {
  tooShort: '太短',
  tooLong: '太长',
  required: '必填',
  invalidFormat: '格式错误'
};

const MLXYHForm: React.FC<{}> = () => {
  const data: IField[] = [
    {
      name: 'name',
      placeholder: '姓名 | Name',
      variant: 'filled',
      formControlWidth: '90%',
      initialValue: '',
      rule: Yup.string()
        .min(2, MESSAGES.tooShort)
        .max(30, MESSAGES.tooLong)
        .required(MESSAGES.required)
    },
    {
      name: 'email',
      placeholder: '开户邮箱 | Email Address',
      variant: 'filled',
      formControlWidth: '90%',
      initialValue: '',
      rule: Yup.string()
        .email(MESSAGES.invalidFormat)
        .required(MESSAGES.required)
    },
    {
      name: 'mobile',
      placeholder: 'MT4账户 | MT4Account',
      variant: 'filled',
      formControlWidth: '90%',
      initialValue: '',
      rule: Yup.string()
        .min(2, MESSAGES.tooShort)
        .max(30, MESSAGES.tooLong)
        .required(MESSAGES.required)
    }
  ];

  return (
    <Flex
      width={{ base: '100%', md: '600px' }}
      bg={SUBMIT_FORM_BG}
      align="center"
      flexDir="column"
    >
      <StyledSubmitForm>
        <Flex
          my={10}
          fontSize={{ base: '14px', md: '22px' }}
          width="inherit"
          justify="center"
        >
          <Box>申请表格 | </Box>
          <Box color={MLXYH_FONT_YELLOW}> Application Form</Box>
        </Flex>

        <Box
          width={{ base: '98%', md: '350px' }}
          mb={10}
          px={{ base: 10, md: 0 }}
        >
          <SubmitForm
            data={data}
            submit={'提交'}
            afterSubmit={'提交成功，专员将尽速与您联繫!'}
            agreement="我已阅读并同意下方所有条款和条件"
            api="/mlxyh"
            submitButtonWidth={{ base: '80vw', md: '200px' }}
            useBlackColor
          />
        </Box>
      </StyledSubmitForm>
    </Flex>
  );
};

export default MLXYH;
