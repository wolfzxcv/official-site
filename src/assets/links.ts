export const links = {
  whatsApp: 'https://api.whatsapp.com/message/2CCAPQTYUPV6P1',
  line: 'https://page.line.me/?accountId=739zqmre&openerPlatform=native&openerKey=talkroom%3Amessage',
  telegram: 'https://t.me/WCGMarketsLtd',
  facebook: 'https://www.facebook.com/WCG-109473260957040',
  instagram: 'https://www.instagram.com/wcg_markets',
  wechat: 'http://weixin.qq.com/r/eRIzKz3E0mCtrXlI90dr',
  // MT4 Google play link
  mt4Android:
    'https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=en&referrer=ref_id%3d5189084203383832573%26server%3dWenChuanGlobalLtd-Demo%252cWenChuanGlobalLtd-Live',
  // MT4 Apple store link
  mt4IOS: 'https://apps.apple.com/us/app/metatrader-4/id496212596',
  // MT4 Windows version
  mt4App:
    process.env.NEXT_PUBLIC_MT4_APP ||
    'https://download.mql5.com/cdn/web/17749/mt4/wenchuangloballtd4setup.exe',
  // MT4 Android version-APK
  mt4Apk:
    process.env.NEXT_PUBLIC_MT4_APK ||
    'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/metatrader4.apk?utm_source=www.metatrader4.com&utm_campaign=install.metaquotes',

  // 代理中心
  ibCenter:
    process.env.NEXT_PUBLIC_IB_CENTER || 'https://my.wcgmarkets-global.com',
  // 用戶中心註冊
  register:
    process.env.NEXT_PUBLIC_IB_CENTER ||
    'https://my.wcgmarkets-global.com/register',
  // 用戶中心
  userCenter:
    process.env.NEXT_PUBLIC_USERS_CENTER ||
    'https://my.wcgmarkets-global.com/login',
  // 用戶中心(中文)
  userCenterZH:
    process.env.NEXT_PUBLIC_USERS_CENTER_ZH ||
    'https://my.wcgmarkets-global.com/zh/login',
  // 聯絡信箱
  email: 'cs@wcgmarkets.com',
  // 聯絡電話
  tel: '4001 203 612',
  tel2: '4008 428 912'
};
