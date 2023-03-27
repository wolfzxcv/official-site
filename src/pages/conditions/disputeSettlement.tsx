import { links } from '@/assets/links';
import Wrapper from '@/components/Base/Wrapper';
import InfoTitle from '@/components/Common/InfoTitle';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

const disputeSettlement: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');

  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* dispute Settlement */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('disputeSettlement')} />
        </Box>

        <Image my={3} src="/../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} textAlign={isArabic ? 'right' : 'left'}>
          <Text>{t('weWelcomeYourInvaluableComments')}</Text>

          <Text>
            {`${t('ifYouNeedAnyAssistance')} ${t('orEmailUs')} `}
            <Link href={`mailto: ${links.email}`}>{`${links.email}`}</Link>
          </Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle size="22px" title={t('makeASuggestion')} />

          <Box my={3}>
            <Text>{t('weUnderstandThatEven')}</Text>
            <Text>{t('toAssistUsInHelpingYou')}</Text>
          </Box>

          <Stack spacing={5}>
            <Text>{`${!isArabic ? '1. ' : ''}${t('collectMaterials')}`}</Text>
            <Text>{`${!isArabic ? '2. ' : ''}${t('forCurrentTrades')}`}</Text>
            <Text>{`${!isArabic ? '3. ' : ''}${t('transferTo')}`}</Text>
            <Text>{`${!isArabic ? '4. ' : ''}${t(
              'contactOurComplianceDepartment'
            )}`}</Text>
            <Text>{`${!isArabic ? '5. ' : ''}${t(
              'collectAllTheSupportingMaterials'
            )}`}</Text>
          </Stack>

          <Stack spacing={5} my={3}>
            <Text>{t('thenIfTheQuestionRelates')}</Text>
            <Text>{t('ifAtThisStage')}</Text>
            <Text>{t('ifTheProblem')}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle size="22px" title={t('emailTo')} />

          <Box my={1}>
            <Text>
              {t('emailTo')}{' '}
              <Link href={`mailto: ${links.email}`}>{`${links.email}`}</Link>
            </Text>
            <Text>{t('headOfCompliance')}</Text>
            <Text>WCG Group</Text>
            <Text>{t('weTargetToResolve')}</Text>
          </Box>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'conditions',
      'header'
    ]))
  }
});

export default disputeSettlement;
