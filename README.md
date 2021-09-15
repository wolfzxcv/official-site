# WCG 官網

- [正式環境](https://glb.012wenchuan.com/)
- [測試環境](https://wcg.vercel.app/) (暫時的)

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

## 開發相關

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
6. ==因為加密貨幣近期較為敏感,master 分支,導覽列不可出現"加密貨幣"==
7. 開發完的頁面,才可出現在 master 分支的導覽列連結上
