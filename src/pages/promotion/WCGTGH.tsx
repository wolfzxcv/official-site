import { links } from '@/assets/links';
import CopyrightLinks from '@/components/Footer/CopyrightLinks';
import SubmitForm, { IField } from '@/components/Form/SubmitForm';
import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import * as Yup from 'yup';

const UPPER_BG_COLOR = '#34065b';
const LOWER_BG_COLOR = '#5820a9';
const HR_COLOR = '#674484';
const SUBMIT_BUTTON_COLOR = '#efa847';
const FONT_WHITE = 'white';
const FONT_YELLOW = '#ffda00';
const FONT_PINK = '#ff23be';

const WCGTGH: React.FC<{}> = () => {
  return (
    <Flex flexDir="column">
      <PageHeader />
      <FormBanner />
      <Products />
      <WhyChooseWCG />
      <PageFooter />
    </Flex>
  );
};

const PageHeader: React.FC<{}> = () => {
  return (
    <Flex bg={UPPER_BG_COLOR} justify="center">
      <Flex
        maxW="1400px"
        width={{ base: '100%', md: '90vw' }}
        pt={10}
        pb={8}
        borderBottom={`1px solid ${HR_COLOR}`}
        justify="center"
      >
        <Link href="/" isExternal>
          <Image
            width={{ base: 109, md: 196 }}
            height={{ base: 46, md: 83 }}
            src="/../assets/images/activity_logo.png"
            alt="logo"
          />
        </Link>
      </Flex>
    </Flex>
  );
};

const StyledSubmitForm = styled.div`
  .chakra-button {
    background-color: ${SUBMIT_BUTTON_COLOR};
    width: 85%;
    margin: 20px 0 0 10px;
    &:hover {
      background-color: ${SUBMIT_BUTTON_COLOR};
      opacity: 0.5;
      transition: all 1s;
    }
  }

  .chakra-input {
    max-width: 300px;
  }
`;

