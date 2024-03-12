# WCG Markets 官網

- [正式環境](https://www.wcgmarkets-global.com/)
- 測試環境 server 已停用

## 運行方式

1. 請先安裝 **[Node](https://nodejs.org/en/download/)**
2. 把專案抓下來
3. `npm i`
4. `npm run dev`
5. 預設會運行在 **[http://localhost:3000](http://localhost:3000)**

## 佈署方式

1. 使用 docker: 根目錄下已有 Dockerfile
2. 使用 node: 詳細運行方式寫在 Dockerfile 裡面

## 設定懶人包

設定以下項目,各自對應的設定檔案(或檔案位置)

- 交易產品
  - src\assets\productsData.ts
- 導覽列
  - src\assets\menuList.ts
- 整個站使用到的連結們
  - src\assets\links.ts
- 多國語言
  - public\assets\images (國旗的圖片放在這裡)
  - src\i18n\config.ts (編輯下拉選單的語言選項)
  - next-i18next.config.js (編輯 router 網址對應的語言有哪些,預設語言是什麼)
  - src\i18n\localests (編寫多國語檔案)
  - src\i18n\generateLocales.js (執行這個檔案,即可將 src\i18n\localests 內編輯的所有 ts 檔案,自動產出 src\i18n\locales 內的 json 檔案)

## 交易產品編輯 (交易產品 > 查看交易產品 )

手機版/電腦版,交易產品都會使用這支檔案)

- 在命名上如果前面加星號,像是截圖內看到的 *USDJPY / *USD / \*JPY,都可以在 i18n 檔案設定,畫面上,程式碼會做 i18n 的顯示轉換
- src\components\Product\productsData.ts
  ![](https://i.imgur.com/EiQc4vE.jpg)

## 導覽列設定

導覽列的所有連結,是在**menuList.ts**設定 (手機版/電腦版,導覽列都會使用這支檔案)
![](https://i.imgur.com/dPHRK0z.jpg)

每個連結,包含"名稱"及"對應的連結", **{ i18n: '名稱', href: '對應的連結' }**

```javascript=
  {
    i18n: 'about', =>關於WCG
    children: [
      { i18n: 'about', href: '/about' }, =>關於WCG
      { i18n: 'companyNews', href: '/about/companyNews' }, =>企业动向
      {
        i18n: 'corporateResponsibility',
        href: '/about/corporateResponsibility' =>企业责任
      },
      { i18n: 'questions', href: '/about/questions' }, =>常见问题
      { i18n: 'announcements', href: '/about/announcements' }, =>平台公告
      { i18n: 'contactUs', href: '/about/contactUs' } =>联系我们
    ]
  }
```

我們嘗試把不要的連結註解掉(如上方編輯器的截圖),存檔後,重新運行,即可看到以下結果
![](https://i.imgur.com/WKcIboU.jpg)

- 只要從**menuList.ts**更改設定,就能改變導覽列,不需要修改導覽列頁裡面的程式碼,不會影響樣式

## 多國語言設定

![](https://i.imgur.com/cqE1B2n.jpg)

### 設定顯示語言的選項們

需要動到的檔案有兩個: **next-i18next.config.js**以及**locales.ts**

- [請依照 ISO 碼命名](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

## 開發相關

### 開發工具

請先安裝 **[Visual Studio Code](https://code.visualstudio.com/download)**
請先安裝 **[Node](https://nodejs.org/en/download/)**

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [next-i18next](https://github.com/isaachinman/next-i18next)
- [commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)

```diff
- 此專案使用 commitizen
- 請做全域安裝 `npm install commitizen -g`
- 每次commit,請在stage之後,下指令 `git cz`,然後照指示輸入
- 要佈署之前,下指令`npm run release`,即會自動計算,並更新package.json裡面的version
```

這樣佈署後,可以在 head 標籤裡面,看到版本.
![](https://i.imgur.com/m5vho4w.jpg)

### 開發注意事項

1. 中文因為語句較短,所以 CSS 通常需要設定跟其他語言不同的 minH
2. 其他語言若是向左靠齊的部分;阿拉伯文需做成"向右靠齊",若是向中靠齊則不在此限(text-align:'center')
3. 中文以外的語言,不該出現全形符號
4. 此網站 RWD 的標準為,螢幕拉窄或拉寬,切換不同語言,都不會跑版或爆版
5. 需支援市面上主流瀏覽器(Chrome.Edge.Firefox.Safari)及作業系統(電腦 mac/windows,手機 android/ios)
6. 因為加密貨幣近期較為敏感,master 分支,導覽列不可出現"加密貨幣"

### 環境變數

- NEXT_PUBLIC_API_URL
  - 所有 API
- NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
  - Google 分析的 GTM 標籤, 已在此標籤下編輯, 同時控制 Google Analytics 以及 Visitor Analytics
- NEXT_PUBLIC_REGISTER_REAL
  - 開立真實帳戶
- NEXT_PUBLIC_REGISTER_DEMO
  - 開立模擬帳戶
- NEXT_PUBLIC_USERS_CENTER
  - 客戶中心
- NEXT_PUBLIC_MT4_APP
  - MT4 電腦版下載
- NEXT_PUBLIC_MT4_APK1
  - MT4 APK下載1
- NEXT_PUBLIC_MT4_APK2
  - MT4 APK下載2
- NEXT_PUBLIC_MT4_WEB
  - MT4 網頁版

### 活動頁面

- 路徑命名為 activity/活動名稱

  - 新增檔案在 src\pages\activity 底下
  - 新增圖片在 public\assets\images 底下, 圖片命名方式為 activity*活動名稱*圖片名稱
  - 用以上方式命名, 將來若想刪除已經過時的活動相關頁面及檔案, 維護會較容易

- 目前活動頁面們(依照開發順序陳列)

  - [index](https://www.wcgmarkets-global.com/activity)
  - [WCGZG](https://www.wcgmarkets-global.com/activity/WCGZG)
  - [JYSL](https://www.wcgmarkets-global.com/activity/JYSL)
  - [WCGI](https://www.wcgmarkets-global.com/activity/WCGI)
  - [WCGE (Business card)](https://www.wcgmarkets-global.com/activity/WCGE)
  - [WCG51](https://www.wcgmarkets-global.com/activity/WCG51)
  - [WCG15](https://www.wcgmarkets-global.com/activity/WCG15)
  - [WCG51](https://www.wcgmarkets-global.com/activity/WCGQYHK)
  - [WCG15](https://www.wcgmarkets-global.com/activity/WCGDLJS)
  - [WCGQYHK](https://www.wcgmarkets-global.com/activity/WCGQYHK)
  - [WCGBY](https://www.wcgmarkets-global.com/activity/WCGBY)
  - [WCGDYN](https://www.wcgmarkets-global.com/activity/WCGDYN)
  - [WCGZQJ](https://www.wcgmarkets-global.com/activity/WCGZQJ)
  - [WCGCZ](https://www.wcgmarkets-global.com/activity/WCGCZ)
  - [WCGSSS](https://www.wcgmarkets-global.com/activity/WCGSSS)
  - [WCGYF](https://www.wcgmarkets-global.com/activity/WCGYF)
  - [WCGKJ](https://www.wcgmarkets-global.com/activity/WCGKJ)
  - [WCGYHS](https://www.wcgmarkets-global.com/activity/WCGYHS)
  - [WCGZKZJ](https://www.wcgmarkets-global.com/activity/WCGZKZJ)
  - [WCGDRJ](https://www.wcgmarkets-global.com/activity/WCGDRJ)
  - [WCGJYK](https://www.wcgmarkets-global.com/activity/WCGJYK)
  - [WCGEYS](https://www.wcgmarkets-global.com/activity/WCGEYS)
  - [WCGNSJ](https://www.wcgmarkets-global.com/activity/WCGNSJ)
  - [WCGCNHK](https://www.wcgmarkets-global.com/activity/WCGCNHK)
  - [WCGJYZ](https://www.wcgmarkets-global.com/activity/WCGJYZ)
  - [WCGDSH](https://www.wcgmarkets-global.com/activity/WCGDSH)
  - [WCGZQC](https://www.wcgmarkets-global.com/activity/WCGZQC)
  - [WCGIPH](https://www.wcgmarkets-global.com/activity/WCGIPH)
  - [WCGXJJ](https://www.wcgmarkets-global.com/activity/WCGXJJ)
  - [WCGKN](https://www.wcgmarkets-global.com/activity/WCGKN)
  - [WCGLNX](https://www.wcgmarkets-global.com/activity/WCGLNX)
  - [WCGYJJ](https://www.wcgmarkets-global.com/activity/WCGYJJ)
  - [WCGSSJ](https://www.wcgmarkets-global.com/activity/WCGSSJ)
  - [WCGSSJ15](https://www.wcgmarkets-global.com/activity/WCGSSJ15)
  - [WCGSSJ40](https://www.wcgmarkets-global.com/activity/WCGSSJ40)

- 馬來語系專門活動, 使用英文

  - [WCGMLHDE](https://www.wcgmarkets-global.com/activity/WCGMLHDE)
  - [EWCGMLN](https://www.wcgmarkets-global.com/activity/EWCGMLN)

- 印尼語系專門活動, 使用印尼語

  - [EWCGYNH](https://www.wcgmarkets-global.com/activity/EWCGYNH)

- 目前廣告投放頁面們(依照開發順序陳列)
  - [WCGTGH](https://www.wcgmarkets-global.com/promotion/WCGTGH)

## 情報

### 國際站域名

- 國際站

  - https://www.wcgmarkets.com/
  - https://www.wcgmarkets-global.com/

- 國際站/金業, 共用後台(裡面有分各站內容添加)

  - https://cms.wcgos.com/

## API 文件

- API 路徑設定,在`.env`這支檔案
  ![](https://i.imgur.com/gQNs8lG.jpg)

### 0.共用 response 格式

```typescript=
type IResponseFormat = {
  status: number;
  message: string;
  code: 1 | 0;
  data?: any;
  error?: any;
};
```

- 語言代號,[依照 ISO 碼命名](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), API 參數 **lang** 為要請求的 **語系**
  cn = 簡體中文
  zh = 繁體中文
  en = 英語

- API 回傳資料 Order of priority
  - onTop === 1
  - showTime(DESC)
  - createTime(DESC)

```typescript=
type DataOutputFormat = {
  id: number;
  title: string;
  content: string;
  url?: string;  // 目前僅有 企業責任 會有這個參數
  onTop?: boolean;  // 目前僅有 平台公告 會有這個參數
  time: string;
};
```

## 1.市場分析

| Item   | Value       |
| ------ | ----------- |
| Method | GET         |
| path   | **/market** |
| param  | lang        |
| table  | g_market    |

## 2.企業責任

| Item   | Value               |
| ------ | ------------------- |
| Method | GET                 |
| path   | **/responsibility** |
| param  | lang                |
| table  | g_responsibility    |

## 3.平台公告

| Item   | Value       |
| ------ | ----------- |
| Method | GET         |
| path   | **/notice** |
| param  | lang        |
| param  | site        |
| table  | \*\_notice  |

## 4.聯繫我們

| Item   | Value        |
| ------ | ------------ |
| Method | POST         |
| path   | **/contact** |
| param  |              |
| table  | g_contact    |

```typescript=
type IContactInput = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  area: string;
  type: string;
  account?: string;
  content?: string;
};
```

- 以上沒打問號的, 代表必填
- 以上資料除了會進到資料庫, 也會使用 nodemailer 寄信到"後端/後台專案"的.env 設定的 CUSTOMER_SERVICE_EMAIL
- 寄信的 server 使用.env 的 EMAIL_ACCOUNT 及 EMAIL_PASSWORD

## 5.WCGTGH 廣告投放

| Item   | Value       |
| ------ | ----------- |
| Method | POST        |
| path   | **/wcgtgh** |
| param  |             |
| table  | g_WCGTGH    |

```typescript=
type IPromotion = {
  name: string;
  email: string;
  mobile: string;
  qq?: string;
};
```

- 以上沒打問號的, 代表必填
- 以上資料除了會進到資料庫, 也會使用 nodemailer 寄信到"後端/後台專案"的.env 設定的 CUSTOMER_SERVICE_EMAIL
- 寄信的 server 使用.env 的 EMAIL_ACCOUNT 及 EMAIL_PASSWORD
