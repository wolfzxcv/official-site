import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import { Locales } from '@/i18n/config';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export const WCGWYJ_BG = '#0f57a1';

const WCGWYJ_DATE_BG = '#f06c21';
const WCGWYJ_DATE_BORDER = '#e19e8a';
const WCGWYJ_BUTTON_BG = '#0e3270';
const WCGWYJ_FOOTER_BG = '#0e3270';

const WCGWYJ_TITLE_FONT = 'white';

const WCGWYJ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

      {/* banner */}
      <Flex
        minH={{ base: '420px', md: '626px' }}
        bg={WCGWYJ_BG}
        bgImage={{
          base: `/../assets/images/activity_WCGWYJ_M.jpg`,
          md: `/../assets/images/activity_WCGWYJ.jpg`
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGWYJContent />

      {/* rules */}
      <Flex bg={WCGWYJ_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGWYJRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGWYJContent: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Flex bg={WCGWYJ_BG} color="white" flexDir="column" align="center">
      <WCGWYJTitle />

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
          bg={WCGWYJ_BUTTON_BG}
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
          bg={WCGWYJ_BUTTON_BG}
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
          bg={WCGWYJ_BUTTON_BG}
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

export const WCGWYJTitle: React.FC<{}> = () => {
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
      bg={WCGWYJ_BG}
      color="white"
    >
      <Box
        border="1px"
        borderColor={WCGWYJ_DATE_BORDER}
        borderRadius="20px"
        bg={WCGWYJ_DATE_BG}
        color={WCGWYJ_TITLE_FONT}
        py={2}
        mt={{ base: 0, md: 10 }}
        mb={10}
        width={{ base: '100%', md: 'auto' }}
        px={{ base: 'auto', md: '50px' }}
        whiteSpace="nowrap"
        fontSize={{ base: '14px', md: '22px' }}
        textAlign="center"
      >
        活动时间:01/05/2024~31/05/2024
      </Box>

      <Box mt={10}>
        {currentLang === 'zh'
          ? '例如: 報名參加活動之後首次入金1000美元,'
          : '例如: 报名参加活动之后首次入金1000美元,'}
      </Box>

      <Box>
        {currentLang === 'zh'
          ? '即可獲得200美元的額外交易贈金。'
          : '即可获得200美元的额外交易赠金。'}
      </Box>
    </Flex>
  );
};

const WCGWYJRules: React.FC<{}> = () => {
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
      <Box>5. 交易贈金將在入金後1個工作日內發放到客戶帳戶。</Box>
      <Box>
        6. 在交易贈金發效之前請確保帳戶餘額不低於500美元，方能接收交易贈金。
      </Box>
      <Box>7. 交易贈金僅可用于交易，不可出金。</Box>
      <Box>
        8.
        客戶如參加活動之後，在活動結束前出金，會被取消活動資格並扣除已發放的交易贈金。此操作有引起強制平倉的風險。
      </Box>
      <Box>
        9.
        活動結束會扣除所有已發放的交易贈金，請注意戶口保證金比率，此操作有引起強制平倉的風險。
      </Box>
      <Box>10. 單一交易戶口最高可獲贈金1000美元。</Box>
      <Box>11. 公司保留隨時修改、終止活動及收回體驗金的權利。</Box>
      <Box>12. 公司保留活動最終解釋權。</Box>
      <Box>
        13.
        高風險投資警告差價合約（CFD）屬覆雜的金融產品，其使用杠桿交易的屬性導致本金快速虧損的可能性較高，您有可能因此被要求追加保證金。請在入市前先了解差價合約的產品原理幷考慮是否能夠承受此風險。所有金融衍生產品工具的過往價格與表現幷不擔保或代表未來走勢。此類金融產品幷不適合所有投資者，請務必在入市前完全了解所有潛在的風險，幷在有需要時尋求獨立意見。
      </Box>
      <Box>14. 活動名額有限送完即止。</Box>
      <Box>15. 每位客戶只可使用一個賬號參加此活動一次。</Box>
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
      <Box>5. 交易赠金将在入金后1个工作日内发放到客户帐户。</Box>
      <Box>
        6. 在交易赠金发效之前请确保帐户馀额不低于500美元，方能接收交易赠金。
      </Box>
      <Box>7. 交易赠金仅可用于交易，不可出金。</Box>
      <Box>
        8.
        客户如参加活动之后，在活动结束前出金，会被取消活动资格并扣除已发放的交易赠金。此操作有引起强制平仓的风险。
      </Box>
      <Box>
        9.
        活动结束会扣除所有已发放的交易赠金，请注意户口保证金比率，此操作有引起强制平仓的风险。
      </Box>
      <Box>10. 单一交易户口最高可获赠金1000美元。</Box>
      <Box>11. 公司保留随时修改、终止活动及收回体验金的权利。</Box>
      <Box>12. 公司保留活动最终解释权。</Box>
      <Box>
        13.
        高风险投资警告差价合约（CFD）属复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理幷考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现幷不担保或代表未来走势。此类金融产品幷不适合所有投资者，请务必在入市前完全了解所有潜在的风险，幷在有需要时寻求独立意见。
      </Box>
      <Box>14. 活动名额有限送完即止。</Box>
      <Box>15. 每位客户只可使用一个账号参加此活动一次。</Box>
    </>
  );
};

export default WCGWYJ;
