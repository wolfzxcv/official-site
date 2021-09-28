export interface ILinkSource {
  i18n: string;
  href: string;
}

export interface IMenuItem {
  i18n: string;
  href?: string;
  children?: ILinkSource[];
}

export const menuList: IMenuItem[] = [
  {
    i18n: 'home',
    href: '/'
  },
  {
    i18n: 'about',
    children: [
      { i18n: 'companyNews', href: '/about/companyNews' },
      {
        i18n: 'corporateResponsibility',
        href: '/about/corporateResponsibility'
      },
      { i18n: 'questions', href: '/about/questions' },
      { i18n: 'announcements', href: '/about/announcements' },
      { i18n: 'aboutUs', href: '/about' }
      // { i18n: 'contactUs', href: '/about/contactUs' }
    ]
  },
  {
    i18n: 'products',
    children: [
      { i18n: 'viewTradingProducts', href: '/products' },
      { i18n: 'forex', href: '/products/forex' },
      { i18n: 'preciousMetals', href: '/products/preciousMetals' },
      { i18n: 'crudeOil', href: '/products/crudeOil' },
      { i18n: 'index', href: '/products/indexTrading' },
      { i18n: 'uSShareCFD', href: '/products/uSShareCFD' }
      // { i18n: 'cryptocurrencies', href: '/products/cryptocurrencies' }
    ]
  },
  {
    i18n: 'platform',
    children: [
      { i18n: 'MT4Overview', href: '/platform/MT4Overview' },
      { i18n: 'MT4PCDownload', href: '/platform/MT4PCDownload' },
      { i18n: 'MT4APPDownload', href: '/platform/MT4APPDownload' },
      { i18n: 'MAMSystem', href: '/platform/MAMSystem' }
    ]
  },
  {
    i18n: 'notice',
    children: [
      { i18n: 'abnormalTrade', href: '/notice/abnormalTrade' },
      { i18n: 'tradeDetails', href: '/notice/tradeDetails' }
    ]
  },
  {
    i18n: 'learnTrade',
    children: [
      { i18n: 'basicTrading', href: '/learnTrade/basicTrading' },
      { i18n: 'intermediateTrading', href: '/learnTrade/intermediateTrading' },
      { i18n: 'advancedTrading', href: '/learnTrade/advancedTrading' }
    ]
  },
  {
    i18n: 'marketNews',
    children: [
      { i18n: 'financialCalendar', href: '/marketNews/financialCalendar' },
      { i18n: 'financialNews', href: '/marketNews/financialNews' },
      { i18n: 'marketAnalysis', href: '/marketNews/marketAnalysis' }
    ]
  },
  {
    i18n: 'partner',
    children: [
      { i18n: 'fundManager', href: '/partner/fundManager' },
      { i18n: 'introducingBroker', href: '/partner/introducingBroker' },
      {
        i18n: 'regionalRepresentative',
        href: '/partner/regionalRepresentative'
      },
      { i18n: 'whiteLabelCooperation', href: '/partner/whiteLabelCooperation' }
    ]
  }
];
