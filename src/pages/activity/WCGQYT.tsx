import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import { Locales } from '@/i18n/config';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

export const WCGQYT_BG = '#2381ff';

const WCGQYT_DATE_BG = '#e82686';
const WCGQYT_DATE_BORDER = '#d8d8d2';
const WCGQYT_BUTTON_BG = '#2740d0';
const WCGQYT_FOOTER_BG = '#2740d0';

const WCGQYT_TITLE_FONT = 'white';
const WCGQYT_FONT_YELLOW = 'yellow';

const WCGQYT: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

      {/* banner */}
      <Flex
        minH={{ base: '420px', md: '626px' }}
        bg={WCGQYT_BG}
        bgImage={{
          base: `/../assets/images/activity_WCGQYT_M.jpg`,
          md: `/../assets/images/activity_WCGQYT.jpg`
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGQYTContent />

      {/* rules */}
      <Flex bg={WCGQYT_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGQYTRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGQYTContent: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Flex bg={WCGQYT_BG} color="white" flexDir="column" align="center">
      <WCGQYTTitle />

      <Flex
        justify="center"
        my={20}
        pb={15}
        alignItems="center"
        textAlign="center"
        height={{ base: '40px', md: '60px' }}
        fontSize={{ base: '24px', md: '36px' }}
      >
        <Link
          width="30vw"
          maxW="200px"
          textAlign="center"
          mx={2}
          py={1}
          bg={WCGQYT_BUTTON_BG}
          border="1px"
          borderColor="white"
          borderRadius="5px"
          fontWeight={900}
          fontSize="24px"
          lineHeight="42px"
          _hover={{
            opacity: 0.8,
            transition: '1s'
          }}
          href="/"
          isExternal
        >
          {currentLang === 'zh' ? '官網首頁' : '官网首页'}
        </Link>
        <Link
          width="30vw"
          maxW="200px"
          textAlign="center"
          mx={2}
          py={1}
          bg={WCGQYT_BUTTON_BG}
          border="1px"
          borderColor="white"
          borderRadius="5px"
          fontWeight={900}
          fontSize="24px"
          lineHeight="42px"
          _hover={{
            opacity: 0.8,
            transition: '1s'
          }}
          href={links.registerReal}
          isExternal
        >
          {currentLang === 'zh' ? '立即開戶' : '立即开户'}
        </Link>
        <Link
          width="30vw"
          maxW="200px"
          textAlign="center"
          mx={2}
          py={1}
          bg={WCGQYT_BUTTON_BG}
          border="1px"
          borderColor="white"
          borderRadius="5px"
          fontWeight={900}
          fontSize="24px"
          lineHeight="42px"
          _hover={{
            opacity: 0.8,
            transition: '1s'
          }}
          href={links.liveChat}
          isExternal
        >
          {currentLang === 'zh' ? '在線客服' : '在线客服'}
        </Link>
      </Flex>
    </Flex>
  );
};

export const WCGQYTTitle: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Flex
      flexDir="column"
      p={2}
      pb={10}
      fontSize={{ base: '14px', md: '20px' }}
      textAlign="center"
      align="center"
      maxW="1000px"
      bg={WCGQYT_BG}
      color="white"
    >
      <Box
        border="1px"
        borderColor={WCGQYT_DATE_BORDER}
        borderRadius="20px"
        bg={WCGQYT_DATE_BG}
        color={WCGQYT_TITLE_FONT}
        py={2}
        mt={{ base: 0, md: 10 }}
        mb={10}
        width={{ base: '100%', md: 'auto' }}
        px={{ base: 'auto', md: '50px' }}
        whiteSpace="nowrap"
        fontSize={{ base: '14px', md: '22px' }}
        textAlign="center"
      >
        01/07/2024~31/07/2024
      </Box>

      <Flex mt={10} fontSize={{ base: '14px', md: '22px' }}>
        {currentLang === 'zh' ? (
          <Flex>
            <Text>報名參加活動之後的首次入金金額</Text>
            <Text color={WCGQYT_FONT_YELLOW}>回贈20%交易贈金，</Text>
          </Flex>
        ) : (
          <Flex>
            <Text>报名参加活动之后的首次入金金额</Text>
            <Text color={WCGQYT_FONT_YELLOW}>回赠20%交易赠金，</Text>
          </Flex>
        )}
      </Flex>
      <Flex fontSize={{ base: '14px', md: '22px' }}>
        {currentLang === 'zh' ? (
          <Flex>
            <Text>其後每次入金</Text>
            <Text color={WCGQYT_FONT_YELLOW}>回贈10%交易贈金!</Text>
          </Flex>
        ) : (
          <Flex>
            <Text>其後每次入金</Text>
            <Text color={WCGQYT_FONT_YELLOW}>回赠10%交易赠金!</Text>
          </Flex>
        )}
      </Flex>

      <Box mt={10} fontSize={{ base: '10px', md: '16px' }}>
        {currentLang === 'zh'
          ? '例如: 報名參加活動之後首次入金1000美元，即可獲得200美元的額外交易贈金。'
          : '例如: 报名参加活动之后首次入金1000美元，即可获得200美元的额外交易赠金。'}
      </Box>

      <Box fontSize={{ base: '10px', md: '16px' }}>
        {currentLang === 'zh'
          ? '之後每次入金都可享有入金回贈10%交易贈金的優惠，直致達到活動回贈的上限。'
          : '之后每次入金都可享有入金回赠10%交易赠金的优惠，直致达到活动回赠的上限。'}
      </Box>
    </Flex>
  );
};

