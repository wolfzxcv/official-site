import { Locales } from '@/i18n/config';
import { Box, Image, Stack } from '@chakra-ui/react';
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
      <Box>
        澄清聲明:
        假冒網站「https://m.dzfx168.com」及「https://img.dzg228.com」與本集團及旗下業務絕無任何關聯
      </Box>

      <Box>致廣大客戶及投資者:</Box>
      <Box>
        本集團客服近日收到客戶查詢，得悉有自稱為「https://m.dzfx168.com」及「https://img.dzg228.com」的網站假冒本集團。有關網站在未有本集團的授權、同意及/或批准下使用及展示與本集團或與本集團相似的商業名稱或商標提供網上交易活動，誘使公眾誤信其與本集團有關。
      </Box>
      <Box>有關網站截圖如下:</Box>

      <Box>
        <Image src={`/../assets/images/pop_up_fake.png`} alt="pop_up_fake" />
      </Box>
      <Box>
        現謹鄭重聲明，WCG MARKETS
        LIMITED文傳金融集團「本集團」及旗下各業務單位一概與上述集團、其業務及網頁無任何關聯。
      </Box>
      <Box>
        鑑於是次事件懷疑有人利用本集團之商譽，誤導大眾以謀利，本集團予以高度關注。現特此聲明，以正視聽，並務請所有投資者提高警惕，以免受到欺詐損失，同時保留一切追究法律責任的權利。
      </Box>

      <Box>如有疑問，歡迎與 http://www.wcgmarkets.com 客戶服務部聯絡。</Box>
      <Box>WCG Group LIMITED </Box>
      <Box>文傳金融集團 謹啟</Box>
      <Box>二零二二年八月三十一日</Box>
    </Stack>
  );
};

const FakeContentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Box>
        澄清声明:
        假冒网站「https://m.dzfx168.com」及「https://img.dzg228.com」与本集团及旗下业务绝无任何关联
      </Box>

      <Box>致广大客户及投资者:</Box>
      <Box>
        本集团客服近日收到客户查询，得悉有自称为「https://m.dzfx168.com」及「https://img.dzg228.com」的网站假冒本集团。有关网站在未有本集团的授权、同意及/或批准下使用及展示与本集团或与本集团相似的商业名称或商标提供网上交易活动，诱使公众误信其与本集团有关。
      </Box>
      <Box>有关网站截图如下:</Box>

      <Box>
        <Image src={`/../assets/images/pop_up_fake.png`} alt="pop_up_fake" />
      </Box>
      <Box>
        现谨郑重声明，WCG MARKETS
        LIMITED文传金融集团「本集团」及旗下各业务单位一概与上述集团、其业务及网页无任何关联。
      </Box>
      <Box>
        鉴于是次事件怀疑有人利用本集团之商誉，误导大众以谋利，本集团予以高度关注。现特此声明，以正视听，并务请所有投资者提高警惕，以免受到欺诈损失，同时保留一切追究法律责任的权利。
      </Box>

      <Box>如有疑问，欢迎与 http://www.wcgmarkets.com 客户服务部联络。</Box>
      <Box>WCG Group LIMITED </Box>
      <Box>文传金融集团 谨启</Box>
      <Box>二零二二年八月三十一日</Box>
    </Stack>
  );
};

const FakeContentEn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Box>31 August 2022</Box>

      <Box fontWeight={700} textDecoration="underline">
        Beware of Deliberately Fraudulent and Phishing Websites
      </Box>

      <Box>
        Clarification: The below 2 websites are not affiliated with our company
        or brand &quot;https://m.dzfx168.com&quot; &
        &quot;https://img.dzg228.com&quot;
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
        <Image src={`/../assets/images/pop_up_fake.png`} alt="pop_up_fake" />
      </Box>
      <Box>
        We hereby solemnly declare that WCG Group &quot;the company&quot; and
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
        department. http://www.wcgmarkets.com/
      </Box>
      <Box>Yours faithfully,</Box>
      <Box>WCG Group LIMITED</Box>
    </Stack>
  );
};

export default Fake;