const MESSAGES = {
  tooShort: '太短',
  tooLong: '太长',
  required: '必填',
  invalidFormat: '格式错误'
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FormBanner: React.FC<{}> = () => {
  const data: IField[] = [
    {
      name: 'name',
      placeholder: '输入姓名',
      variant: 'filled',
      formControlWidth: '90%',
      initialValue: '',
      rule: Yup.string()
        .min(2, MESSAGES.tooShort)
        .max(30, MESSAGES.tooLong)
        .required(MESSAGES.required)
    },
    {
      name: 'email',
      placeholder: '输入电邮',
      variant: 'filled',
      formControlWidth: '90%',
      initialValue: '',
      rule: Yup.string()
        .email(MESSAGES.invalidFormat)
        .required(MESSAGES.required)
    },
    {
      name: 'mobile',
      placeholder: '输入手机号',
      variant: 'filled',
      formControlWidth: '90%',
      initialValue: '',
      rule: Yup.string()
        .matches(phoneRegExp, MESSAGES.invalidFormat)
        .required(MESSAGES.required)
    },
    {
      name: 'qq',
      placeholder: '输入微信或QQ',
      variant: 'filled',
      formControlWidth: '90%',
      initialValue: '',
      rule: Yup.string().min(8, MESSAGES.tooShort).max(30, MESSAGES.tooLong)
    }
  ];

  return (
    <Flex
      bg={UPPER_BG_COLOR}
      justify="center"
      color={FONT_WHITE}
      pb={{ base: 10, md: 0 }}
    >
      <Flex wrap="wrap-reverse" justify="center">
        {/* LEFT */}
        <Flex flexDir="column" mt={{ base: 5, md: '40px' }}>
          <Box>
            <Flex flexDir="column" fontSize={{ base: 'inherit', md: '24px' }}>
              <Box>超低交易成本 低点差</Box>
              <Flex align="flex-end">
                真正
                <Text
                  color={FONT_YELLOW}
                  fontSize={{ base: '18px', md: '36px' }}
                  fontWeight={600}
                >
                  $0
                </Text>
                佣金
                <Text
                  color={FONT_YELLOW}
                  fontSize={{ base: '18px', md: '36px' }}
                  fontWeight={600}
                >
                  $0
                </Text>
                出入金手续费
              </Flex>
              <Box fontWeight={500}>高达25美元交易回赠！</Box>
            </Flex>
          </Box>
          <Flex bg={FONT_WHITE} maxW="300px" borderRadius="5px" mt={5}>
            <Flex flexDir="column" p={5} color="black">
              <Box p={2}>
                <Box color={FONT_PINK} fontWeight={900}>
                  经此页面登记成功，
                </Box>
                <Box color={FONT_PINK} fontWeight={900}>
                  即可享现金回赠，提升盈利水平
                </Box>
              </Box>

              <StyledSubmitForm>
                <SubmitForm
                  data={data}
                  submit={'立即开户'}
                  afterSubmit={'提交成功，专员将尽速与您联繫!'}
                  api="/wcgtgh"
                  submitButtonWidth={{ base: '80vw', md: '80%' }}
                />
              </StyledSubmitForm>
            </Flex>
          </Flex>
        </Flex>

        {/* RIGHT */}
        <Box>
          <Image
            width="70vw"
            maxW="900px"
            src="/../assets/images/promotion_WCGTGH_01.png"
            alt="promotion_WCGTGH_01"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

const Products: React.FC<{}> = () => {
  return (
    <Flex flexDir="column" align="center" py="100px" mx={3}>
      {/* 3 items */}
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        justify="space-around"
        align="center"
        width="100%"
        maxW="1400px"
      >
        <Flex flexDir="column" fontSize={{ base: 'inherit', md: '24px' }}>
          <Box fontSize={{ base: 'inherit', md: '24px' }} fontWeight={700}>
            黄金白银
          </Box>
          <Flex align="center">
            <Box>买卖点差低至</Box>
            <Box fontSize={{ base: '18px', md: '36px' }} fontWeight={700}>
              0.3
            </Box>
          </Flex>
          <Flex align="center">
            <Box>杠杆高达</Box>
            <Box fontSize={{ base: '18px', md: '36px' }} fontWeight={700}>
              400倍
            </Box>
          </Flex>
          <Image
            my={5}
            width="200px"
            src="/../assets/images/promotion_WCGTGH_02.png"
            alt="promotion_WCGTGH_02"
          />
        </Flex>

        <Flex
          flexDir="column"
          fontSize={{ base: 'inherit', md: '24px' }}
          my={{ base: 10, md: 0 }}
        >
          <Box fontSize={{ base: 'inherit', md: '24px' }} fontWeight={700}>
            原油
          </Box>
          <Flex align="center">
            <Box>买卖点差低至</Box>
            <Box fontSize={{ base: '18px', md: '36px' }} fontWeight={700}>
              0.05
            </Box>
          </Flex>
          <Flex align="center">
            <Box>杠杆高达</Box>
            <Box fontSize={{ base: '18px', md: '36px' }} fontWeight={700}>
              400倍
            </Box>
          </Flex>
          <Image
            my={5}
            width="200px"
            src="/../assets/images/promotion_WCGTGH_03.png"
            alt="promotion_WCGTGH_03"
          />
        </Flex>

        <Flex flexDir="column" fontSize={{ base: 'inherit', md: '24px' }}>
          <Box fontSize={{ base: 'inherit', md: '24px' }} fontWeight={700}>
            货币对
          </Box>
          <Flex align="center">
            <Box>买卖点差低至</Box>
            <Box fontSize={{ base: '18px', md: '36px' }} fontWeight={700}>
              1
            </Box>
          </Flex>
          <Flex align="center">
            <Box>杠杆高达</Box>
            <Box fontSize={{ base: '18px', md: '36px' }} fontWeight={700}>
              400倍
            </Box>
          </Flex>
          <Image
            my={5}
            width="200px"
            src="/../assets/images/promotion_WCGTGH_04.png"
            alt="promotion_WCGTGH_04"
          />
        </Flex>
      </Flex>

      {/* WCG */}
      <Stack
        px={5}
        py={3}
        mt={10}
        border="1px"
        borderRadius="5px"
        textAlign="center"
      >
        <Box fontSize={{ base: 'inherit', md: '24px' }} fontWeight={700}>
          WCG MARKETS推出独家限定交易优惠！
        </Box>
        <Box>
          从点差、现金回赠到杠杆保证金，覆盖黄金、原油、指数、货币对及更多热门交易产品，
        </Box>
        <Box>让您交易变得更轻松。</Box>
      </Stack>
    </Flex>
  );
};

const WhyChooseWCG: React.FC<{}> = () => {
  return (
    <Flex bg={LOWER_BG_COLOR} justify="center" color={FONT_WHITE} py="100px">
      <Stack
        maxW="1400px"
        width={{ base: '100%', md: '90vw' }}
        align="center"
        px={5}
      >
        <Flex align="center">
          <Image
            display={{ base: 'inline', md: 'none' }}
            width="100px"
            src="/../assets/images/promotion_WCGTGH_05.png"
            alt="promotion_WCGTGH_05"
          />
          <Box
            fontSize={{ base: '26px', md: '36px' }}
            fontWeight={700}
            textDecor="underline"
            pb="60px"
          >
            → 为何选择WCG MARKETS?
          </Box>
        </Flex>

        <Flex justify="center">
          <Box>
            <Image
              display={{ base: 'none', md: 'block' }}
              width="50vw"
              maxW="400px"
              src="/../assets/images/promotion_WCGTGH_05.png"
              alt="promotion_WCGTGH_05"
            />
          </Box>
          <Stack spacing={5}>
            <WhyChooseWCGItem
              text={[
                '1. 正规监管资金安全可靠',
                '加拿大金融交易和报告分析中心(FINTRAC)监管，',
                'MSB牌照编号为 M20282836。'
              ]}
            />

            <WhyChooseWCGItem
              text={[
                '2. 特快存取资金',
                '24小时实时存款,提款2小时内到账,支持银联, 电汇, USDT。'
              ]}
            />

            <WhyChooseWCGItem
              text={[
                '3. 多元产品',
                '为全球客户提供黄金、白银、外汇、指数、原油、天然气等差价合约。'
              ]}
            />

            <WhyChooseWCGItem
              text={[
                '4. 稳定的交易体验',
                '顶级流动性提供商，打造高效稳定的交易环境，这使您能够以真正具有',
                '竞争力的价格交易广泛的市场。'
              ]}
            />

            <WhyChooseWCGItem
              text={[
                '5.卓越客户服务',
                '为客户提供每周五天，每天二十四小时的多语言即时真人客服支援。'
              ]}
            />

            <WhyChooseWCGItem
              text={[
                '6.完善交易系统',
                '使用MetaTrader 4 交易系统, 全面支持电脑、手机、平板、网页版等',
                '系统，满足投资者足不出户，实时获取货币报价及金融商品的信息。'
              ]}
            />
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
};

type WhyChooseWCGItemProps = {
  text: string[];
};

const WhyChooseWCGItem: React.FC<WhyChooseWCGItemProps> = ({
  text
}: WhyChooseWCGItemProps) => {
  return (
    <Flex>
      <Box mr={3}>
        <Image
          width="80%"
          src="/../assets/images/promotion_WCGTGH_06.png"
          alt="promotion_WCGTGH_06"
        />
      </Box>
      <Flex flexDir="column">
        {text.map((each) => (
          <Box key={each}>{each}</Box>
        ))}
      </Flex>
    </Flex>
  );
};

const PageFooter: React.FC<{}> = () => {
  return (
    <Flex bg={LOWER_BG_COLOR} justify="center" color={FONT_WHITE} pb="100px">
      <Stack
        maxW="1400px"
        width={{ base: '100%', md: '90vw' }}
        align="center"
        spacing={3}
        borderTop={`1px solid ${HR_COLOR}`}
        pt={'60px'}
      >
        <Flex direction={{ base: 'column', xl: 'row' }}>
          <Flex wrap="wrap">
            <CopyrightLinks text="隐私条款" href="/conditions/privacyPolicy" />
            <Box mx={1}>|</Box>
            <CopyrightLinks
              text="条款细则"
              href="/conditions/termsAndConditions"
            />
          </Flex>

          <Box mx={1} display={{ base: 'none', xl: 'flex' }}>
            |
          </Box>

          <Flex wrap="wrap">
            <CopyrightLinks
              text="争端处理"
              href="/conditions/disputeSettlement"
            />
            <Box mx={1}>|</Box>
            <CopyrightLinks text="免责申明" href="/conditions/riskDisclaimer" />
          </Flex>

          <Box mx={1} display={{ base: 'none', xl: 'flex' }}>
            |
          </Box>

          <Flex justify="center">
            <CopyrightLinks
              text="防止洗黑钱条款"
              href="/conditions/amlPolicy"
            />
          </Flex>
        </Flex>
        <Flex py={2}>
          <Link
            _hover={{
              bgColor: 'gray.500',
              color: 'gray.700'
            }}
            mx={1}
            href={links.facebook}
            isExternal
          >
            <Image
              mr={2}
              minW="28px"
              height="28px"
              src="/../assets/images/facebook.png"
              alt="Facebook"
            />
          </Link>
          <Link
            _hover={{
              bgColor: 'gray.500',
              color: 'gray.700'
            }}
            href={links.instagram}
            isExternal
          >
            <Image
              minW="28px"
              height="28px"
              src="/../assets/images/instagram.png"
              alt="Instagram"
            />
          </Link>
        </Flex>
        <Box fontSize={{ base: '18px', md: '28px' }} fontWeight={700}>
          凭借业内最专业的经验为您提供优质的投资服务
        </Box>
        <Box fontSize="10px" pb={8}>
          所有交易均涉及风险，您的损失可能大于您的入金。
        </Box>
        <Box>© WCG Markets Ltd 版权所有，不得转载</Box>
      </Stack>
    </Flex>
  );
};

export default WCGTGH;
