export interface IProduct {
  category:
    | 'mainForex'
    | 'secondaryForex'
    | 'preciousMetals'
    | 'crudeOil'
    | 'index'
    | 'uSShareCFD'
    | 'cryptocurrencies';
  detail: IDetail[];
}

export type IDetailKey = keyof IDetail;

export interface IDetail {
  product: string;
  name: string;
  lotRange: string;
  contractUnit: string;
  standardPoint: string;
  leverage?: string;
  basicMargin?: string;
  marginCloseout: string;
  openingTime: string;
  closingTime: string;
}

export const productsData: IProduct[] = [
  {
    category: 'mainForex',
    detail: [
      {
        product: 'EURUSD',
        name: '*EURUSD',
        lotRange: '0.01/20',
        contractUnit: '100,000*EUR',
        standardPoint: '10*USD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'USDJPY',
        name: '*USDJPY',
        lotRange: '0.01/20',
        contractUnit: '100,000*USD',
        standardPoint: '1000*JPY',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'GBPUSD',
        name: '*GBPUSD',
        lotRange: '0.01/20',
        contractUnit: '100,000*GBP',
        standardPoint: '10*USD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'USDCHF',
        name: '*USDCHF',
        lotRange: '0.01/20',
        contractUnit: '100,000*USD',
        standardPoint: '10*CHF',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'AUDUSD',
        name: '*AUDUSD',
        lotRange: '0.01/20',
        contractUnit: '100,000*AUD',
        standardPoint: '10*USD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'NZDUSD',
        name: '*NZDUSD',
        lotRange: '0.01/20',
        contractUnit: '100,000*NZD',
        standardPoint: '10*USD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'USDCAD',
        name: '*USDCAD',
        lotRange: '0.01/20',
        contractUnit: '100,000*USD',
        standardPoint: '10*CAD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      }
    ]
  },
  {
    category: 'secondaryForex',
    detail: [
      {
        product: 'AUDCAD',
        name: '*AUDCAD',
        lotRange: '0.01/20',
        contractUnit: '100,000*AUD',
        standardPoint: '10*CAD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'AUDCHF',
        name: '*AUDCHF',
        lotRange: '0.01/20',
        contractUnit: '100,000*AUD',
        standardPoint: '10*CHF',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'AUDJPY',
        name: '*AUDJPY',
        lotRange: '0.01/20',
        contractUnit: '100,000*AUD',
        standardPoint: '1000*JPY',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'AUDNZD',
        name: '*AUDNZD',
        lotRange: '0.01/20',
        contractUnit: '100,000*AUD',
        standardPoint: '10*NZD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'CADCHF',
        name: '*CADCHF',
        lotRange: '0.01/20',
        contractUnit: '100,000*CAD',
        standardPoint: '10*CHF',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'CADJPY',
        name: '*CADJPY',
        lotRange: '0.01/20',
        contractUnit: '100,000*CAD',
        standardPoint: '1000*JPY',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'CHFJPY',
        name: '*CHFJPY',
        lotRange: '0.01/20',
        contractUnit: '100,000*CHF',
        standardPoint: '1000*JPY',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'EURAUD',
        name: '*EURAUD',
        lotRange: '0.01/20',
        contractUnit: '100,000*EUR',
        standardPoint: '10*AUD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'EURCAD',
        name: '*EURCAD',
        lotRange: '0.01/20',
        contractUnit: '100,000*EUR',
        standardPoint: '10*CAD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'EURCHF',
        name: '*EURCHF',
        lotRange: '0.01/20',
        contractUnit: '100,000*EUR',
        standardPoint: '10*CHF',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'EURGBP',
        name: '*EURGBP',
        lotRange: '0.01/20',
        contractUnit: '100,000*EUR',
        standardPoint: '10*GBP',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'EURJPY',
        name: '*EURJPY',
        lotRange: '0.01/20',
        contractUnit: '100,000*EUR',
        standardPoint: '1000*JPY',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'EURNZD',
        name: '*EURNZD',
        lotRange: '0.01/20',
        contractUnit: '100,000*EUR',
        standardPoint: '10*NZD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'GBPAUD',
        name: '*GBPAUD',
        lotRange: '0.01/20',
        contractUnit: '100,000*GBP',
        standardPoint: '10*AUD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'GBPCAD',
        name: '*GBPCAD',
        lotRange: '0.01/20',
        contractUnit: '100,000*GBP',
        standardPoint: '10*CAD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'GBPCHF',
        name: '*GBPCHF',
        lotRange: '0.01/20',
        contractUnit: '100,000*GBP',
        standardPoint: '10*CHF',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'GBPJPY',
        name: '*GBPJPY',
        lotRange: '0.01/20',
        contractUnit: '100,000*GBP',
        standardPoint: '1000*JPY',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'GBPNZD',
        name: '*GBPNZD',
        lotRange: '0.01/20',
        contractUnit: '100,000*GBP',
        standardPoint: '10*NZD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'NZDCAD',
        name: '*NZDCAD',
        lotRange: '0.01/20',
        contractUnit: '100,000*NZD',
        standardPoint: '10*CAD',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'NZDCHF',
        name: '*NZDCHF',
        lotRange: '0.01/20',
        contractUnit: '100,000*NZD',
        standardPoint: '10*CHF',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      },
      {
        product: 'NZDJPY',
        name: '*NZDJPY',
        lotRange: '0.01/20',
        contractUnit: '100,000*NZD',
        standardPoint: '1000*JPY',
        leverage: '1:200',
        marginCloseout: '≤ 30%',
        openingTime: '00:05',
        closingTime: '23:55'
      }
    ]
  },
  {
    category: 'preciousMetals',
    detail: [
      {
        product: 'XAUUSD',
        name: '*XAUUSD',
        lotRange: '0.01/20',
        contractUnit: '100*ounce',
        standardPoint: '10*USD',
        basicMargin: '800*USD',
        marginCloseout: '≤ 30%',
        openingTime: '01:00',
        closingTime: '23:55'
      },
      {
        product: 'XAGUSD',
        name: '*XAGUSD',
        lotRange: '0.01/20',
        contractUnit: '2500*ounce',
        standardPoint: '25*USD',
        basicMargin: '800*USD',
        marginCloseout: '≤ 30%',
        openingTime: '01:00',
        closingTime: '23:55'
      }
    ]
  },
  {
    category: 'crudeOil',
    detail: [
      {
        product: 'USOIL',
        name: '*USOIL',
        lotRange: '0.1/20',
        contractUnit: '1000*barrels',
        standardPoint: '10*USD',
        basicMargin: '1000*USD',
        marginCloseout: '≤ 30%',
        openingTime: '01:00',
        closingTime: '23:55'
      },
      {
        product: 'UKOIL',
        name: '*UKOIL',
        lotRange: '0.1/20',
        contractUnit: '1000*barrels',
        standardPoint: '10*USD',
        basicMargin: '1000*USD',
        marginCloseout: '≤ 30%',
        openingTime: '03:00',
        closingTime: '23:55'
      }
    ]
  },
  {
    category: 'index',
    detail: [
      {
        product: 'A50',
        name: '*A50',
        lotRange: '1/20',
        contractUnit: '10',
        standardPoint: '10*USD',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '04:00',
        closingTime: '23:29'
      },
      {
        product: 'HKG33',
        name: '*HKG33',
        lotRange: '1/20',
        contractUnit: '50',
        standardPoint: '50*HKD',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '04:15',
        closingTime: '21:59'
      },
      {
        product: 'SPX500',
        name: '*SPX500',
        lotRange: '1/20',
        contractUnit: '50',
        standardPoint: '50*USD',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '01:00',
        closingTime: '23:15'
      },
      {
        product: 'US30',
        name: '*US30',
        lotRange: '1/20',
        contractUnit: '10',
        standardPoint: '10*USD',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '01:00',
        closingTime: '23:15'
      },
      {
        product: 'NAS100',
        name: '*NAS100',
        lotRange: '1/20',
        contractUnit: '20',
        standardPoint: '20*USD',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '01:00',
        closingTime: '23:15'
      },
      {
        product: 'UK100',
        name: '*UK100',
        lotRange: '0.01/10',
        contractUnit: '10',
        standardPoint: '10*GBP',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '03:01',
        closingTime: '22:59'
      },
      {
        product: 'JPN225',
        name: '*JPN225',
        lotRange: '0.01/10',
        contractUnit: '10',
        standardPoint: '10*USD',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '01:00',
        closingTime: '23:55'
      },
      {
        product: 'ESP35',
        name: '*ESP35',
        lotRange: '0.01/10',
        contractUnit: '10',
        standardPoint: '10*EUR',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '10:01',
        closingTime: '20:59'
      },
      {
        product: 'AUS200',
        name: '*AUS200',
        lotRange: '0.01/10',
        contractUnit: '20',
        standardPoint: '20*AUD',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '02:05',
        closingTime: '22:59'
      },
      {
        product: 'EU50',
        name: '*EU50',
        lotRange: '0.01/10',
        contractUnit: '30',
        standardPoint: '30*EUR',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '09:01',
        closingTime: '22:59'
      },
      {
        product: 'FRA40',
        name: '*FRA40',
        lotRange: '0.01/10',
        contractUnit: '20',
        standardPoint: '20*EUR',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '09:01',
        closingTime: '22:59'
      },
      {
        product: 'GER30',
        name: '*GER30',
        lotRange: '0.01/10',
        contractUnit: '10',
        standardPoint: '10*EUR',
        leverage: '1:100',
        marginCloseout: '≤ 30%',
        openingTime: '01:00',
        closingTime: '23:15'
      }
    ]
  },
  {
    category: 'uSShareCFD',
    detail: [
      {
        product: 'AAPL#',
        name: 'Apple, Inc.(CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'AIG#',
        name: 'American International Group, Inc. (CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'AMZN#',
        name: 'Amazon.com, Inc.(CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'BABA#',
        name: 'Alibaba Group Holding Limited(CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'FB#',
        name: 'Facebook, Inc.(CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'GOOG#',
        name: 'Google-Alphabet Inc Class C (CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'BIDU#',
        name: 'Baidu Inc (CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'TSLA#',
        name: 'Tesla Motors, Inc.(CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'NFLX#',
        name: 'Netflix, Inc. (CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'JD#',
        name: 'JD.com, Inc. (CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      },
      {
        product: 'NTES#',
        name: 'NetEase, Inc. (CFD)',
        lotRange: '10/500',
        contractUnit: '1*share',
        standardPoint: '0.1 USD',
        leverage: '1:20',
        marginCloseout: '≤ 30%',
        openingTime: '16:31',
        closingTime: '22:59'
      }
    ]
  },
  {
    category: 'cryptocurrencies',
    detail: [
      {
        product: 'BTCUSD',
        name: '*BTCUSD',
        lotRange: '0.1/10',
        contractUnit: '1 BTC',
        standardPoint: '1*USD',
        leverage: '1:5',
        marginCloseout: '≤ 30%',
        openingTime: '00:00',
        closingTime: '23:55'
      },
      {
        product: 'ETHUSD',
        name: '*ETHUSD',
        lotRange: '1/20',
        contractUnit: '1 ETH',
        standardPoint: '1*USD',
        leverage: '1:5',
        marginCloseout: '≤ 30%',
        openingTime: '00:00',
        closingTime: '23:55'
      },
      {
        product: 'LTCUSD',
        name: '*LTCUSD',
        lotRange: '1/50',
        contractUnit: '1 LTC',
        standardPoint: '1*USD',
        leverage: '1:5',
        marginCloseout: '≤ 30%',
        openingTime: '00:00',
        closingTime: '23:55'
      }
    ]
  }
];
