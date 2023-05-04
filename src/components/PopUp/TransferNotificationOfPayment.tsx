import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import PopUp from './PopUp';

export const TransferNotificationOfPayment = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="出入金通道轉移通知"
      content={<TransferNotificationOfPaymentZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="出入金通道转移通知"
      content={<TransferNotificationOfPaymentCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="出入金通道轉移通知"
      content={<TransferNotificationOfPaymentZh />}
      useBorder={false}
    />
  );
};

const TransferNotificationOfPaymentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Flex justify="center">
        <Image
          width={120}
          height={50}
          src="/../assets/images/logo.svg"
          alt="logo"
        />
      </Flex>

      <Box>
        本公司于2023年5月6日会转移出入金通道到全新的用户中心，因此出入金功能于以下时间暂停服务。
      </Box>

      <Flex flexDir="column" align="center" fontWeight="bold">
        <Box>2023年5月6日北京时间04:59</Box>

        <Box>至</Box>

        <Box>2023年5月8日北京时间07:01</Box>
      </Flex>
      <Box>届时全新的用户中心正式上线并已开通包括出入金在内的所有功能。</Box>
      <Box>
        首次登入全新的用户中心的客户点击[
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/forgot-password"
        >
          忘记密码
        </Link>
        ]，重置密码后便可登入取得登录的密码。
      </Box>

      <Box>
        我们都准备了全新用户中心的教学欢迎向
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&accountid=135464"
        >
          在线客服
        </Link>
        索取。
      </Box>

      <Box>
        WCG Markets 新用戶中心:{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/login"
        >
          WCG Markets Client Portal | Login (wcgmarkets-asia.com)
        </Link>
      </Box>

      <Box>
        如有任何疑問可查詢客服:{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&&accountid=135464"
        >
          24小時在線客服(1)
        </Link>
        ，
        <Link
          color="blue.500"
          isExternal
          href="https://direct.lc.chat/11929440/"
        >
          24小時在線客服(2)
        </Link>
      </Box>

      <Flex flexDir="column">
        <Box>WCG Markets Ltd</Box>
        <Box>市場部</Box>
      </Flex>
    </Stack>
  );
};

const TransferNotificationOfPaymentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Flex justify="center">
        <Image
          width={120}
          height={50}
          src="/../assets/images/logo.svg"
          alt="logo"
        />
      </Flex>

      <Box>致：亲爱的用户</Box>

      <Box>
        我们一直都十分重视与每一位用户的体验，WCG
        Markets发展致今一直未忘初心，保持着谦卑和务实的态度去进步与创新。
      </Box>

      <Box>
        WCG
        Markets全新的用户中心将于2023年5月8日正式推出，届时会全面取代现有的用户中心系统。
      </Box>

      <Box>2023年5月1日用户已经可以抢先登陸体验除出入金外的所有功能。</Box>

      <Box>
        于
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/login"
        >
          新的用户中心
        </Link>
        系统的登陸页面按[
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/forgot-password"
        >
          忘记密码
        </Link>
        ]便可在已注册的邮箱中收到新用户中心的登入密码，当中如使用遇上任何问题都欢迎立即向
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&&accountid=135464"
        >
          在綫客服
        </Link>
        查询。
      </Box>

      <Box>
        在这个AI人工智能快速发展的时代，WCG Markets
        抢先一步提供革命性的最优更新，助您在这个环境下快人一步夺得财富增长的先机。让我们一起携手进步。
      </Box>

      <Box>
        WCG Markets 新用户中心:{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/login"
        >
          WCG Markets Client Portal | Login (wcgmarkets-asia.com)
        </Link>
      </Box>

      <Box>
        在新用户中心点击
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/forgot-password"
        >
          忘记密码
        </Link>
        ，重置密码后便可登入全新的用户中心
      </Box>

      <Box>
        如有任何疑问可查询客服:{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&&accountid=135464"
        >
          24小时在綫客服(1)
        </Link>
        ，
        <Link
          color="blue.500"
          isExternal
          href="https://direct.lc.chat/11929440/"
        >
          24小时在綫客服(2)
        </Link>
      </Box>

      <Flex flexDir="column">
        <Box>WCG Markets Ltd</Box>
        <Box>市场部</Box>
      </Flex>
    </Stack>
  );
};
