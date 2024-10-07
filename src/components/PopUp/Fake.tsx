import { Locales } from '@/i18n/config';
import { Box, Image, Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PopUp from './PopUp';

const Fake: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="警惕蓄意欺詐仿冒網站"
      content={<FakeContentZh />}
      useBorder={false}
    />
  ) : (
    <PopUp title="澄清声明" content={<FakeContentCn />} useBorder={false} />
  );
};

const FakeContentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Text>
        尊敬的客戶：
        <br />
        <br />
        我們近期發現公司郵箱系統遭受惡意攻擊，部分客戶可能收到了來自假冒我司郵箱的非授權信息，其中包括涉及其他非法交易平台的廣告內容。在此，我們鄭重聲明，這些信息並非我司所發送，請勿點擊或理會相關郵件內容，以免遭受不必要的風險和困擾。
        <br />
        我們對由此給您帶來的不便深表歉意，並已立即采取措施加強系統安全，防止類似事件再次發生。感謝您的理解與支持。
        <br />
        如有任何疑問或需要進一步協助，請隨時與我們聯系。
        <br /> <br />
        注意以下事項：
        <br />
        請勿點擊不明來源的電子郵件連結。
        <br />
        請勿向不明人士提供個人資訊或進行任何金錢交易。
        <br />
        WCG Markets團隊
        <br />
        <Link
          _hover={{
            textDecoration: 'none'
          }}
          href="/"
          isExternal
        >
          www.wcgmarkets.com
        </Link>
        <br />
      </Text>
      <Box>
        <Image src={`/../assets/images/pop_up_fake-1.png`} alt="pop_up_fake" />
      </Box>
    </Stack>
  );
};

const FakeContentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Text>
        尊敬的客户：
        <br />
        <br />
        我们近期发现公司邮箱系统遭受恶意攻击，部分客户可能收到了来自假冒我司邮箱的非授权信息，其中包括涉及其他非法交易平台的广告内容。在此，我们郑重声明，这些信息并非我司所发送，请勿点击或理会相关邮件内容，以免遭受不必要的风险和困扰。
        <br />
        我们对由此给您带来的不便深表歉意，并已立即采取措施加强系统安全，防止类似事件再次发生。感谢您的理解与支持。
        <br />
        如有任何疑问或需要进一步协助，请随时与我们联系。
        <br /> <br />
        注意以下事項：
        <br />
        請勿點擊不明來源的電子郵件連結。
        <br />
        請勿向不明人士提供個人資訊或進行任何金錢交易。
        <br />
        WCG Markets团队
        <br />
        <Link
          _hover={{
            textDecoration: 'none'
          }}
          href="/"
          isExternal
        >
          www.wcgmarkets.com
        </Link>
        <br />
      </Text>
      <Box>
        <Image src={`/../assets/images/pop_up_fake-1.png`} alt="pop_up_fake" />
      </Box>
    </Stack>
  );
};

export default Fake;
