import {
  Box,
  Flex,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';

const disputeSettlement: React.FC<{}> = () => {
  const { t } = useTranslation(['conditions']);

  return (
    <Wrapper>
      {/* dispute Settlement */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('disputeSettlement')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'}>
          <Text>{t('weWelcomeYourInvaluableComments')}</Text>

          <Text>
            {`${t('ifYouNeedAnyAssistance')} ${t('orEmailUs')} `}
            <Link href="mailto:info@wcglb.com">info@wcglb.com</Link>
          </Text>
        </Box>

        <Box width={'80vw'} my={2}>
          <InfoTitle size="22px" title={t('makeASuggestion')} />

          <Box my={3}>
            <Text>{t('weUnderstandThatEven')}</Text>
            <Text>{t('toAssistUsInHelpingYou')}</Text>
          </Box>

          <OrderedList>
            <ListItem>{t('collectMaterials')}</ListItem>
            <ListItem>{t('forCurrentTrades')}</ListItem>
            <ListItem>{t('transferTo')}</ListItem>
            <ListItem>{t('contactOurComplianceDepartment')}</ListItem>
            <ListItem>{t('collectAllTheSupportingMaterials')}</ListItem>
          </OrderedList>

          <Box my={3}>
            <Text>{t('thenIfTheQuestionRelates')}</Text>
            <Text>{t('ifAtThisStage')}</Text>
            <Text>{t('ifTheProblem')}</Text>
          </Box>
        </Box>

        <Box width={'80vw'} my={2}>
          <InfoTitle size="22px" title={t('emailTo')} />

          <Box my={1}>
            <Text>
              {t('emailTo')}{' '}
              <Link href="mailto:info@wcglb.com">info@wcglb.com</Link>
            </Text>
            <Text>{t('headOfCompliance')}</Text>
            <Text>WCG Markets Ltd</Text>
            <Text>{t('weTargetToResolve')}</Text>
          </Box>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'conditions',
      'header'
    ]))
  }
});

export default disputeSettlement;
