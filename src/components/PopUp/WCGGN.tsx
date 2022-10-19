import { links } from '@/assets/links';
import { Locales } from '@/i18n/config';
import { Box, Image, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PopUp from './PopUp';

const WCGGN: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="喜訊！ WCG Markets已完成收購盈富Wealth Gold Group及酷極KUJI兩大交易商"
      content={<WCGGNZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="喜讯！ WCG Markets已完成收购盈富Wealth Gold Group及酷极KUJI两大交易商"
      content={<WCGGNCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="喜讯！ WCG Markets已完成收购盈富Wealth Gold Group及酷极KUJI两大交易商"
      content={<WCGGNEn />}
      useBorder={false}
    />
  );
};

const WCGGNZh: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Box>致親愛的客戶及合作夥伴：</Box>

      <Box>
        我們欣然地通知您WCG Markets已完成向”盈富Wealth Gold
        Group”及”酷極KUJI”兩大交易商作出的收購程序，並將於2022年10月24日（星期一）起統一以WCG
        Markets名義繼續為您服務。
      </Box>

      <Box>
        WCG
        Markets秉持靈活、創新、積極、熱誠的態度，讓我們在金融市場上一直保持領先。面對疫情的嚴峻及環球市場的遽然變化，WCG
        Markets擁抱機遇，借此契機並購兩大知名金融機構”盈富Wealth Gold
        Group”及”酷極KUJI”，相信會為未來發展奠下良好基礎。
      </Box>

      <Box>
        我們很高興能在此跟大家分享這份喜悅，在過去三年面對疫情帶來的嚴峻考驗，全賴您的忠實支持，讓我們堅定不移地克服各種挑戰。感謝您陪伴WCG
        Markets走過每一步，現在是時候讓我們再次一同在金融市場上翺翔。為感謝您對我們一直以來的支持，並讓您於投資路上邁步向前，我們將為您安排特別的獎賞活動，以答謝您的信賴與支持。詳情將於本月底透過電郵及官方網頁內公布，敬請留意。
      </Box>

      <Box>
        再次衷心感謝你一直以來對WCG
        Markets的支持和信賴，如您對此次安排有任何查詢或疑問，歡迎隨時聯絡我司客戶服務部。
      </Box>

      <Box>祝身體安康，旗開得勝！</Box>

      <Box>客戶服務熱線：4001 203 612 / 4008 428 912</Box>
      <Box>
        客戶服務電郵：
        <Link
          _hover={{ cursor: 'pointer' }}
          href={`mailto:${links.email}`}
          isExternal
        >
          {links.email}
        </Link>
      </Box>
      <Box>
        在線客戶服務：
        <Link _hover={{ cursor: 'pointer' }} href={links.liveChat} isExternal>
          {links.liveChat}
        </Link>
      </Box>

      <Box>
        <Image
          src={'/../assets/images/activity_WCGGN_qrcode.png'}
          alt="qr-code"
        ></Image>
      </Box>
      <Box>WCG MARKETS 謹啟</Box>
    </Stack>
  );
};

const WCGGNCn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Box>致亲爱的客户及合作伙伴：</Box>

      <Box>
        我们欣然地通知您WCG Markets已完成向”盈富Wealth Gold
        Group”及”酷极KUJI”两大交易商作出的收购程序，并将于2022年10月24日（星期一）起统一以WCG
        Markets名义继续为您服务。
      </Box>

      <Box>
        WCG
        Markets秉持灵活、创新、积极、热诚的态度，让我们在金融市场上一直保持领先。面对疫情的严峻及环球市场的遽然变化，WCG
        Markets拥抱机遇，借此契机并购两大知名金融机构”盈富Wealth Gold
        Group”及”酷极KUJI”，相信会为未来发展奠下良好基础。
      </Box>

      <Box>
        我们很高兴能在此跟大家分享这份喜悦，在过去三年面对疫情带来的严峻考验，全赖您的忠实支持，让我们坚定不移地克服各种挑战。感谢您陪伴WCG
        Markets走过每一步，现在是时候让我们再次一同在金融市场上翱翔。为感谢您对我们一直以来的支持，并让您于投资路上迈步向前，我们将为您安排特别的奖赏活动，以答谢您的信赖与支持。详情将于本月底透过电邮及官方网页内公布，敬请留意。
      </Box>

      <Box>
        再次衷心感谢你一直以来对WCG
        Markets的支持和信赖，如您对此次安排有任何查询或疑问，欢迎随时联络我司客户服务部。
      </Box>

      <Box>祝身体安康，旗开得胜！</Box>

      <Box>客户服务热线：4001 203 612 / 4008 428 912</Box>
      <Box>
        客户服务电邮：
        <Link
          _hover={{ cursor: 'pointer' }}
          href={`mailto:${links.email}`}
          isExternal
        >
          {links.email}
        </Link>
      </Box>
      <Box>
        在线客户服务：
        <Link _hover={{ cursor: 'pointer' }} href={links.liveChat} isExternal>
          {links.liveChat}
        </Link>
      </Box>

      <Box>
        <Image
          src={'/../assets/images/activity_WCGGN_qrcode.png'}
          alt="qr-code"
        ></Image>
      </Box>
      <Box>WCG MARKETS 谨启</Box>
    </Stack>
  );
};

const WCGGNEn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Box>致亲爱的客户及合作伙伴：</Box>

      <Box>
        我们欣然地通知您WCG Markets已完成向”盈富Wealth Gold
        Group”及”酷极KUJI”两大交易商作出的收购程序，并将于2022年10月24日（星期一）起统一以WCG
        Markets名义继续为您服务。
      </Box>

      <Box>
        WCG
        Markets秉持灵活、创新、积极、热诚的态度，让我们在金融市场上一直保持领先。面对疫情的严峻及环球市场的遽然变化，WCG
        Markets拥抱机遇，借此契机并购两大知名金融机构”盈富Wealth Gold
        Group”及”酷极KUJI”，相信会为未来发展奠下良好基础。
      </Box>

      <Box>
        我们很高兴能在此跟大家分享这份喜悦，在过去三年面对疫情带来的严峻考验，全赖您的忠实支持，让我们坚定不移地克服各种挑战。感谢您陪伴WCG
        Markets走过每一步，现在是时候让我们再次一同在金融市场上翱翔。为感谢您对我们一直以来的支持，并让您于投资路上迈步向前，我们将为您安排特别的奖赏活动，以答谢您的信赖与支持。详情将于本月底透过电邮及官方网页内公布，敬请留意。
      </Box>

      <Box>
        再次衷心感谢你一直以来对WCG
        Markets的支持和信赖，如您对此次安排有任何查询或疑问，欢迎随时联络我司客户服务部。
      </Box>

      <Box>祝身体安康，旗开得胜！</Box>

      <Box>客户服务热线：4001 203 612 / 4008 428 912</Box>
      <Box>
        客户服务电邮：
        <Link
          _hover={{ cursor: 'pointer' }}
          href={`mailto:${links.email}`}
          isExternal
        >
          {links.email}
        </Link>
      </Box>
      <Box>
        在线客户服务：
        <Link _hover={{ cursor: 'pointer' }} href={links.liveChat} isExternal>
          {links.liveChat}
        </Link>
      </Box>

      <Box>
        <Image
          src={'/../assets/images/activity_WCGGN_qrcode.png'}
          alt="qr-code"
        ></Image>
      </Box>
      <Box>WCG MARKETS 谨启</Box>
    </Stack>
  );
};

export default WCGGN;
