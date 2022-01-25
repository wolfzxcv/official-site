# WCG 官網

- [正式環境](https://glb.012wenchuan.com/)
- [測試環境](http://newwcg.coltech.hk/)

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
  - src\components\Product\productsData.ts
- 導覽列
  - src\components\Header\menuList.ts
- 多國語言
  - public\assets\images (國旗的圖片放在這裡)
  - src\i18n\locales.ts (編輯下拉選單的語言選項)
  - next-i18next.config.js (編輯 router 網址對應的語言有哪些,預設語言是什麼)
  - src\i18n\localests (編寫多國語檔案)
  - src\i18n\generateLocales.js (執行這個檔案,即可將 src\i18n\localests 內編輯的所有檔案,自動產出 src\i18n\locales 內的 json 檔案)

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

### API 文件

- API 路徑設定,在`.env`這支檔案
  ![](https://i.imgur.com/gQNs8lG.jpg)

- 語言代號,[依照 ISO 碼命名](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes),**所有 API 皆須在 URL 上帶語系**參數,**lang=(要帶的語系)**
  cn = 簡體中文
  zh = 繁體中文
  en = 英語
  vi = 越南語
  ms = 馬來語
  id = 印尼語
  ar = 阿拉伯語

- 路徑為/api/index/底下的所有 API 均需在 URL 帶上語系參數,此為 index 這個控制器寫好的規則

- 因應"後台"增加日期選擇器, 前台 API 日期顯示規則更新.

  - ![](https://i.imgur.com/WFZei2D.jpg)
  - 如果 API 有回傳日期選擇器時間,則優先顯示
  - 若無,則回傳文章插入時間
  - time = 文章插入時間, showTime = 日期選擇器時間

- 1 市場資訊 (GET)
  https://www.wc012.com/api/index/index?lang=cn
  quote = 市場分析
  focus = 財經新聞

- 2 企業動向 (GET) (暫時沒用到了)
  https://www.wc012.com/api/index/company?lang=cn

- 3 企業責任 (GET)
  https://www.wc012.com/api/index/responsibility?lang=cn

- 4 平台公告 (GET)
  https://www.wc012.com/api/index/notice?lang=cn

- 5 "聯系我們" 表單提交 (POST)
  https://www.wc012.com/api/wcg/contact

  - 資料庫欄位截圖
    ![](https://i.imgur.com/T8GnSrP.png)
  - 表單資訊的參數們,用 json 帶在 request body
  - API 送出成功,前端判斷標準
    - response 裡面的 status 為 200
    - HTTP status 為 200
  - 傳送範例
    - 錯誤範例
      ![](https://i.imgur.com/7eJumId.jpg)
    - 成功範例
      ![](https://i.imgur.com/MYRfN7p.jpg)
      ![](https://i.imgur.com/fHduG2c.jpg)

- 6 偵測地區 API (GET)
  https://www.wc012.com/api/wcg/checkIp
  - response
  ```javascript=
  {
    ip: '201.201.2.301',
    isShow: true,  // 如果是香港IP, 回傳true, 如果不是, 回傳false. 若IP檢測失敗,也會回傳true
    message: 'success'  // IP 檢測成功success, 檢測失敗fail
  }
  ```

### 開發工具

請先安裝 **[Visual Studio Code](https://code.visualstudio.com/download)**
請先安裝 **[Node](https://nodejs.org/en/download/)**

- [Next.js](https://nextjs.org/)
- TypeScript
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
7. 常見問題頁面,"如何在 WCG 開戶",及現有 CRM 頁面連結,之後需要再改過

### 活動頁面

- 路徑命名為 activity/活動名稱

  - 新增檔案在 src\pages\activity 底下
  - 新增圖片在 public\assets\images 底下, 圖片命名方式為 activity*活動名稱*圖片名稱
  - 用以上方式命名, 將來若想刪除已經過時的活動相關頁面及檔案, 維護會較容易

- 目前已有活動頁面們(依照開發順序陳列)
  - [index](http://newwcg.012wenchuan.com/activity)
  - [WCGZG](http://newwcg.012wenchuan.com/activity/WCGZG)
  - [JYSL](http://newwcg.012wenchuan.com/activity/JYSL)
  - [WCGI](http://newwcg.012wenchuan.com/activity/WCGI)
  - [WCGE (Business card)](http://newwcg.012wenchuan.com/activity/WCGE)

## 情報

### 目前已知域名

- 國際站

  - https://glb.012wenchuan.com/
  - https://www.wcgmarkets.com/
  - http://wcglb.com

- 國內站

  - https://www.wc012.com/
  - http://wcgold.hk

- 國際站/國內站, 共用後台(裡面有分國內和國際內容添加)

  - http://admin.wc012.com/admin

- 支付回調網址
  - https://www.wc012.com/home/Pay/RetVite
