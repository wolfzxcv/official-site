export interface ILinkSource {
  i18n: string;
  src: string;
}

export interface IMenuItem {
  menu: ILinkSource;
  subMenu?: ILinkSource[];
}

export const menuList = [
  {
    menu: { i18n: 'home', src: '/' }
  },
  {
    menu: { i18n: 'about', src: '/about' },
    subMenu: [
      { i18n: 'companyNews', src: '/about/companyNews' },
      {
        i18n: 'corporateResponsibility',
        src: '/about/corporateResponsibility'
      },
      { i18n: 'questions', src: '/about/questions' },
      { i18n: 'announcements', src: '/about/announcements' },
      { i18n: 'contactUs', src: '/about/contactUs' }
    ]
  },
  {
    menu: { i18n: 'products', src: '/products' },
    subMenu: [
      { i18n: 'forex', src: '/products/forex' },
      { i18n: 'preciousMetals', src: '/products/preciousMetals' },
      { i18n: 'crudeOil', src: '/products/crudeOil' },
      { i18n: 'index', src: '/products/indexPage' },
      { i18n: 'uSShareCFD', src: '/products/uSShareCFD' },
      { i18n: 'cryptocurrencies', src: '/products/cryptocurrencies' }
    ]
  },
  {
    menu: { i18n: 'platform', src: '/platform' },
    subMenu: [
      { i18n: 'MT4Overview', src: '/platform/MT4Overview' },
      { i18n: 'MT4PCDownload', src: '/platform/MT4PCDownload' },
      { i18n: 'MT4APPDownload', src: '/platform/MT4APPDownload' },
      { i18n: 'MAMSystem', src: '/platform/MAMSystem' }
    ]
  },
  {
    menu: { i18n: 'notice', src: '/notice' },
    subMenu: [
      { i18n: 'abnormalTrade', src: '/about/abnormalTrade' },
      { i18n: 'tradeDetails', src: '/about/tradeDetails' }
    ]
  },
  {
    menu: { i18n: 'learnTrade', src: '/learnTrade' },
    subMenu: [
      { i18n: 'basicTrading', src: '/about/basicTrading' },
      { i18n: 'intermediateTrading', src: '/about/intermediateTrading' },
      { i18n: 'advancedTrading', src: '/about/advancedTrading' }
    ]
  },
  {
    menu: { i18n: 'marketNews', src: '/marketNews' },
    subMenu: [
      { i18n: 'financialCalendar', src: '/about/financialCalendar' },
      { i18n: 'financialNews', src: '/about/financialNews' },
      { i18n: 'marketAnalysis', src: '/about/marketAnalysis' }
    ]
  },
  {
    menu: { i18n: 'partner', src: '/partner' },
    subMenu: [
      { i18n: 'fundManager', src: '/about/fundManager' },
      { i18n: 'iBBroker', src: '/about/iBBroker' },
      { i18n: 'regionalRepresentative', src: '/about/regionalRepresentative' },
      { i18n: 'whiteLabelCooperation', src: '/about/whiteLabelCooperation' }
    ]
  }
];
