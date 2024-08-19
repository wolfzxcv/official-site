import { Locales } from '@/i18n/config';
import { Box, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PopUp from './PopUp';

const ThingsToNote: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="注意事項"
      content={<ThingsToNoteContentZh />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="注意事项"
      content={<ThingsToNoteContentCn />}
      useBorder={false}
    />
  );
};

const ThingsToNoteContentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Box>
        尊敬的客戶，
        <br /> <br />
        近期我們發現有不法分子發送詐騙郵件給部份客戶，聲稱能幫助客戶增值資金，令資金翻倍，實際目的是竊取客戶的帳號及密碼。為了保護您的個人信息和資金安全，我們特此提醒您注意以下事項：
        <br />
        <br />
        謹慎對待可疑郵件：如果您收到相似的電子郵件，請仔細檢查發件人的電子郵件地址和郵件內容。真正來自本公司的郵件不會要求您提供敏感信息或點擊可疑鏈接。
        <br />
        不要點擊不明鏈接：詐騙郵件中常包含惡意鏈接，點擊後可能會導致您的個人信息被盜取。請勿點擊任何不明鏈接或下載附件。
        <br />
        保護您的帳號信息：本公司不會通過電子郵件要求您提供帳號密碼或其他敏感信息。如有疑問，請直接聯繫我們的客服部門進行確認。
        <br />
        <br />
        如果您懷疑已經收到詐騙郵件或提供了個人信息，請立即聯繫我們的客服部門，我們將協助您採取必要的措施保護您的帳號安全。
        <br />
        <br />
        感謝您的理解與配合。
        <br />
        <br />
        此致
        <br />
        <br />
        WCG 客戶服務部
      </Box>
    </Stack>
  );
};

const ThingsToNoteContentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={5} p={5}>
      <Box>
        尊敬的客户，
        <br /> <br />
        近期我们发现有不法分子发送诈骗邮件给部份客户，声称能帮助客户增值资金，令资金翻倍，实际目的是窃取客户的帐号及密码。为了保护您的个人信息和资金安全，我们特此提醒您注意以下事项：
        <br />
        <br />
        谨慎对待可疑邮件：如果您收到相似的电子邮件，请仔细检查发件人的电子邮件地址和邮件内容。真正来自本公司的邮件不会要求您提供敏感信息或点击可疑链接。
        <br />
        不要点击不明链接：诈骗邮件中常包含恶意链接，点击后可能会导致您的个人信息被盗取。请勿点击任何不明链接或下载附件。
        <br />
        保护您的帐号信息：本公司不会通过电子邮件要求您提供帐号密码或其他敏感信息。如有疑问，请直接联繫我们的客服部门进行确认。
        <br />
        <br />
        如果您怀疑已经收到诈骗邮件或提供了个人信息，请立即联繫我们的客服部门，我们将协助您採取必要的措施保护您的帐号安全。
        <br />
        <br />
        感谢您的理解与配合。
        <br />
        <br />
        此致
        <br />
        <br />
        WCG 客户服务部
      </Box>
    </Stack>
  );
};

export default ThingsToNote;
