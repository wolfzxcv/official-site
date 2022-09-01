import { Box, Image, Stack } from '@chakra-ui/react';
import PopUp from './PopUp';

const Fake: React.FC<{}> = () => {
  return (
    <PopUp
      title="警惕蓄意欺詐仿冒網站"
      content={<FakeContent />}
      useBorder={false}
    />
  );
};

const FakeContent: React.FC<{}> = () => {
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
        <Image src={`../assets/images/pop_up_fake.png`} alt="pop_up_fake" />
      </Box>
      <Box>
        現謹鄭重聲明，WCG MARKETS
        LIMITED文傳金融集團「本集團」及旗下各業務單位一概與上述集團、其業務及網頁無任何關聯。
      </Box>
      <Box>
        鑑於是次事件懷疑有人利用本集團之商譽，誤導大眾以謀利，本集團予以高度關注。現特此聲明，以正視聽，並務請所有投資者提高警惕，以免受到欺詐損失，同時保留一切追究法律責任的權利。
      </Box>

      <Box>如有疑問，歡迎與 http://www.wcgmarkets.com 客戶服務部聯絡。</Box>
      <Box>WCG MARKETS LIMITED </Box>
      <Box>文傳金融集團 謹啟</Box>
      <Box>二零二二年八月三十一日</Box>
    </Stack>
  );
};

export default Fake;
