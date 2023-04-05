import { Locales } from '@/i18n/config';
import { Box, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PopUp from './PopUp';

const NameChange: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="伺服器名稱更新"
      content={<NameChangeContentZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="伺服器名称更新"
      content={<NameChangeContentCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="Server Name Updated"
      content={<NameChangeContentEn />}
      useBorder={false}
    />
  );
};

const NameChangeContentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5} fontSize={{ base: '10px', md: '16px' }}>
      <Box>尊敬的WCG MARKETS客戶：</Box>

      <Box>
        我們很高興地向您宣布，我們的交易平台MT4伺服器名稱於2023年4月10日星期一，正式更新為WCG
        Group Limited。
      </Box>

      <Box>
        此舉反映了我們公司的承諾，不斷努力提高服務品質，以滿足客戶日益增長的需求。將有助於進一步強化我們在金融交易市場中的領先地位。
      </Box>

      <Box>
        在電腦桌面版MT4交易平台的使用上，您的現有帳戶信息、交易歷史和其他相關資訊均已順利遷移至WCG
        Group Limited伺服器無需任何額外操作。您可以繼續使用現有的登錄資訊登錄WCG
        Group Limited，享受我們提供的高品質服務和產品。
      </Box>

      <Box>
        在手機版MT4上，不論蘋果還是安桌都只需按
        <Link
          color="blue.500"
          href="https://image.wcgmarkets.com/wcgsl.pdf"
          isExternal
        >
          附件
        </Link>
        中的5個步驟就可轉移到WCG Group
        Limited的MT4交易平台使用我們優越穩定的交易。
      </Box>

      <Box>
        如果您對登錄交易平台MT4有任何疑慮或問題，請隨時聯繫我們的客戶服務團隊。我們將竭盡所能為您提供支持和協助。
      </Box>

      <Box>客戶服務熱線: 4008 428 912</Box>
      <Box>
        客戶服務電郵:
        <Link color="blue.500" href="mailto:cs@wcgmarkets.com" isExternal>
          cs@wcgmarkets.com
        </Link>
      </Box>
      <Box>
        在線客戶服務:
        <Link
          color="blue.500"
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&accountid=135464"
          isExternal
        >
          線上客服1
        </Link>
        ，
        <Link
          color="blue.500"
          href="https://direct.lc.chat/11929440/"
          isExternal
        >
          線上客服2
        </Link>
      </Box>
      <Box>
        感謝您一直以來對WCG MARKETS的信任和支持，期待為您提供更好的交易體驗。
      </Box>
      <Box>WCG MARKETS 謹啟</Box>
      <Box>
        附件:{' '}
        <Link
          color="blue.500"
          href="https://image.wcgmarkets.com/wcgsl.pdf"
          isExternal
        >
          手機版MT4登錄流程
        </Link>
      </Box>
    </Stack>
  );
};

const NameChangeContentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5} fontSize={{ base: '10px', md: '16px' }}>
      <Box>尊敬的WCG MARKETS客户：</Box>

      <Box>
        我们很高兴地向您宣布，我们的交易平台MT4伺服器名称于2023年4月10日星期一，正式更新为WCG
        Group Limited。
      </Box>

      <Box>
        此举反映了我们公司的承诺，不断努力提高服务品质，以满足客户日益增长的需求。将有助于进一步强化我们在金融交易市场中的领先地位。
      </Box>

      <Box>
        在电脑桌面版MT4交易平台的使用上，您的现有帐户信息、交易历史和其他相关资讯均已顺利迁移至WCG
        Group Limited伺服器无需任何额外操作。您可以继续使用现有的登录资讯登录WCG
        Group Limited，享受我们提供的高品质服务和产品。
      </Box>

      <Box>
        在手机版MT4上，不论苹果还是安桌都只需按
        <Link
          color="blue.500"
          href="https://image.wcgmarkets.com/wcgsl.pdf"
          isExternal
        >
          附件
        </Link>
        中的5个步骤就可转移到WCG Group
        Limited的MT4交易平台使用我们优越稳定的交易。
      </Box>

      <Box>
        如果您对登录交易平台MT4有任何疑虑或问题，请随时联繫我们的客户服务团队。我们将竭尽所能为您提供支持和协助。
      </Box>

      <Box>客户服务热线: 4008 428 912</Box>
      <Box>
        客户服务电邮:
        <Link color="blue.500" href="mailto:cs@wcgmarkets.com" isExternal>
          cs@wcgmarkets.com
        </Link>
      </Box>
      <Box>
        在线客户服务:
        <Link
          color="blue.500"
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&accountid=135464"
          isExternal
        >
          线上客服1
        </Link>
        ，
        <Link
          color="blue.500"
          href="https://direct.lc.chat/11929440/"
          isExternal
        >
          线上客服2
        </Link>
      </Box>
      <Box>
        感谢您一直以来对WCG MARKETS的信任和支持，期待为您提供更好的交易体验。
      </Box>
      <Box>WCG MARKETS 谨启</Box>
      <Box>
        附件:{' '}
        <Link
          color="blue.500"
          href="https://image.wcgmarkets.com/wcgsl.pdf"
          isExternal
        >
          手机版MT4登录流程
        </Link>
      </Box>
    </Stack>
  );
};

const NameChangeContentEn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box>Dear WCG MARKETS customer,</Box>

      <Box>
        We are pleased to announce that our MT4 trading platform server name has
        been officially updated to WCG Group Limited on Monday, April 10, 2023.
      </Box>

      <Box>
        This move reflects our company’s commitment to continuously strive to
        improve service quality to meet the growing needs of our customers. It
        will help further strengthen our leading position in the financial
        trading market.
      </Box>

      <Box>
        For the use of the desktop version of the MT4 trading platform on a
        computer, your existing account information, trading history and other
        relevant information have been successfully migrated to the WCG Group
        Limited server without any additional operations. You can continue to
        use your existing login information to log in to WCG Group Limited and
        enjoy our high-quality services and products.
      </Box>

      <Box>
        On the mobile version of MT4, whether it is Apple or Android, you only
        need to follow the 5 steps in the{' '}
        <Link
          color="blue.500"
          href="https://image.wcgmarkets.com/wcgsl.pdf"
          isExternal
        >
          attachment
        </Link>{' '}
        to switch to the MT4 trading platform of WCG Group Limited and use our
        superior and stable trading.
      </Box>

      <Box>
        If you have any concerns or questions about logging into the MT4 trading
        platform, please feel free to contact our customer service team. We will
        do our best to provide you with{' '}
        <Link
          color="blue.500"
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&&accountid=135464"
          isExternal
        >
          support
        </Link>{' '}
        and assistance.
      </Box>

      <Box>Customer service hotline: 4008 428 912</Box>
      <Box>
        Customer service email:{' '}
        <Link color="blue.500" href="mailto:cs@wcgmarkets.com" isExternal>
          cs@wcgmarkets.com
        </Link>
      </Box>
      <Box>
        Online customer service:{' '}
        <Link
          color="blue.500"
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&accountid=135464"
          isExternal
        >
          Online customer service 1
        </Link>
        ,{' '}
        <Link
          color="blue.500"
          href="https://direct.lc.chat/11929440/"
          isExternal
        >
          online customer service 2
        </Link>
      </Box>
      <Box>
        Thank you for your trust and support for WCG MARKETS. We look forward to
        providing you with a better trading experience.
      </Box>
      <Box>Sincerely, WCG MARKETS</Box>
      <Box>
        Attachment:{' '}
        <Link
          color="blue.500"
          href="https://image.wcgmarkets.com/wcgsl.pdf"
          isExternal
        >
          Mobile version MT4 login process
        </Link>
      </Box>
    </Stack>
  );
};

export default NameChange;
