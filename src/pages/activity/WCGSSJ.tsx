import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import React from 'react';

export const WCGSSJ_BG = '#13447c';

const WCGSSJ_DATE_BG = '#ff33ac';
const WCGSSJ_DATE_BORDER = '#ebaead';
const WCGSSJ_BUTTON_BG = '#137bb0';
const WCGSSJ_FOOTER_BG = '#0a1e3f';

const WCGSSJ_TITLE_FONT = 'white';

const WCGSSJ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '420px', md: '500px' }}
        bg={WCGSSJ_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGSSJ_M.jpg',
          md: '/../assets/images/activity_WCGSSJ.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGSSJContent />

      {/* rules */}
      <Flex bg={WCGSSJ_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGSSJRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGSSJContent: React.FC<{}> = () => {
  return (
    <Flex bg={WCGSSJ_BG} color="white" flexDir="column" align="center">
      <WCGSSJTitle />

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
          bg={WCGSSJ_BUTTON_BG}
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
          官網首頁
        </Link>
        {/* <Link
          width="30vw"
          maxW="200px"
          textAlign="center"
          mx={2}
          py={1}
          bg={WCGSSJ_BUTTON_BG}
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
         立即開戶
        </Link> */}
        <Link
          width="30vw"
          maxW="200px"
          textAlign="center"
          mx={2}
          py={1}
          bg={WCGSSJ_BUTTON_BG}
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
          在線客服
        </Link>
      </Flex>
    </Flex>
  );
};

export const WCGSSJTitle: React.FC<{}> = () => {
  return (
    <Flex
      flexDir="column"
      p={2}
      pb={10}
      fontSize={{ base: '14px', md: '20px' }}
      textAlign="center"
      align="center"
      maxW="1000px"
      bg={WCGSSJ_BG}
      color="white"
    >
      <Box
        border="1px"
        borderColor={WCGSSJ_DATE_BORDER}
        borderRadius="20px"
        bg={WCGSSJ_DATE_BG}
        color={WCGSSJ_TITLE_FONT}
        py={2}
        mt={{ base: 0, md: 10 }}
        mb={10}
        width={{ base: '100%', md: 'auto' }}
        px={{ base: 'auto', md: '50px' }}
        whiteSpace="nowrap"
        fontSize={{ base: '14px', md: '22px' }}
        textAlign="center"
      >
        每日返利首筆平倉交易最高達80美元
      </Box>

      <Box mt={10} mb={2} fontWeight={700}>
        活動詳情
      </Box>

      <Box>我們為每個交易日的第一筆平倉交易時發生的損失提供返利。</Box>

      <Box>該活動僅持續20個交易日。</Box>
    </Flex>
  );
};

const WCGSSJRules: React.FC<{}> = () => {
  return (
    <>
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·條款細則
      </Box>
      <Box>1. 存入不低於5000美元到WCG MARKETS標準交易賬戶。</Box>
      <Box>2. 需主動向客服報名參加。</Box>
      <Box>3. 活動時間由客服確定報名的當天起計算20個交易日。</Box>
      <Box>4. 活動期間如申請任何出金會取消活動資格。</Box>
      <Box>5. 返利於活動結束的10天內發放並調整到客戶的MT4賬戶。</Box>
      <Box>6. 單日返利最高上限80美元。</Box>
      <Box>
        7.
        返利只適用于每個交易日的第一筆平倉交易，如果當天的交易損失超過返利金額，客戶必須按正常交易條款由賬戶餘額扣除。
      </Box>
      <Box>8. 每個交易日的第一筆平倉交易獲利則不受影響，按正常交易計算。</Box>
      <Box>9. 客戶如參加活動之後，在活動結束前出金，會被取消活動資格。</Box>
      <Box>10. 公司保留隨時修改、終止活動的權利。 </Box>
      <Box>
        11.
        所有異常交易包括通過超短綫刷單(15分鐘內)、AB倉交易或者利用外挂軟件或其他計算機程序導致多個戶口使用相同IP地址同時下單，以及其他可疑操作完成的交易將被視爲無效交易手數，不計入此活動的計算範圍內(異常交易的定義參閱WCG官網)。
      </Box>
      <Box>
        12. 貴金屬，原油交易手數定義; 黃金 1標準手100盎司，白銀
        1標準手2500盎司，原油1標準手1000桶。
      </Box>
      <Box>13. 外匯産品交易2標準手＝1手計算。</Box>
      <Box>14. 公司保留活動最終解釋權。</Box>
      <Box>15. 所有交易均涉及風險，您的損失可能大于您的入金。</Box>
      <Box>16. WCG MARKETS不承擔任何因本活動而引起的法律責任或爭議。</Box>
      <Box>
        17. 所有參與本活動的客戶必須遵守WCG MARKETS的服務條款和風險披露聲明。
      </Box>
      <Box>
        18.
        高風險投資警告差價合約（CFD）屬複雜的金融産品，其使用杠杆交易的屬性導致本金快速虧損的可能性較高，您有可能因此被要求追加保證金。請在入市前先瞭解差價合約的産品原理幷考慮是否能够承受此風險。所有金融衍生産品工具的過往價格與表現幷不擔保或代表未來走勢。此類金融産品幷不適合所有投資者，請務必在入市前完全瞭解所有潜在的風險，幷在有需要時尋求獨立意見。
      </Box>
    </>
  );
};

export default WCGSSJ;
