import { Notice } from '../@types/notice';

export const notice: Notice = {
  abnormalTrade: '異常交易',
  whatIsAbnormalTrade: '什麽是異常交易?',
  abnormalTradeMeans:
    '異常交易意旨客戶於極短時間內進行密集式交易，總結行內經驗，短線交易最終對客戶並沒有任何益處，因為客戶須為頻密的交易付出巨大的手續費。同時短線交易亦非正確的投資方法，客戶無法在交易中獲得較大的利潤。另外，亦有不法之徒意圖利用異常交易進行洗黑錢活動，本公司特別關注此等不法活動，任何有機會觸犯“防止洗黑錢”條例的異常交易，本公司是絕對不會容許的！',
  abnormalTradeTakesUp:
    '異常交易會大量占用網路資源，除了會影響交易系統的穩定性及效率，更會妨礙一般客戶的交易。為保障大部分客戶的利益情況下，本公司絕不能接受異常交易行為繼續发生。',
  theDefinitionOfAbnormalTrades: '異常交易的定義',
  whenTheCustomerWithdrawsMoney:
    '當客戶取款時，我們會審核客戶上次取款（首次取款則從開戶開始）至本次取款的所有交易，按照交易量統計，當交易單中有50% 交易量的持倉時間低於5分鐘時，我們就會對此帳戶進行進一步審核，審核時間需要延長3小時。',
  whenThereIs: '當疑似異常交易的交易單中有30%交易量的持倉時間低於5分鐘時。',
  when30OfThe:
    '當疑似異常交易的交易單中有30%交易量屬於5分鐘內建立的對沖鎖倉單。',
  whenClientIsUsing:
    '客戶使用同一帳戶並同時利用多台電腦終端機進行交易行為，意圖以＂密集式交易＂手段令市場造成巨大成交額的誤導資訊。',
  whenCustomersAreTackling:
    '客戶借助協力廠商軟體（即＂外掛軟體＂）利用軟體漏洞進行交易的行為。 （如需使用自動代程式交易，請聯系線上客服人員）',
  aTradeOfUtilizing:
    '利用網路或電腦＂報價延誤＂，＂多次＂故意或＂惡意＂在5分鐘之內＂重倉＂進出，並且在短時間之內賺取交易平台非市場價格的價差的一種交易。',
  whenTheNumber:
    '當疑似異常交易的交易數量跟過往的存在甚大差異，如瞬間由0.1至0.5手轉變為5至10手交易。',
  handlingMethod: '處理方法',
  ifTheAccount:
    '如經本公司調查後，发現帳號在進行異常交易，本公司會馬上凍結該帳號的交易和資金進出再作深入調查。',
  ifTheAccountIs:
    '如確認該帳號在進行異常交易，本公司會把該帳號注銷，並把帳戶的剩余資金发還客戶，任何因異常交易所產生的利潤和傭金不发放。',
  theRightToInterpret:
    '異常交易的解釋權歸WCG所有，如有任何爭議，一切以WCG之決定為最終裁決。',
  tradeDetails: '交易細則',
  sourceOfTradeExecution: '執行來源',
  theQuotesOfOur:
    '我們的報價一般來自全球精選頂級銀行向我們提供的大量最及時的報價，我們相信這種方式將始終為您提供最優可行價格。',
  slippage: '滑點',
  ourCompanyWill:
    '本公司盡量減少滑點的情況，努力做到優勝於行內同業的交易模式，不過有時候投資市場波動劇烈，價格出現瞬間變動實在是非人為可以控制，還請投資者原諒。',
  marketGapAndFluctuations: '跳空與市場波動',
  whenEconomicData:
    '當經濟數據或重要新聞事件发布的時候，價格可能由於市場對新聞、數據作出的反應和調整而跳空。在這樣的情況下，市場狀況可能會非常不穩定，價格可能單方向劇烈變動，且在某些情況下，市場可能在短期內無法提供可用的交易。在週末或節假日後重新開盤的時候也往往會发生市場跳空的情況。止盈和止損單在市場跳空時可能以相距指定價格甚遠的價位來執行，這種偏差可能對交易者有利，也可能對交易者不利。止盈和止損單可能在提交定單或定單設置的價格以外的位置執行。定單可能會分批在不同的價位執行。開盤價可能與前一日收盤價可能有很大的差別。',
  leverageAndMarginPolicy: '槓桿與保證金政策',
  inAnyCase:
    '在任何情況下，交易者都需要有足夠保證金維持開倉頭寸，WCG不提供追加保證金的通知，如週末及假期前，保證金水平不足所需保證金100%時，WCG有權因應市場波動或根據當時的需要，按個別情況將客戶的所有倉位進行鎖倉(對沖)處理。',
  setTheValidityPeriodOfTheOrder: '訂單設置有效期',
  allPendingOrders:
    '所有掛單及止損獲利設置的有效期為1週，在週末休市前，所有未建倉的掛單及未執行的止損或獲利設置將全部取消。如有需要，客戶可在週一開市後重新設置。',
  forcedLiquidationPolicy: '強制平倉條款',
  pleaseNoteThatUnlessWeHaveOtherNotice:
    '請注意，除非另有通知，WCG強平保證金水平為30%。當您的保證金比例低於30%時，系統會自動將您的訂單進行平倉。請客戶時刻留意帳戶內的資金水平，避免不必要的損失。',
  theCalculationMethod: '保證金比例計算方式為*:*凈值*÷*已用預付款*=*保證金比例'
};
