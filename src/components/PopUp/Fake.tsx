import { Locales } from '@/i18n/config';
import { Box, Image, Stack, Text } from '@chakra-ui/react';
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
  ) : currentLang === 'cn' ? (
    <PopUp
      title="警惕蓄意欺诈仿冒网站"
      content={<FakeContentCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="Beware of Deliberately Fraudulent and Phishing Websites"
      content={<FakeContentEn />}
      useBorder={false}
    />
  );
};

const FakeContentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Text as="b">
        澄清聲明:
        假冒網站「https://wcgfore.com」「www.wcgplus.com」與本公司及旗下業務絕無任何關聯。。
      </Text>
      <Text>
        致廣大客戶及投資者:
        <br /> <br />
        本集團客服近日收到查詢，得悉有自稱為「https://wcgfore.com」「www.wcgplus.com」的網站假冒本集團。有關網站在未有本集團的授權、同意及/或批准下使用及展示與本集團或與本集團相似的商業名稱或商標，以及盜用本集團牌照規管資訊，提供網上交易活動，誘使公眾誤信其與本集團有關。
        <br /> <br />
        有關網站截圖如下:
      </Text>
      <Box>
        <Image src={`/../assets/images/pop_up_fake-1.png`} alt="pop_up_fake" />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-2.png`}
          alt="pop_up_fake-2"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-3.png`}
          alt="pop_up_fake-3"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-4.png`}
          alt="pop_up_fake-4"
        />
      </Box>
      <Text>
        現謹鄭重聲明，現謹鄭重聲明，WCG MARKETS
        LIMITED文傳金融集團「本集團」及旗下各業務單位一概與上述假冒網站、其業務及網頁無任何關聯。
        <br />
        <br />
        鑑於是次事件懷疑有人利用本集團之商譽，誤導大眾以謀利，本集團予以高度關注。現特此聲明，以正視聽，並務請所有投資者提高警惕，以免受到欺詐損失，同時保留一切追究法律責任的權利。
        <br />
        <br />
        如有疑問，歡迎與 https://www.wcgmarkets-global.com/ 客戶服務部聯絡。
        <br />
        <br />
        WCG MARKETS LIMITED <br />
        <br />
        文傳金融集團 謹啟
        <br />
        <br />
        二零二三年十二月二十二日
        <br />
      </Text>
    </Stack>
  );
};

const FakeContentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Text as="b">
        澄清声明:
        假冒网站「https://wcgfore.com」「www.wcgplus.com」与本集团及旗下业务绝无任何关联。
      </Text>
      <Text>
        致广大客户及投资者:
        <br /> <br />
        本集团客服近日收到查询，得悉有自称为「https://wcgfore.com」「www.wcgplus.com」的网站假冒本集团。有关网站在未有本集团的授权、同意及/或批准下使用及展示与本集团或与本集团相似的商业名称或商标，以及盗用本集团牌照规管资讯，提供网上交易活动，诱使公众误信其与本集团有关。
        <br /> <br />
        有关网站截图如下:
      </Text>
      <Box>
        <Image src={`/../assets/images/pop_up_fake-1.png`} alt="pop_up_fake" />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-2.png`}
          alt="pop_up_fake-2"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-3.png`}
          alt="pop_up_fake-3"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-4.png`}
          alt="pop_up_fake-4"
        />
      </Box>
      <Text>
        现谨郑重声明，现谨郑重声明，WCG MARKETS
        LIMITED文传金融集团「本集团」及旗下各业务单位一概与上述假冒网站、其业务及网页无任何关联。
        <br />
        <br />
        鉴于是次事件怀疑有人利用本集团之商誉，误导大众以谋利，本集团予以高度关注。现特此声明，以正视听，并务请所有投资者提高警惕，以免受到欺诈损失，同时保留一切追究法律责任的权利。
        <br />
        <br />
        如有疑问，欢迎与 https://www.wcgmarkets-global.com/ 客户服务部联络。
        <br />
        <br />
        WCG MARKETS LIMITED <br />
        <br />
        文传金融集团 谨启
        <br />
        <br />
        二零二三年十二月二十二日
        <br />
      </Text>
    </Stack>
  );
};

const FakeContentEn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Box>22 December 2023</Box>

      <Box fontWeight={700} textDecoration="underline">
        Beware of Deliberately Fraudulent and Phishing Websites
      </Box>

      <Box>
        Clarification: The below websites is not affiliated with our company or
        brand &quot;https://wcgfore.com&quot; and &quot;www.wcgplus.com&quot;
      </Box>

      <Box>To our customers and investors:</Box>
      <Box>
        Our customer services department recently received inquiries that there
        are websites claiming to be counterfeiting our company. The above
        websites used our business names and trademarks similar to or brand
        without authorization, consent and/or approval of the Company to provide
        online trading activities. They induced the public to misunderstand that
        they are related to our company.
      </Box>
      <Box>Screenshots of the website are as follows:</Box>

      <Box>
        <Image src={`/../assets/images/pop_up_fake-1.png`} alt="pop_up_fake" />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-2.png`}
          alt="pop_up_fake-2"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-3.png`}
          alt="pop_up_fake-3"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-4.png`}
          alt="pop_up_fake-4"
        />
      </Box>
      <Box>
        We hereby solemnly declare that WCG MARKETS &quot;the company&quot; and
        its business units are not affiliated with the above-mentioned
        companies, their business and their websites.
      </Box>
      <Box>
        In view of this incident, it is suspected that someone has used the
        goodwill of our company to mislead the public for profit, and the
        company is highly concerned. It is hereby declared that all investors
        are reminded to be vigilant to avoid fraud losses, and we reserve the
        rights to pursue legal responsibilities.
      </Box>

      <Box>
        If you have any questions, please contact our customer service
        department. https://www.wcgmarkets-global.com/
      </Box>
      <Box>Yours faithfully,</Box>
      <Box>WCG MARKETS LIMITED</Box>
    </Stack>
  );
};

export default Fake;