const WCGQYTRules: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  return currentLang === 'zh' ? (
    <>
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·活動條款
      </Box>
      <Box>1. 此優惠活動僅開放給在WCG MARKETS開立真實的標準帳戶的客戶。</Box>
      <Box>2. 活動需主動向客服申請參加。</Box>
      <Box>3. 客戶必須在報名參加活動之後3天內完成首次入金，逾期無效。</Box>
      <Box>4. 入金金額須達500美元或以上方可享受優惠。</Box>
      <Box>
        5. 報名完成首次入金之後，在活動期間的每次入金都可獲得10%交易贈金。
      </Box>
      <Box>6. 單一交易戶口最高可獲贈金1000美元 。</Box>
      <Box>7. 交易贈金將在入金後1個工作日之後發放到客戶帳戶。</Box>
      <Box>
        8. 在交易贈金發效之前請確保帳戶余額不低於500美元，方能接收交易贈金。
      </Box>
      <Box>9. 交易贈金僅可用於交易，不可出金，不可兌換、不可轉讓。</Box>
      <Box>
        10.
        這些交易贈金無法直接提取。如果使用這些交易贈金進行交易產生盈利，則賺取的利潤將被添加到帳戶的總價值中。相反，任何產生的虧損將從帳戶價值中扣除。通過使用這些交易贈金產生的利潤可按照出金程序進行提取。
      </Box>
      <Box>
        11.
        如果客戶選擇提取部分或全部入金和/或利潤，相應部分的交易贈金，或整個交易贈金金額，將從其帳戶中的入金交易贈金將按照比例扣除。
      </Box>
      <Box>
        12.
        如果帳戶資產低於交易贈金余額，公司可以根據其絕對裁量權允許提取剩余交易贈金。然而，需要注意的是，這可能會觸發強制平倉，關閉帳戶上的所有未平倉倉位。
      </Box>
      <Box>
        13.
        活動結束會扣除所有已發放的交易贈金，請注意戶口保證金比率，此操作有引起強制平倉的風險。
      </Box>
      <Box>14. 公司保留隨時修改、終止活動及收回交易贈金的權利。</Box>
      <Box>15. 公司保留活動最終解釋權。</Box>
      <Box>
        16.
        所有異常交易包括通過超短線刷單、AB倉交易或者利用外掛軟件或其他計算機程序導致多個戶口使用相同IP地址同時下單，以及其他可疑操作完成的交易將被視為無效交易手數，不計入此活動的計算範圍內(異常交易的定義參閱WCG官網)，公司會終止本活動計劃。
      </Box>
      <Box>
        17.
        高風險投資警告差價合約（CFD）屬覆雜的金融產品，其使用杠桿交易的屬性導致本金快速虧損的可能性較高，您有可能因此被要求追加保證金。請在入市前先了解差價合約的產品原理幷考慮是否能夠承受此風險。所有金融衍生產品工具的過往價格與表現幷不擔保或代表未來走勢。此類金融產品幷不適合所有投資者，請務必在入市前完全了解所有潛在的風險，幷在有需要時尋求獨立意見。
      </Box>
      <Box>18. 活動名額有限送完即止。</Box>
      <Box>19. 每位客戶只可使用一個賬號參加此活動一次。</Box>
      <Box>
        由表格中的範例，您可了解當提交出金申請時，帳戶中的入金交易贈金將按照比例扣除。
      </Box>
      <Flex justify={{ base: 'start', md: 'center' }}>
        <StyledTable>
          <thead>
            <tr>
              <th>入金</th>
              <th>交易贈金</th>
              <th>可出金餘額</th>
              <th>出金</th>
              <th>按比例扣除的贈金金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1000</td>
              <td>150</td>
              <td>1000</td>
              <td>300（$1,000 之 30%）</td>
              <td>45（$150 之 30%）</td>
            </tr>
            <tr>
              <td>5000</td>
              <td>600</td>
              <td>5000</td>
              <td>4000（$1,000 之 80%）</td>
              <td>480（$600 之 80%）</td>
            </tr>
            <tr>
              <td>8000</td>
              <td>1000</td>
              <td>8000</td>
              <td>3500（$8,000 之 43%）</td>
              <td>430（$1,000 之 43%）</td>
            </tr>
          </tbody>
        </StyledTable>
      </Flex>
    </>
  ) : (
    <>
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·活动条款
      </Box>
      <Box>1. 此优惠活动仅开放给在WCG MARKETS开立真实的标准帐户的客户。</Box>
      <Box>2. 活动需主动向客服申请参加。</Box>
      <Box>3. 客户必须在报名参加活动之后3天内完成首次入金，逾期无效。</Box>
      <Box>4. 入金金额须达500美元或以上方可享受优惠。</Box>
      <Box>
        5. 报名完成首次入金之后，在活动期间的每次入金都可获得10%交易赠金。
      </Box>
      <Box>6. 单一交易户口最高可获赠金1000美元 。</Box>
      <Box>7. 交易赠金将在入金后1个工作日之后发放到客户帐户。</Box>
      <Box>
        8. 在交易赠金发效之前请确保帐户余额不低于500美元，方能接收交易赠金。
      </Box>
      <Box>9. 交易赠金仅可用于交易，不可出金，不可兑换、不可转让。</Box>
      <Box>
        10.
        这些交易赠金无法直接提取。如果使用这些交易赠金进行交易产生盈利，则赚取的利润将被添加到帐户的总价值中。相反，任何产生的亏损将从帐户价值中扣除。通过使用这些交易赠金产生的利润可按照出金程序进行提取。
      </Box>
      <Box>
        11.
        如果客户选择提取部分或全部入金和/或利润，相应部分的交易赠金，或整个交易赠金金额，将从其帐户中的入金交易赠金将按照比例扣除。
      </Box>
      <Box>
        12.
        如果帐户资产低于交易赠金余额，公司可以根据其绝对裁量权允许提取剩余交易赠金。然而，需要注意的是，这可能会触发强制平仓，关闭帐户上的所有未平仓仓位。
      </Box>
      <Box>
        13.
        活动结束会扣除所有已发放的交易赠金，请注意户口保证金比率，此操作有引起强制平仓的风险。
      </Box>
      <Box>14. 公司保留随时修改、终止活动及收回交易赠金的权利。</Box>
      <Box>15. 公司保留活动最终解释权。</Box>
      <Box>
        16.
        所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)，公司会终止本活动计划。
      </Box>
      <Box>
        17.
        高风险投资警告差价合约（CFD）属复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理幷考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现幷不担保或代表未来走势。此类金融产品幷不适合所有投资者，请务必在入市前完全了解所有潜在的风险，幷在有需要时寻求独立意见。
      </Box>
      <Box>18. 活动名额有限送完即止。</Box>
      <Box>19. 每位客户只可使用一个账号参加此活动一次。</Box>
      <Box>
        由表格中的范例，您可了解当提交出金申请时，帐户中的入金交易赠金将按照比例扣除。
      </Box>
      <Flex justify={{ base: 'start', md: 'center' }}>
        <StyledTable>
          <thead>
            <tr>
              <th>入金</th>
              <th>交易赠金</th>
              <th>可出金餘額</th>
              <th>出金</th>
              <th>按比例扣除的贈金金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1000</td>
              <td>150</td>
              <td>1000</td>
              <td>300（$1,000 之 30%）</td>
              <td>45（$150 之 30%）</td>
            </tr>
            <tr>
              <td>5000</td>
              <td>600</td>
              <td>5000</td>
              <td>4000（$1,000 之 80%）</td>
              <td>480（$600 之 80%）</td>
            </tr>
            <tr>
              <td>8000</td>
              <td>1000</td>
              <td>8000</td>
              <td>3500（$8,000 之 43%）</td>
              <td>430（$1,000 之 43%）</td>
            </tr>
          </tbody>
        </StyledTable>
      </Flex>
    </>
  );
};

const StyledTable = styled.table`
  border: 1px solid white;
  max-width: 800px;
  td,
  th {
    padding: 0 20px;
    line-height: 3;
    border: 1px solid white;
    text-align: center;
  }

  border-collapse: collapse;
`;

export default WCGQYT;
