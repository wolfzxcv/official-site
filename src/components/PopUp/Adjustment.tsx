import { Locales } from '@/i18n/config';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import PopUp from './PopUp';

export const Adjustment = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp
      title="非活躍用客收費調整"
      content={<AdjustmentZh />}
      useBorder={false}
    />
  ) : currentLang === 'cn' ? (
    <PopUp
      title="非活跃用客收费调整"
      content={<AdjustmentCn />}
      useBorder={false}
    />
  ) : (
    <PopUp
      title="Fee Adjustment"
      content={<AdjustmentEn />}
      useBorder={false}
    />
  );
};

const AdjustmentZh: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box>親愛的客戶：</Box>

      <Box textDecor="underline" textAlign="center">
        收 費 調 整
      </Box>

      <Box>感謝 閣下對WCG MARKETS的支持。</Box>
      <Box>
        為確保
        閣下能繼續享用本公司提供的優質交易服務，以及避免對系統與數據資源造成不必的浪費，本公司將於2023年4月1日（生效日期）起向90日或以上沒有進行任何交易及結餘不足的帳戶調整相關收費或對帳戶進行休眠狀態。
      </Box>

      <Flex flexDir="column">
        <Box fontWeight="bold">收費例表</Box>

        <StyledTable>
          <thead>
            <tr>
              <th>帳戶狀態</th>
              <th>處理方法</th>
              <th>注意事項</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                90天以上未使用 <br /> 結餘不足100美元
              </td>
              <td>關閉註銷帳戶</td>
              <td>關閉註銷的帳戶無法恢復，需重新註冊</td>
            </tr>
            <tr>
              <td>
                90天以上未使用 <br /> 結餘超過100美元
              </td>
              <td>每月收取35美元的管理費</td>
              <td>
                進行交易或入金、出金可停止收管理費，但被扣除的餘額無法恢復
              </td>
            </tr>
            <tr>
              <td>
                90天內有使用 <br />
                結餘不足100美元
              </td>
              <td>休眠帳戶並每月收取35美元的管理費</td>
              <td>
                需向客服人員聯繫，重新啟動客戶中心（後台），並存入足夠款項可解除休眠帳戶狀態，但被扣除的餘額無法恢復
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </Flex>

      <Flex flexDir="column">
        <Box>*休眠狀態帳戶沒法登陸客戶中心（後台）和交易系統進行任何操作</Box>
        <Box>
          *以上收費調整將於2023年4月1日（生效日期）直接執行，並不作另行通知。
        </Box>
        <Box>*第一次管理費於2023年5月1日收取</Box>
      </Flex>

      <Box>
        假若 閣下於上述收費調整生效日期後繼續使用或保留 閣下有關之帳戶，
        閣下將被視為接受相關調整。
      </Box>

      <Box>
        倘閣下不同意有關之收費調整，請於2023年4月1日前以書面通知本公司，以作適當安排終止服務。
      </Box>

      <Box>
        如有任何查詢，歡迎與我們
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&accountid=135464"
        >
          線上客戶服務
        </Link>
        人員聯繫。
      </Box>

      <Flex flexDir="column">
        <Box>WCG Group 謹啓</Box>
        <Box>2023年3月10日</Box>
      </Flex>
    </Stack>
  );
};

