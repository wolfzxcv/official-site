---
title: WCG
tags: WCG
---

# WCG 官網

- [正式環境](https://glb.012wenchuan.com/)
- [測試環境](https://wcg.vercel.app/) (暫時的)
- [參考網站](https://www.wcglb.com/home/about/exchange.html) (電腦版)
- [參考網站](https://www.wcglb.com/mobile) (手機版)

## 運行方式

1. 把專案抓下來
2. `npm i`
3. `npm run dev`
4. 預設會運行在 ==[http://localhost:3000](http://localhost:3000)==

## 佈署方式

1. 使用 docker: 根目錄下已有 Dockerfile
2. 使用 node: 詳細運行方式寫在 Dockerfile 裡面

## 導覽列頁面設定

導覽列的所有連結,是在==menuList.ts==設定
![](https://i.imgur.com/dPHRK0z.jpg)

每個連結包含名稱,及對應的連結, =={ i18n: '名稱', href: '對應的連結' }==

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

:::info
只要從==menuList.ts==更改設定,就能改變導覽列,不需要修改導覽列頁面的程式碼
:::

## 多國語言設定

![](https://i.imgur.com/cqE1B2n.jpg)

### 設定顯示語言有哪些選項

需要動到的檔案有兩個: ==next-i18next.config.js==以及==locales.ts==

## 開發相關

### 開發工具

- [Next.js](https://nextjs.org/)
- TypeScript
- [Chakra UI](https://chakra-ui.com/)
- [next-i18next](https://github.com/isaachinman/next-i18next)
- [commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)

:::info
此專案使用[commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
請做全域安裝 `npm install commitizen -g`
每次 commit,請在 stage 之後,下指令`git cz`
:::

### 開發注意事項

1. 中文因為語句較短,所以 CSS 通常需要設定跟其他語言不同的 minH
2. 其他語言若是向左靠齊的部分;阿拉伯文需做成"向右靠齊",若是向中靠齊則不在此限(text-align:'center')
3. 中文以外的語言,不該出現全形符號
4. 此網站 RWD 的標準為,螢幕拉窄或拉寬,切換不同語言,都不會跑版或爆版
5. 需支援市面上主流瀏覽器(Chrome.Edge.Firefox.Safari)及作業系統(電腦 mac/windows,手機 android/ios)
