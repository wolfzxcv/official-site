import { Locales } from '@/i18n/config';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PopUp from './PopUp';

const AND_URL = 'https://image.wcgmarkets.com/AND.jpg';

const IOS_URL = 'https://image.wcgmarkets.com/IOS.jpg';

const BTN_RED = '#b81b22';

type WCGFQButtonProps = {
  type: 'android' | 'ios';
  text: string;
};

const WCGFQButton: React.FC<WCGFQButtonProps> = ({
  type,
  text
}: WCGFQButtonProps) => (
  <Link
    width="auto"
    href={type === 'android' ? AND_URL : IOS_URL}
    isExternal
    display="flex"
    _hover={{
      textDecoration: 'none'
    }}
  >
    <Box
      bg={BTN_RED}
      color="white"
      borderRadius="5px"
      px={{ base: 1, md: 5 }}
      mx={{ base: 1, md: 0 }}
      py={2}
    >
      {text}
    </Box>
  </Link>
);

const WCGFQ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="轉換服務器通知"
      content={<WCGFQContentZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="转换服务器通知"
      content={<WCGFQContentCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="Server change notification"
      content={<WCGFQContentEn />}
      useBorder={false}
    />
  );
};

const WCGFQContentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={3}>
      <Box fontWeight={700}>親愛的客戶及合作夥伴</Box>

      <Box>
        感謝您長期以來的忠實支持，由於WCG
        Markets發展迅速，客戶數量持續大幅上升，為配合更好的發展及客戶更完善的交易體驗，除目前正在使用的邁達克交易系統
        （MetaTrader）外，WCG Markets已完成全面收購多一間持有MT4
        主標系統的交易商ASA Group Trading Ltd（簡稱：ASA），ASA目前已經成為WCG
        Markets旗下的全資附屬公司。
      </Box>

      <Box>
        我們將整合現在所有的交易系統及服務器，客戶請於2022年10月17日起，於MT4
        交易系統的應用程式上搜（ASA-Live）以登入全新的交易服務器，您的交易帳戶及密碼將會維持不變。
      </Box>

      <Box>
        我們現已就ASA的公司名稱向相關監管部門遞交變更申請，變更為WCG Group
        Limited.
        新的稱號可讓您更清晰明確WCG集團的規模及架構。完成整個變更過程後，我們將會再次以電郵方式向您作出通知。
      </Box>

      <Box>
        除此之外我們的開發團隊，亦已為嶄新的交易程式上線做好準備，此程式設有iOS及安卓系統，全新的交易系統APP將會與您見面，敬請期待！
      </Box>

      <Box>
        再次感謝您對WCG
        Markets的支持和信賴，如您對此事安排有任何查詢或疑問，隨時聯絡我司的客戶服務部。
      </Box>

      <Box>祝您交易愉快，身心康泰！</Box>

      <Flex justify="space-around">
        <WCGFQButton type="ios" text="蘋果手機更換服務器步驟" />

        <WCGFQButton type="android" text="安卓手機更換服務器步驟" />
      </Flex>
    </Stack>
  );
};

const WCGFQContentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={3}>
      <Box fontWeight={700}>亲爱的客户及合作伙伴</Box>

      <Box>
        感谢您长期以来的忠实支持，由于WCG
        Markets发展迅速，客户数量持续大幅上升，为配合更好的发展及客户更完善的交易体验，除目前正在使用的迈达克交易系统
        （MetaTrader）外，WCG Markets已完成全面收购多一间持有MT4
        主标系统的交易商ASA Group Trading Ltd（简称：ASA），ASA目前已经成为WCG
        Markets旗下的全资附属公司。
      </Box>

      <Box>
        我们将整合现在所有的交易系统及服务器，客户请于2022年10月17日起，于MT4
        交易系统的应用程序上搜（ASA-Live）以登入全新的交易服务器，您的交易账户及密码将会维持不变。
      </Box>

      <Box>
        我们现已就ASA的公司名称向相关监管部门递交变更申请，变更为WCG Group
        Limited.
        新的称号可让您更清晰明确WCG集团的规模及架构。完成整个变更过程后，我们将会再次以电邮方式向您作出通知。
      </Box>

      <Box>
        除此之外我们的开发团队，亦已为崭新的交易程式上线做好准备，此程式设有iOS及安卓系统，全新的交易系统APP将会与您见面，敬请期待！
      </Box>

      <Box>
        再次感谢您对WCG
        Markets的支持和信赖，如您对此事安排有任何查询或疑问，随时联络我司的客户服务部。
      </Box>

      <Box>祝您交易愉快，身心康泰！</Box>

      <Flex justify="space-around">
        <WCGFQButton type="ios" text="苹果手机更换服务器步骤" />

        <WCGFQButton type="android" text="安卓手机更换服务器步骤" />
      </Flex>
    </Stack>
  );
};

const WCGFQContentEn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={3}>
      <Box fontWeight={700}>Dear valued customers and partners</Box>

      <Box>
        Thank you for your long-term and continue support for WCG. Due to the
        rapid development of WCG Markets, the number of clients has continued to
        increase significantly for the past few months. In addition, WCG Markets
        has completed the full acquisition of one more MT4 main label broker,
        ASA Group Trading Ltd (ASA). ASA has now become a solely owned
        subsidiary of WCG Markets.
      </Box>

      <Box>
        We will integrate all the current trading systems and servers. From
        October 17, 2022 onwards, please search for “ASA-Live” on the MT4
        trading system application in order to log in to the new trading server.
        Your trading account and password will remain unchanged.
      </Box>

      <Box>
        We have now submitted an application to the relevant regulatory
        authorities for the change of company name from ASA to WCG Group
        Limited. The new name will allow you to more clearly define the scale
        and structure of the WCG Group. Once the entire change process has been
        completed, we will notify you again by email.
      </Box>

      <Box>
        In addition, our development team has also prepared for the launch of
        the new trading system. This system is available for both iOS and
        Android. The new trading system APP will be available soon, so stay
        tuned!
      </Box>

      <Box>Screenshots of the website are as follows:</Box>

      <Box>
        Thank you again for your support in WCG Markets. If you have any
        inquiries or questions about this arrangement, please feel free to
        contact our customer service department.
      </Box>

      <Box>
        We wish you an enjoyable trading experience with good health and
        prosperity!
      </Box>

      <Flex justify="space-around">
        <WCGFQButton type="ios" text="iPhone setup steps" />

        <WCGFQButton type="android" text="Android setup steps" />
      </Flex>
    </Stack>
  );
};

export default WCGFQ;