const AdjustmentCn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '8px', md: '14px' }}>
      <Box>亲爱的客户：</Box>

      <Box textDecor="underline" textAlign="center">
        收 费 调 整
      </Box>

      <Box>感谢 阁下对WCG MARKETS的支持。</Box>
      <Box>
        为确保
        阁下能继续享用本公司提供的优质交易服务，以及避免对系统与数据资源造成不必的浪费，本公司将于2023年4月1日（生效日期）起向90日或以上没有进行任何交易及结余不足的帐户调整相关收费或对帐户进行休眠状态。
      </Box>

      <Flex flexDir="column">
        <Box fontWeight="bold">收费例表</Box>

        <StyledTable>
          <thead>
            <tr>
              <th>帐户状态</th>
              <th>处理方法</th>
              <th>注意事项</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                90天以上未使用 <br /> 结馀不足100美元
              </td>
              <td>关闭註销帐户</td>
              <td>关闭註销的帐户无法恢復，需重新註册</td>
            </tr>
            <tr>
              <td>
                90天以上未使用 <br /> 结馀超过100美元
              </td>
              <td>每月收取35美元的管理费</td>
              <td>
                进行交易或入金、出金可停止收管理费，但被扣除的馀额无法恢復
              </td>
            </tr>
            <tr>
              <td>
                90天内有使用 <br />
                结馀不足100美元
              </td>
              <td>休眠帐户并每月收取35美元的管理费</td>
              <td>
                需向客服人员联繫，重新启动客户中心（后台），并存入足够款项可解除休眠帐户状态，但被扣除的馀额无法恢復
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </Flex>
      <Flex flexDir="column">
        <Box>*休眠状态帐户没法登陆客户中心（后台）和交易系统进行任何操作</Box>
        <Box>
          *以上收费调整将于2023年4月1日（生效日期）直接执行，并不作另行通知。
        </Box>
        <Box>*第一次管理费于2023年5月1日收取</Box>
      </Flex>

      <Box>
        假若 阁下于上述收费调整生效日期后继续使用或保留 阁下有关之帐户，
        阁下将被视为接受相关调整。
      </Box>

      <Box>
        倘阁下不同意有关之收费调整，请于2023年4月1日前以书面通知本公司，以作适当安排终止服务。
      </Box>

      <Box>
        如有任何查询，欢迎与我们
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&accountid=135464"
        >
          线上客户服务
        </Link>
        人员联繫。
      </Box>

      <Flex flexDir="column">
        <Box>WCG Group 谨啓</Box>
        <Box>2023年3月10日</Box>
      </Flex>
    </Stack>
  );
};

const AdjustmentEn: React.FC<{}> = () => {
  return (
    <Stack spacing={2} p={5} fontSize={{ base: '6px', md: '12px' }}>
      <Box>Dear Customer,</Box>

      <Box textDecor="underline" textAlign="center">
        Fee Adjustment
      </Box>

      <Box>Thank you for your support of WCG MARKETS.</Box>
      <Box>
        To ensure that you can continue to enjoy the high-quality trading
        services provided by our company and to avoid unnecessary waste of
        system and data resources, our company will adjust relevant fees or put
        accounts into dormant status for accounts that have not conducted any
        transactions for 90 days or more and have insufficient balance from
        April 1, 2023 (effective date).
      </Box>

      <Flex flexDir="column">
        <Box fontWeight="bold" textAlign="center">
          Fee Schedule
        </Box>

        <StyledTable>
          <thead>
            <tr>
              <th>Account status</th>
              <th>Processing method</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                No usage for 90 days or more,
                <br /> balance less than 100 USD
              </td>
              <td>Close and cancel account</td>
              <td>
                Closed and cancelled accounts cannot be restored and must be
                re-registered.
              </td>
            </tr>
            <tr>
              <td>
                No usage for 90 days or more,
                <br /> balance over 100 USD
              </td>
              <td>Charge a monthly management fee of 35 USD</td>
              <td>
                Any Trading or deposit/withdrawal can stop the management fee,
                but the deducted balance cannot be restored.
              </td>
            </tr>
            <tr>
              <td>
                Used within 90 days, <br />
                balance less than 100 USD
              </td>
              <td>
                Dormant account and charge a monthly management fee of 35 USD
              </td>
              <td>
                eed Contact customer service to reactivate the client center
                (backstage) and deposit sufficient funds to lift the dormant
                account status, but the deducted balance cannot be restored.
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </Flex>
      <Flex flexDir="column">
        <Box>
          *Dormant accounts cannot log in to the customer center (backend) or
          trading system to perform any operations.
        </Box>
        <Box>
          *The above fee adjustments will be implemented directly on April 1,
          2023 (effective date) without further notice.
        </Box>
        <Box>*The first management fee will be collected on May 1, 2023</Box>
      </Flex>

      <Box>
        If you continue to use or retain your account after the effective date
        of the above fee adjustment, you will be deemed to have accepted the
        relevant adjustment.
      </Box>

      <Box>
        If you do not agree with the relevant fee adjustment, please notify our
        company in writing before April 1, 2023 to make appropriate arrangements
        for termination of service.
      </Box>

      <Box>
        If you have any inquiries, please feel free to contact our
        <Link
          color="blue.500"
          isExternal
          href="https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&accountid=135464"
        >
          {' '}
          online customer service staff
        </Link>
        .
      </Box>

      <Flex flexDir="column">
        <Box>Yours sincerely,</Box>
        <Box>WCG Group March 16th ,2023</Box>
      </Flex>
    </Stack>
  );
};

const StyledTable = styled.table`
  width: 100%;

  border-collapse: collapse;
  td,
  th {
    border: 1px solid black;
    text-align: start;
  }

  tbody tr {
    & > td:not(:last-child) {
      width: 25%;
    }
  }
`;
