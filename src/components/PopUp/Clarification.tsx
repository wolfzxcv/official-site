import { Locales } from '@/i18n/config';
import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PopUp from './PopUp';

const Clarification: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="澄清聲明"
      content={<ClarificationContentZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="澄清声明"
      content={<ClarificationContentCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="Clarification"
      content={<ClarificationContentEn />}
      useBorder={false}
    />
  );
};

const ClarificationContentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Text>
        <Text as="b">澄清聲明:</Text>
        <br /> <br />
        近日，本公司發現有不法之徒自稱為「呂國强導師」訛稱是 WCG MARKETS
        的老師，假冒本公司名義，通過電話、微信等方式向客戶推銷虛假投資産品，幷引導客戶到虛假的應用程式騙取金錢。
        相關截圖如下:
        <br />
        <br />
        有關網站截圖如下:
      </Text>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-1.png`}
          alt="pop_up_clarification-1"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-2.png`}
          alt="pop_up_clarification-2"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-3.png`}
          alt="pop_up_clarification-3"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-4.png`}
          alt="pop_up_clarification-4"
        />
      </Box>
      <Text>
        現謹鄭重聲明，WCG
        MARKETS（本公司）從未授權任何機構或個人以本公司名義進行任何投資產品的推銷活動或開辦投資教學課程。
        <br />
        <br />
        本公司所有官方聯繫方式均在本公司官方網站上公佈，請客戶通過官方渠道與本公司聯繫。
        <br />
        <br />
        鑑於是次事件懷疑有人利用本集團之商譽，誤導大眾以謀利，本集團予以高度關注。現特此聲明，以正視聽，並務請所有投資者提高警惕，以免受到欺詐損失，同時保留一切追究法律責任的權利。
        <br />
        <br />
        如有疑問，歡迎與 https://www.wcgmarkets-global.com/ 客戶服務部聯絡。
        <br />
        <br />
        WCG MARKETS 謹啟
        <br />
        <br />
        二零二二年十二月二十二日
        <br />
      </Text>
    </Stack>
  );
};

const ClarificationContentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Text>
        <Text as="b">澄清声明:</Text>
        <br /> <br />
        近日，本公司发现有不法之徒自称为「吕国强导师」讹称是 WCG MARKETS
        的老师，假冒本公司名义，通过电话、微信等方式向客户推销虚假投资産品，幷引导客户到虚假的应用程式骗取金钱。
        相关截图如下:
        <br />
        <br />
        有关网站截图如下:
      </Text>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-1.png`}
          alt="pop_up_clarification-1"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-2.png`}
          alt="pop_up_clarification-2"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-3.png`}
          alt="pop_up_clarification-3"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-4.png`}
          alt="pop_up_clarification-4"
        />
      </Box>
      <Text>
        现谨郑重声明，WCG
        MARKETS（本公司）从未授权任何机构或个人以本公司名义进行任何投资产品的推销活动或开办投资教学课程。
        <br />
        <br />
        本公司所有官方联繫方式均在本公司官方网站上公佈，请客户通过官方渠道与本公司联繫。
        <br />
        <br />
        鑑于是次事件怀疑有人利用本集团之商誉，误导大众以谋利，本集团予以高度关注。现特此声明，以正视听，并务请所有投资者提高警惕，以免受到欺诈损失，同时保留一切追究法律责任的权利。
        <br />
        <br />
        如有疑问，欢迎与 https://www.wcgmarkets-global.com/ 客户服务部联络。
        <br />
        <br />
        WCG MARKETS 谨启
        <br />
        <br />
        二零二二年十二月二十二日
        <br />
      </Text>
    </Stack>
  );
};

const ClarificationContentEn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Text>
        <Text as="b">澄清声明:</Text>
        <br /> <br />
        近日，本公司发现有不法之徒自称为「吕国强导师」讹称是 WCG MARKETS
        的老师，假冒本公司名义，通过电话、微信等方式向客户推销虚假投资産品，幷引导客户到虚假的应用程式骗取金钱。
        相关截图如下:
        <br />
        <br />
        有关网站截图如下:
      </Text>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-1.png`}
          alt="pop_up_clarification-1"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-2.png`}
          alt="pop_up_clarification-2"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-3.png`}
          alt="pop_up_clarification-3"
        />
      </Box>
      <Box>
        <Image
          src={`/../assets/images/pop_up_clarification-4.png`}
          alt="pop_up_clarification-4"
        />
      </Box>
      <Text>
        现谨郑重声明，WCG
        MARKETS（本公司）从未授权任何机构或个人以本公司名义进行任何投资产品的推销活动或开办投资教学课程。
        <br />
        <br />
        本公司所有官方联繫方式均在本公司官方网站上公佈，请客户通过官方渠道与本公司联繫。
        <br />
        <br />
        鑑于是次事件怀疑有人利用本集团之商誉，误导大众以谋利，本集团予以高度关注。现特此声明，以正视听，并务请所有投资者提高警惕，以免受到欺诈损失，同时保留一切追究法律责任的权利。
        <br />
        <br />
        如有疑问，欢迎与 https://www.wcgmarkets-global.com/ 客户服务部联络。
        <br />
        <br />
        WCG MARKETS 谨启
        <br />
        <br />
        二零二二年十二月二十二日
        <br />
      </Text>
    </Stack>
  );
};

export default Clarification;
