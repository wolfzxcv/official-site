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
        假冒網站「http://www.wcggw.cn」「http://www.wcgtransaction.com」「https://www.wcg-market.com」「https://www.wcgtradings.com」與本公司及旗下業務絕無任何關聯。。
      </Text>
      <Text>
        致廣大客戶及投資者:
        <br /> <br />
        本公司近日發現有人以WCG
        MARKETS名義製作多個假冒網站，假冒網站內容一樣，域名不同。
        <br />
        目前發現的假冒網站域名如下：
        <br />
        1.(http://www.wcggw.cn)
        <br />
        2.(http://www.wcgtransaction.com)
        <br />
        3.(https://www.wcg-market.com)
        <br />
        4.(https://www.wcgtradings.com)
        <br />
        上述網站在未有本公司的授權、同意及批准下使用及展示與本公司或與本公司相似的商業名稱或商標，提供網上交易活動，誘使公眾誤信其與本公司有關。
        <br />
        <br />
        有關網站截圖如下:
      </Text>
      <Box>
        <Image src={`/../assets/images/pop_up_fake-1.png`} alt="pop_up_fake" />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-2.jpg`}
          alt="pop_up_fake-2"
        />
      </Box>

      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-3.png`}
          alt="pop_up_fake-3"
        />
      </Box>
      <Text>
        現謹鄭重聲明，WCG
        MARKETS「本公司」及旗下各業務單位一概與上述假冒網站、其業務及網頁無任何關聯。
        <br />
        <br />
        鑑於是次事件懷疑有人利用本公司之商譽，誤導大眾以謀利，本公司予以高度關注。現特此聲明，以正視聽，並務請所有投資者提高警惕，以免受到欺詐損失，同時保留一切追究法律責任的權利。
        <br />
        <br />
        如有疑問，歡迎與 https://www.wcgmarkets.com 客戶服務部聯絡。
        <br />
        <br />
        WCG MARKETS LIMITED <br />
        <br />
        二零二四年十月二十四日
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
        假冒网站「http://www.wcggw.cn」「http://www.wcgtransaction.com」「https://www.wcg-market.com」「https://www.wcgtradings.com」与本公司及旗下业务绝无任何关联。。
      </Text>
      <Text>
        致广大客户及投资者:
        <br /> <br />
        本公司近日发现有人以WCG
        MARKETS名义製作多个假冒网站，假冒网站内容一样，域名不同。
        <br />
        目前发现的假冒网站域名如下：
        <br />
        1.(http://www.wcggw.cn)
        <br />
        2.(http://www.wcgtransaction.com)
        <br />
        3.(https://www.wcg-market.com)
        <br />
        4.(https://www.wcgtradings.com)
        <br />
        上述网站在未有本公司的授权、同意及批准下使用及展示与本公司或与本公司相似的商业名称或商标，提供网上交易活动，诱使公众误信其与本公司有关。
        <br />
        <br />
        有关网站截图如下:
      </Text>
      <Box>
        <Image src={`/../assets/images/pop_up_fake-1.png`} alt="pop_up_fake" />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-2.jpg`}
          alt="pop_up_fake-2"
        />
      </Box>

      <Box>
        <Image
          src={`/../assets/images/pop_up_fake-3.png`}
          alt="pop_up_fake-3"
        />
      </Box>
      <Text>
        现谨郑重声明，WCG
        MARKETS「本公司」及旗下各业务单位一概与上述假冒网站、其业务及网页无任何关联。
        <br />
        <br />
        鑑于是次事件怀疑有人利用本公司之商誉，误导大众以谋利，本公司予以高度关注。现特此声明，以正视听，并务请所有投资者提高警惕，以免受到欺诈损失，同时保留一切追究法律责任的权利。
        <br />
        <br />
        如有疑问，欢迎与 https://www.wcgmarkets.com 客户服务部联络。
        <br />
        <br />
        WCG MARKETS LIMITED <br />
        <br />
        二零二四年十月二十四日
        <br />
      </Text>
    </Stack>
  );
};

const FakeContentEn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Box>24 Oct 2024</Box>

      <Box fontWeight={700} textDecoration="underline">
        Beware of Deliberately Fraudulent and Phishing Websites
      </Box>

      <Box>
        Clarification: The below websites is not affiliated with our company or
        brand &quot;http://www.wcggw.cn&quot;,
        &quot;http://www.wcgtransaction.com&quot;,
        &quot;https://www.wcg-market.com&quot; and
        &quot;https://www.wcgtradings.com&quot;
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
          src={`/../assets/images/pop_up_fake-2.jpg`}
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
        department. https://www.wcgmarkets.com
      </Box>
      <Box>Yours faithfully,</Box>
      <Box>WCG MARKETS LIMITED</Box>
    </Stack>
  );
};

export default Fake;
