import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import { InfoAccordionItemProps } from '../../components/Common/InfoAccordion';
import InfoTitle from '../../components/Common/InfoTitle';
import { Locales } from '../../i18n/config';

const InfoAccordion = dynamic(
  () => import('../../components/Common/InfoAccordion'),
  { ssr: false }
);

const amlPolicy: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  const data: InfoAccordionItemProps[] = [
    {
      title: 'General Definitions',
      content: [
        'For the purpose of this Manual, unless the context shall prescribe otherwise.',
        '"Business Relationship" means a business, professional or commercial relationship which is connected with the professional activities of the WCG Markets (HK) Limited, and which was expected, at the time when the contact was established, to have an element of duration.',
        '"Client" means any legal or physical person aiming to conclude a Business Relationship or conduct a single and/or more transaction(s) with WCG Markets (HK) Limited.',
        '"Company" means any of the following entities listed below',
        'WCG Markets (HK) Limited which is incorporated in Hong Kong with registration number 2028151 and The Chinese Gold and Silver Exchange Society License 012',
        '"Law" means the Anti-Money Laundering and Counter-Terrorist Financing Ordinance 2012.',
        '"Manual" means WCG Markets (HK) Limited\'s Risk Management & Procedures Manual.'
      ]
    },
    {
      title: 'Introduction',
      content: [
        "The purpose of the Manual is to lay down the WCG Markets (HK) Limited's internal practice, measures, procedures and controls relevant to the prevention of Money Laundering and Terrorist Financing.",
        'The Manual is developed and periodically updated by the Anti-Money Laundering Compliance.',
        'Officer (hereinafter the "AMLCO") based on the general principles set up by the WCG Markets (HK) Limited\'s Board of Directors (hereinafter the "Board") in relation to the prevention of Money Laundering and Terrorist Financing. All amendments and/or changes to the Manual must be approved by the Board.',
        "The Manual shall be communicated by the AMLCO to all the employees of the WCG Markets (HK) Limited that manage, monitor or control in any way the Client's transactions and have the responsibility for the application of the practices, measures, procedures and controls that have been determined herein. The Manual has been prepared to comply with the provisions of the Law."
      ]
    },
    {
      title: 'Manual Applicability',
      content: [
        `${
          !isArabic ? '1. ' : ''
        }The Manual applies to all various types of services offered to the WCG Markets (HK) Limited's Clients as well as the relevant WCG Markets (HK) Limited's dealings with its Clients, including but not limited to Gold and Silver Trading transactions, which either do not aim to physically deliver the agreed foreign currency or are not materially settled in cash, irrespective of the Client account size and frequency of trading.`,
        "In this respect, AMLCO shall be responsible to update the Manual so as to comply with Law's future requirements, as applicable, and regarding due diligence procedures being applied for Clients who deal in but not limited to gold and silver trading transactions with the WCG Markets (HK) Limited."
      ]
    },
    {
      title: 'Responsibilities of the Board of Directors',
      content: [
        'The responsibilities of the Board in relation to the prevention of Money Laundering and Terrorist Financing include the following:',
        `${
          !isArabic ? '1. ' : ''
        }To determine, record and approve the general policy principles of the WCG Markets (HK) Limited in relation to the prevention of Money Laundering and Terrorist Financing and communicate them to the AMLCO.`,
        `${
          !isArabic ? '2. ' : ''
        }To appoint the AMLCO and, where necessary, additional assistant AMCLOs and determine their duties and responsibilities, which are recorded in this Manual.`,
        `${!isArabic ? '3. ' : ''}To approve the Manual.`,
        `${
          !isArabic ? '4. ' : ''
        }To ensure that all relevant requirements of the Law are applied, and assure that appropriate, effective and sufficient systems and controls are introduced for achieving the above mentioned requirement.`,
        `${
          !isArabic ? '5. ' : ''
        }To ensure that the AMLCO and his assistants, if any, and any other person who has been assigned with the duty of implementing the procedures for the prevention of Money Laundering and Terrorist Financing (i.e. personnel of the Administration/Back-Office Department), have complete and timely access to all data and information concerning Clients' identity, transactions' documents (as and where applicable) and other relevant files and information, so as to be fully facilitated in the effective execution of their duties, as included herein.`,
        `${
          !isArabic ? '6. ' : ''
        }To ensure that all employees are aware of the person who has been assigned the duties of the AMLCO, as well as his assistants (if any), to whom they report, any information concerning transactions and activities for which they have knowledge or suspicion that might be related to Money Laundering and Terrorist Financing.`,
        `${
          !isArabic ? '7. ' : ''
        }To establish a clear and quick reporting chain based on which information regarding suspicious transactions is passed without delay to the AMLCO, either directly or through his assistants, if any, and notifies accordingly the AMLCO for its explicit prescription in the Manual.`,
        `${
          !isArabic ? '8. ' : ''
        }To ensure that the AMLCO and the Head of Administration/Back-Office Department have sufficient resources, including competent staff and technological equipment, for the effective discharge of their duties.`
      ]
    },
    {
      title:
        'Responsibilities of the Anti-Money Laundering Compliance Officers',
      content: [
        "The AMLCO shall belong hierarchically to the higher ranks of the WCG Markets (HK) Limited's organization structure so as to command the necessary authority. Furthermore, the AMLCO shall lead the WCG Markets (HK) Limited's Money Laundering Compliance procedures and processes and report to the Senior Management. The AMLCO shall also have access to all relevant information necessary to perform his duties.",
        'During the execution of his duties and the control of the compliance of the WCG Markets (HK) Limited with the Law, the AMLCO shall obtain and utilize data, information and reports issued by international organizations.',
        'The duties of the AMLCO shall include the following:',
        `${
          !isArabic ? '1. ' : ''
        }To design, based on the general policy principles of the WCG Markets (HK) Limited the internal practice, measures, procedures and controls relevant to the prevention of Money Laundering and Terrorist Financing. It is provided that, the above measures and procedures for the prevention of the abuse of new technologies and systems providing financial services, for the purpose of Money Laundering and Terrorist Financing is appropriately considered and managed in the course of daily activities of the WCG Markets (HK) Limited with regard to the development of new products and possible changes in WCG Markets (HK) Limited's economic profile (e.g., penetration into new markets).`,
        `${
          !isArabic ? '2. ' : ''
        }To develop and establish the Client Acceptance Policy and submit it to the Board for consideration and approval.`,
        `${
          !isArabic ? '3. ' : ''
        }To review and update the Manual as may be required from time to time, and for such updates to be communicated to the Board for their approval.`,
        `${
          !isArabic ? '4. ' : ''
        }To provide advice and guidance to the employees of the WCG Markets (HK) Limited on subjects related to Money Laundering and Terrorist Financing.`,
        "The constant monitoring of the Clients' accounts and transactions is an imperative element in the effective controlling of the risk of Money Laundering and Terrorist Financing. In this respect, the AMLCO shall be responsible for maintaining as well as developing the on-going monitoring process of the WCG Markets (HK) Limited."
      ]
    },
    {
      title: 'Responsibilities of the Internal Auditors',
      content: [
        'The following obligations of the Internal Auditor are addressed specifically for the prevention of Money Laundering and Terrorist Financing:',
        `${
          !isArabic ? '1. ' : ''
        }The Internal Auditor shall review and evaluate, at least on an annual basis, the appropriateness, effectiveness and adequacy of the policy, practices, measures, procedures and control mechanisms applied for the prevention of Money Laundering and Terrorist Financing mentioned in the Manual.`,
        `${
          !isArabic ? '2. ' : ''
        }The findings and observations of the Internal Auditor, in relation to point (1) above, shall be submitted, in a written report form, to the Board.`
      ]
    },
    {
      title: 'Know Your Client (KYC) Workflow Risk-Based Approach',
      content: [
        'Company shall apply appropriate measures and procedures, by adopting a risk-based approach, so as to focus its effort in those areas where the risk of Money Laundering and Terrorist Financing appears to be comparatively higher.',
        'The adopted risk-based approach that is followed by the WCG Markets (HK) Limited, and described in the Manual, has the following general characteristics:',
        `${
          !isArabic ? '1. ' : ''
        }Recognizes that the money laundering or terrorist financing threat varies across Clients, countries, services and financial instruments.`,
        `${
          !isArabic ? '2. ' : ''
        }Allows the Board to differentiate between Clients of the WCG Markets (HK) Limited in a way that matches the risk of their particular business.`,
        `${
          !isArabic ? '3. ' : ''
        }Allows the Board to apply its own approach in the formulation of policies, procedures and controls in response to the WCG Markets (HK) Limited's particular circumstances and characteristics.`,
        `${
          !isArabic ? '4. ' : ''
        }Helps to produce a more cost-effective system.`,
        'The risk-based approach adopted by the WCG Markets (HK) Limited, and described in the Manual, involves specific measures and procedures in assessing the most cost effective and appropriate way to identify and manage the Money Laundering and Terrorist Financing risks faced by the WCG Markets (HK) Limited.',
        'Such measures include:',
        `${
          !isArabic ? '1. ' : ''
        }Identifying and assessing the Money Laundering and Terrorist Financing risks emanating from particular Clients or types of Clients, financial instruments, services, and geographical areas of operation of its clients.`,
        `${
          !isArabic ? '2. ' : ''
        }Managing and mitigating the assessed risks by the application of appropriate and effective measures, procedures and controls.`,
        `${
          !isArabic ? '3. ' : ''
        }Continuous monitoring and improvements in the effective operation of the policies, procedures and controls.`,
        'The application of appropriate measures and the nature and extent of the procedures on a risk-based approach depends on different indicators.',
        'Such indicators include the following:',
        `${
          !isArabic ? '1. ' : ''
        }The scale and complexity of the services offered.`,
        `${
          !isArabic ? '2. ' : ''
        }Geographical spread of the services and Clients.`,
        `${
          !isArabic ? '3. ' : ''
        }The nature (e.g. non face-to-face) and economic profile of Clients as well as of financial instruments and services offered.`,
        `${!isArabic ? '4. ' : ''}The volume and size of transactions.`,
        `${
          !isArabic ? '5. ' : ''
        }The origin and destination of Clients' funds.`,
        `${!isArabic ? '6. ' : ''}The nature of business transactions.`
      ]
    },
    {
      title: 'Relevant International Organizations',
      content: [
        'For the development and implementation of appropriate measures and procedures on a risk-based approach, and for the implementation of Know Your Client (KYC) workflow, the AMLCO and the Head of the Administration/Back-Office Department shall consult data, information and reports from reputable sources that are published in the following relevant international organizations:',
        `${
          !isArabic ? '1. ' : ''
        }Office of Foreign Assets Control - http://www.treasury.gov/ofac/downloads/t11sdn.pdf`,
        `${!isArabic ? '2. ' : ''}HM Treasury - 
        http://hmt-sanctions.s3.amazonaws.com/sanctionsconlist.htm`,
        `${
          !isArabic ? '3. ' : ''
        }EEAS - http://ec.europa.eu//external_relations/cfsp/sanctions/list/version4/delta/delta.xml`,
        `${!isArabic ? '4. ' : ''}FATF - https://www.fatf-gafi.org/`
      ]
    },
    {
      title: 'Client Identification Procedures',
      content: [
        'The AMLCO shall ensure that the appropriate documents and information with respect to the following cases shall be duly obtained, as applicable and appropriate:',
        `${
          !isArabic ? '1. ' : ''
        }The WCG Markets (HK) Limited shall obtain the following information to ascertain the true identity of the natural persons:`,
        ` ${
          !isArabic ? 'a. ' : ''
        }True name and/or names used as these are stated on the official identity card or passport.`,
        ` ${
          !isArabic ? 'b. ' : ''
        }Full permanent address, including postal code, as reflected from any of the following documents:`,
        `  ${
          !isArabic ? 'i. ' : ''
        }Utility bills linked to their residential address.`,
        `  ${!isArabic ? 'ii. ' : ''}Official bank statements.`,
        ` ${!isArabic ? 'c. ' : ''}Telephone (home and mobile) and fax numbers`,
        ` ${!isArabic ? 'd. ' : ''}E-mail address, if any`,
        ` ${!isArabic ? 'e. ' : ''}Date and place of birth`,
        ` ${!isArabic ? 'f. ' : ''}Nationality`,
        ` ${
          !isArabic ? 'g. ' : ''
        }Details of the profession and other occupations of the Client including the name of employer/business organization, if necessary, in the events of conflicting information.`,
        `${
          !isArabic ? '2. ' : ''
        }In order to verify the Client's identity/name WCG Markets (HK) Limited shall request the Client to present an original document which is issued by an independent and reliable source that carries the Client's photo (e.g., Passport, National Identity cards, Driving License). After WCG Markets (HK) Limited is satisfied for the Client's identity from the original identification document presented, it will keep copies. It is provided that, WCG Markets (HK) Limited shall be able to prove that the said document is issued by an independent and reliable source. In this respect, the AMLCO shall be responsible to evaluate the independence and reliability of the source and shall duly document and file the relevant data and information used for the evaluation, as applicable.`,
        `${
          !isArabic ? '3. ' : ''
        }The Client's permanent address shall be verified using one of the following ways:`,
        ` ${
          !isArabic ? 'a. ' : ''
        }Visit at the place of residence (in such a case, WCG Markets (HK) Limited employee who carries out the visit prepares a memo which is retained in the Client's file)`,
        ` ${
          !isArabic ? 'b. ' : ''
        }The production of a recent (up to 6 months) utility bill, local authority tax bill or a bank statement or any other document same with the aforesaid (to protect against forged or counterfeit documents, the prospective Clients are required to produce original documents)`,
        ` ${
          !isArabic ? 'c. ' : ''
        }Mailing an official letter from the WCG Markets (HK) Limited to the Client's permanent address where a scanned copy of the letter content is required for confirmation`,
        `${
          !isArabic ? '4. ' : ''
        }In addition to the above, the procedure for the verification of a client’s identity is reinforced if the said Client is introduced by a reliable staff member of the WCG Markets (HK) Limited, or by another existing reliable Client who is personally known to a member of the Board. Details of such introductions are kept in the Client's file.`,
        `${
          !isArabic ? '5. ' : ''
        }In addition to the aim of preventing Money Laundering and Terrorist Financing, the abovementioned information is also essential for implementing the financial sanctions imposed against various persons that can be validated against sources listed in Relevant International Organizations. In this respect, passport's number, issuing date and the Client's date of birth always appear on the documents obtained, so that WCG Markets (HK) Limited would be in the position to verify precisely whether a client is included in the relevant list of persons subject to financial sanctions which are validated against sources listed in Relevant International Organizations.`
      ]
    },
    {
      title:
        'Reliance on Third Persons for Client Identification and Due Diligence Purposes',
      content: [
        'Company may rely on third persons for the implementation of Client identification and due diligence procedures, provided that:',
        `${
          !isArabic ? '1. ' : ''
        }The third person makes immediately available all data and information, which must be certified true copies of the originals, which were collected in the course of applying Client identification and due diligence procedures.`,
        `${
          !isArabic ? '2. ' : ''
        }WCG Markets (HK) Limited applies the appropriate due diligence measures on the third person with respect to his professional registration and procedures and measures applied from the third person for the prevention of Money Laundering and Terrorist Financing. The AMLCO shall be responsible for the implementation of the provisions mentioned above.`
      ]
    },
    {
      title: 'Suspicious Transactions',
      content: [
        'The definition of a suspicious transaction as well as the types of suspicious transactions which may be used for Money Laundering and Terrorist Financing are almost unlimited. A suspicious transaction will often be one which is inconsistent with a client’s known, legitimate business or personal activities or with the normal business of the specific account, or in general with the economic profile that WCG Markets (HK) Limited has created for the Client. WCG Markets (HK) Limited shall ensure that it maintains adequate information and knows enough about its Clients ‘activities in order to recognize on time that a transaction or a series of transactions is unusual or suspicious.',
        'In order to identify suspicious transactions, the AMLCO shall perform the following activities:',
        `${
          !isArabic ? '1. ' : ''
        }Monitor on a continuous basis any changes in the Client's financial status, business activities, type of transactions.`,
        `${
          !isArabic ? '2. ' : ''
        }Monitor on a continuous basis if any Client is engaged in any of the practices described in the list below of what might constitute suspicious transactions/activities related to Money Laundering and Terrorist Financing:`
      ]
    },
    {
      title: 'Money Laundering',
      content: [
        `${
          !isArabic ? 'i. ' : ''
        }Transactions with no discernible purpose or are unnecessarily complex.`,
        `${
          !isArabic ? 'ii. ' : ''
        }Use of foreign accounts of companies or group of companies with complicated ownership structure which is not justified based on the needs and economic profile of the Client.`,
        `${
          !isArabic ? 'iii. ' : ''
        }The transactions or the size of the transactions requested by the Client do not comply with his usual practice and business activity.`,
        `${
          !isArabic ? 'iv. ' : ''
        }Large volume of transactions and/or money deposited or credited into, an account when the nature of the Client's business activities would not appear to justify such activity.`,
        `${
          !isArabic ? 'v. ' : ''
        }The Business Relationship involves only one transaction, or it has a short duration.`,
        `${
          !isArabic ? 'vi. ' : ''
        }There is no visible justification for a client using the services of a particular financial organization, e.g., the Client is situated far away from the particular financial organization and in a place where he could be provided services by another financial organization.`,
        `${
          !isArabic ? 'vii. ' : ''
        }There are frequent transactions in the same financial instrument without obvious reason and in conditions that appear unusual (churning).`,
        `${
          !isArabic ? 'viii. ' : ''
        }There are frequent small purchases of a particular financial instrument by a Client who settles in cash, and then the total number of the financial instrument is sold in one transaction with settlement in cash or with the proceeds being transferred, with the Client's instructions, in an account other than his usual account.`,
        `${
          !isArabic ? 'ix. ' : ''
        }Any transaction the nature, size or frequency appear to be unusual, e.g. cancellation of an order, particularly after the deposit of the consideration.`,
        `${
          !isArabic ? 'x. ' : ''
        }Transactions which are not in line with the conditions prevailing in the market, in relation, particularly, with the size of the order and the frequency.`,
        `${
          !isArabic ? 'xi. ' : ''
        }The settlement of any transaction but mainly large transactions, in cash.`,
        `${
          !isArabic ? 'xii. ' : ''
        }Settlement of the transaction by a third person which is different than the Client which gave the order.`,
        `${
          !isArabic ? 'xiii. ' : ''
        }Instructions of payment to a third person that does not seem to be related with the instructor.`,
        `${
          !isArabic ? 'xiv. ' : ''
        }Transfer of funds to and from countries or geographical areas which do not apply, or they apply inadequately FATF's recommendations on Money Laundering and Terrorist Financing.`,
        `${
          !isArabic ? 'xv. ' : ''
        }A Client is reluctant to provide complete information when establishes a Business Relationship about the nature and purpose of its business activities, anticipated account activity, prior relationships with financial organizations, names of its officers and directors, or information on its business location. The Client usually provides minimum or misleading information that is difficult or expensive for the financial organization to verify.`,
        `${
          !isArabic ? 'xvi. ' : ''
        }A Client provides unusual or suspicious identification documents that cannot be readily verified.`,
        `${
          !isArabic ? 'xvii. ' : ''
        }A Client's home/business telephone is disconnected.`,
        `${
          !isArabic ? 'xviii. ' : ''
        }A Client that makes frequent or large transactions and has no record of past or present employment experience.`,
        `${
          !isArabic ? 'xix. ' : ''
        }Difficulties or delays on the submission of the financial statements or other identification documents, of a Client/legal person.`,
        `${
          !isArabic ? 'xx. ' : ''
        }A Client who has been introduced by a foreign financial organization; or by a third person whose countries or geographical areas of origin do not apply, or they apply inadequately FATF's recommendations on Money Laundering and Terrorist Financing.`,
        `${
          !isArabic ? 'xxi. ' : ''
        }Shared address for individuals involved in cash transactions, particularly when the address is also a business location and/or does not seem to correspond to the stated occupation (e.g. student, unemployed, self- employed)`,
        `${
          !isArabic ? 'xxii. ' : ''
        }The stated occupation of the Client is not commensurate with the level or size of the executed transactions.`,
        `${
          !isArabic ? 'xxiii. ' : ''
        }Financial transactions from non-profit or charitable organizations for which there appears to be no logical economic purpose or in which there appears to be no link between the stated activity of the organization and the other parties in the transaction.`,
        `${
          !isArabic ? 'xxiv. ' : ''
        }Unexplained inconsistencies arising during the process of identifying and verifying the Client (e.g. previous or current Hong Kong of residence, Hong Kong of issue of the passport, countries visited according to the passport, documents furnished to confirm name, address and date of birth).`,
        `${!isArabic ? 'xxv. ' : ''}Complex trust or nominee network.`,
        `${
          !isArabic ? 'xxvi. ' : ''
        }Transactions or WCG Markets (HK) Limited structures established or working with an unneeded
        commercial way, e.g. companies with bearer shares or bearer financial instruments or use of a postal box.
        xxvii. Use of general nominee documents in a way that restricts the control exercised by the WCG Markets (HK) Limited's board of directors.
        `,
        `${
          !isArabic ? 'xxviii. ' : ''
        }Changes in the lifestyle of employees of the financial organization, e.g., luxurious way of life or avoiding being out of office due to holidays.`,
        `${
          !isArabic ? 'xxix. ' : ''
        }Changes in the performance and the behavior of the employees of the financial organization.`
      ]
    },
    {
      title: 'Record-Keeping Procedures',
      content: [
        'The Administration/Back-Office Department of WCG Markets (HK) Limited Ltd shall maintain records of:',
        `${
          !isArabic ? '1. ' : ''
        }The Client identification documents obtained during the Client identification and due diligence procedures, as applicable.`,
        `${
          !isArabic ? '2. ' : ''
        }The details of all relevant records with respect to the provision of financial services to Clients.`,
        'The documents/data of mentioned above shall be kept for a period of at least seven (7) years which is calculated after the execution of the transactions or the termination of the Business Relationship.',
        'It is provided that the documents/data mentioned in points (1) and (2) above which may be relevant to ongoing investigations shall be kept by WCG Markets (HK) Limited until the Unit confirms that the investigation has been completed and the case has been closed.'
      ]
    },
    {
      title: 'Format of Records',
      content: [
        'The Administration/Back-Office Department shall retain the documents/data mentioned above, other than the original documents or their Certified true copies that are kept in a hard copy form, in other forms, such as electronic form, provided that the Administration/Back-Office Department shall be able to retrieve the relevant documents/data without undue delay and present them at any time, to regulatory bodies, after a relevant request.',
        'In case WCG Markets (HK) Limited will establish a documents/data retention policy, they shall ensure that the said policy shall take into consideration the requirements of the Law. Certification and Language of Documents',
        `${
          !isArabic ? '1. ' : ''
        }The documents/data obtained, shall be in their original form or in a certified true copy form. In the case that the documents/data are certified as true by a different person than WCG Markets (HK) Limited itself or by the third person mentioned in "Reliance on Third Persons for Client Identification and Due Diligence Purposes, the documents/data must be notarized.`,
        `${
          !isArabic ? '2. ' : ''
        }A true translation shall be attached in the case that the documents of point (1) above are in a language other than English.`,
        'Each time WCG Markets (HK) Limited shall proceed with the acceptance of a new Client, the Head Administration/Back-Office Department shall be responsible for ensuring compliance with the provisions of points (1) and (2) above.'
      ]
    },
    {
      title:
        "Employees' Obligations, Education and Training Employees' Obligation",
      content: [
        `${
          !isArabic ? '1. ' : ''
        }WCG Markets (HK) Limited's employees shall be personally liable for failure to report information or suspicion, regarding money laundering or terrorist financing.`,
        `${
          !isArabic ? '2. ' : ''
        }The employees must cooperate and report, without delay, anything that comes to their attention in relation to transactions for which there is a slight suspicion that are related to money laundering or terrorist financing.`,
        `${
          !isArabic ? '3. ' : ''
        }According to the Law, WCG Markets (HK) Limited's employees shall fulfil their legal obligation to report their suspicions regarding Money Laundering and Terrorist Financing, after their compliance with point (2) above.`
      ]
    },
    {
      title: 'Education and Training Policy',
      content: [
        `${
          !isArabic ? '1. ' : ''
        }The AMLCO shall ensure that its employees are fully aware of their legal obligations according to the Law, by introducing a complete employees' education and training program.`,
        `${
          !isArabic ? '2. ' : ''
        }The timing and content of the training provided to the employees of the various departments will be determined according to the needs of the WCG Markets (HK) Limited. The frequency of the training can vary depending on to the amendments of legal and/or regulatory requirements, employees' duties as well as any other changes in the financial system.`,
        `${
          !isArabic ? '3. ' : ''
        }The training program aims at educating the WCG Markets (HK) Limited's employees on the latest developments in the prevention of Money Laundering and Terrorist Financing, including the practical methods.`
      ]
    }
  ];

  return (
    <Wrapper>
      {/* Anti-Money Laundering (AML) Policy */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title="Anti-Money Laundering (AML) Policy" />
        </Box>

        <Box width={'80vw'} textAlign="right">
          <Text>August, 2021</Text>
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <InfoAccordion data={data} />
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'header'
    ]))
  }
});

export default amlPolicy;
