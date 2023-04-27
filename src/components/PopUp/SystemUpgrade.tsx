import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import PopUp from './PopUp';

export const SystemUpgrade = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="用戶系統升級"
      content={<SystemUpgradeZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="用户系统升级"
      content={<SystemUpgradeCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="System Upgrade"
      content={<SystemUpgradeEn />}
      useBorder={false}
    />
  );
};

const SystemUpgradeZh: React.FC<{}> = () => {
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

      <Box>致：親愛的用戶</Box>

      <Box>
        我們一直都十分重視與每一位用戶的體驗，WCG
        Markets發展致今一直未忘初心，保持著謙卑和務實的態度去進步與創新。
      </Box>

      <Box>
        WCG
        Markets全新的用戶中心將於2023年5月8日正式推出，屆時會全面取代現有的用戶中心系統。
      </Box>

      <Box>2023年5月1日用戶已經可以搶先登入體驗除出入金外的所有功能。</Box>

      <Box>
        於
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/login"
        >
          新的用戶中心
        </Link>
        系統的登入頁面按[
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/forgot-password"
        >
          忘記密碼
        </Link>
        ]便可在已注冊的郵箱中收到新用戶中心的登入密碼，當中如使用遇上任何問題都歡迎立即向
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&&accountid=135464"
        >
          在綫客服
        </Link>
        查詢。
      </Box>

      <Box>
        在這個AI人工智能快速發展的時代，WCG Markets
        搶先一步提供革命性的最優更新，助您在這個環境下快人一步奪得財富增長的先機。讓我們一起攜手進步。
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
        在新用戶中心點擊
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/forgot-password"
        >
          忘記密碼
        </Link>
        ，重置密碼後便可登入全新的用戶中心
      </Box>

      <Box>
        如有任何疑問可查詢客服:{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&&accountid=135464"
        >
          24小時在綫客服(1)
        </Link>
        ，
        <Link
          color="blue.500"
          isExternal
          href="https://direct.lc.chat/11929440/"
        >
          24小時在綫客服(2)
        </Link>
      </Box>

      <Flex flexDir="column">
        <Box>WCG Markets Ltd</Box>
        <Box>市場部</Box>
      </Flex>
    </Stack>
  );
};

const SystemUpgradeCn: React.FC<{}> = () => {
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

const SystemUpgradeEn: React.FC<{}> = () => {
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

      <Box>Dear customer</Box>

      <Box>
        We have always attached great importance to the experience of every
        user. WCG Markets has never forgotten its original intention and has
        maintained a humble and pragmatic attitude towards progress and
        innovation.
      </Box>

      <Box>
        WCG Markets&apos; brand new user center will be officially launched on
        May 8, 2023, and will completely replace the existing user center
        system.
      </Box>

      <Box>
        On May 1, 2023, users can log in to experience all functions except
        deposit and withdrawal.
      </Box>

      <Box>
        On the login page of the{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/login"
        >
          new user center system
        </Link>
        click [
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/forgot-password"
        >
          Forgot Password
        </Link>
        ] to receive the login password for the new user center in the
        registered email. If you encounter any problems, please feel free to
        contact{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&&accountid=135464"
        >
          online customer service
        </Link>
        .
      </Box>

      <Box>
        In this era of rapid development of AI artificial intelligence, WCG
        Markets takes the lead in providing revolutionary optimal updates to
        help you seize the opportunity for wealth growth ahead of others in this
        environment. Let us progress together.
      </Box>

      <Box>
        WCG Markets New User Center:{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/login"
        >
          WCG Markets Client Portal | Login (wcgmarkets-asia.com)
        </Link>
      </Box>

      <Box>
        Click{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://clientportal.wcgmarkets-asia.com/forgot-password"
        >
          Forgot Password
        </Link>{' '}
        in the new user center, reset the password and then log in to the brand
        new user center.
      </Box>

      <Box>
        If you have any questions, please contact customer service:{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&&accountid=135464"
        >
          24-hour online customer service (1)
        </Link>
        ,{' '}
        <Link
          color="blue.500"
          isExternal
          href="https://direct.lc.chat/11929440/"
        >
          24-hour online customer service (2)
        </Link>
      </Box>

      <Flex flexDir="column">
        <Box>WCG Markets Ltd</Box>
        <Box>Marketing Department</Box>
      </Flex>
    </Stack>
  );
};
