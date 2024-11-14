import { Locales } from '@/i18n/config';
import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import PopUp from './PopUp';

export const SystemUpgrade = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="交易模式升級"
      content={<SystemUpgradeZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="交易模式升级"
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
      <Box fontWeight={700}>WCG MARKETS 交易模式升級，賦予您更多交易權力！</Box>

      <Box>
        親愛的用戶，為了更好地滿足您的交易需求，WCG MARKETS
        現已推出全新交易模式，於2024年11月25日起自動更新，將傳統的固定保證金浮動槓桿改為浮動保證金固定槓桿。
      </Box>

      <Box fontWeight={700}>什麼是浮動保證金固定槓桿？</Box>
      <Box>
        <Text fontWeight={700}>• 固定槓桿：</Text>
        您可自行設定100倍至500倍的槓桿倍數，並在整個交易過程中保持不變，讓您更精準地控制風險。
      </Box>
      <Box>
        <Text fontWeight={700}>• 浮動保證金： </Text>
        保證金要求將根據市場行情和您的持倉情況動態調整，提供更靈活的交易體驗。
      </Box>

      <Box fontWeight={700}>全新交易模式的優勢：</Box>
      <Box>
        <Text fontWeight={700}>• 風險控制更精準： </Text>
        固定槓桿讓您對風險有更清晰的掌握。
      </Box>
      <Box>
        <Text fontWeight={700}>• 交易策略更靈活： </Text>
        自由調整槓桿倍數，滿足不同交易風格的需求。
      </Box>
      <Box>
        <Text fontWeight={700}>• 交易體驗更穩定： </Text>
        浮動保證金機制，讓您在市場波動中更加從容。
      </Box>

      <Box fontWeight={700}>
        立即登入您的交易帳戶，體驗全新交易模式，掌握交易主動權！
      </Box>

      <Box fontWeight={700}>注意事項：</Box>
      <Box>• 槓桿交易存在風險，請謹慎操作。</Box>
      <Box>• 原有客戶會按本身保證金調節到相對的槓桿倍數。</Box>
      <Box>• 詳細的交易規則請參閱我們的官方網站。 </Box>
      <Box>• 可登陸客戶中心之後如下圖到交易賬號進行修改。</Box>

      <Box>
        <Image
          src="/../assets/images/pop_up_upgrade-1.png"
          alt="pop_up_upgrade"
        />
      </Box>
    </Stack>
  );
};

const SystemUpgradeCn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box fontWeight={700}>WCG MARKETS 交易模式升级，赋予您更多交易权力！</Box>

      <Box>
        亲爱的用户，为了更好地满足您的交易需求，WCG MARKETS
        现已推出全新交易模式，于2024年11月25日起自动更新，将传统的固定保证金浮动槓杆改为浮动保证金固定槓杆。
      </Box>

      <Box fontWeight={700}>什麽是浮动保证金固定槓杆？</Box>
      <Box>
        <Text fontWeight={700}>• 固定槓杆：</Text>
        您可自行设定100倍至500倍的槓杆倍数，并在整个交易过程中保持不变，让您更精准地控制风险。
      </Box>
      <Box>
        <Text fontWeight={700}>• 浮动保证金： </Text>
        保证金要求将根据市场行情和您的持仓情况动态调整，提供更灵活的交易体验。
      </Box>

      <Box fontWeight={700}>全新交易模式的优势：</Box>
      <Box>
        <Text fontWeight={700}>• 风险控制更精准： </Text>
        固定槓杆让您对风险有更清晰的掌握。
      </Box>
      <Box>
        <Text fontWeight={700}>• 交易策略更灵活： </Text>
        自由调整槓杆倍数，满足不同交易风格的需求。
      </Box>
      <Box>
        <Text fontWeight={700}>• 交易体验更稳定： </Text>
        浮动保证金机制，让您在市场波动中更加从容。
      </Box>

      <Box fontWeight={700}>
        立即登入您的交易帐户，体验全新交易模式，掌握交易主动权！
      </Box>

      <Box fontWeight={700}>注意事项：</Box>
      <Box>• 槓杆交易存在风险，请谨慎操作。</Box>
      <Box>• 原有客户会按本身保证金调节到相对的槓杆倍数。</Box>
      <Box>• 详细的交易规则请参阅我们的官方网站。 </Box>
      <Box>• 可登陆客户中心之后如下图到交易账号进行修改。</Box>

      <Box>
        <Image
          src="/../assets/images/pop_up_upgrade-1.png"
          alt="pop_up_upgrade"
        />
      </Box>
    </Stack>
  );
};

const SystemUpgradeEn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box fontWeight={700}>
        WCG MARKETS Trading Model Upgrade - Empower Your Trading!
      </Box>

      <Box>
        Dear users, to better meet your trading needs, WCG MARKETS has launched
        a new trading model. From November 25, 2024, the trading mode will be
        automatically updated, changing from a traditional fixed margin and
        variable leverage model to a floating margin and fixed leverage model.
      </Box>

      <Box fontWeight={700}>What is Floating Margin with Fixed Leverage?</Box>
      <Box>
        <Text fontWeight={700}>• Fixed Leverage:</Text>
        You can set a leverage multiplier between 100x and 500x, which remains
        consistent throughout the trading process, allowing for more precise
        risk control.
      </Box>
      <Box>
        <Text fontWeight={700}>• Floating Margin: </Text>
        Margin requirements will dynamically adjust based on market conditions
        and your position, providing a more flexible trading experience.
      </Box>

      <Box fontWeight={700}>Advantages of the New Trading Model:</Box>
      <Box>
        <Text fontWeight={700}>• More Precise Risk Control: </Text>
        Fixed leverage gives you a clearer handle on risk management.
      </Box>
      <Box>
        <Text fontWeight={700}>• More Flexible Trading Strategies: </Text>
        Adjust leverage freely to meet the needs of different trading styles.
      </Box>
      <Box>
        <Text fontWeight={700}>• More Stable Trading Experience: </Text>
        The floating margin mechanism enables a more composed approach during
        market fluctuations.
      </Box>

      <Box fontWeight={700}>
        Log in to your trading account now to experience the new trading model
        and take control of your trades!
      </Box>

      <Box fontWeight={700}>Important Notes:</Box>
      <Box>• Leverage trading carries risks; please operate with caution.</Box>
      <Box>
        • Existing clients will have their margin adjusted to the corresponding
        leverage level.
      </Box>
      <Box>
        • For detailed trading rules, please refer to our official website.{' '}
      </Box>
      <Box>
        • After logging into the client center, you can modify the trading
        account settings as shown in the image below.
      </Box>

      <Box>
        <Image
          src="/../assets/images/pop_up_upgrade-1.png"
          alt="pop_up_upgrade"
        />
      </Box>
    </Stack>
  );
};
