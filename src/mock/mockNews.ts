export interface INews {
  id: number;
  date: string;
  title: string;
  author: string;
  summary?: string;
  article: string;
}

const mockNews: INews[] = [
  {
    id: 1,
    date: '2020-07-01',
    title: '黃金市場最大央行買家竟是泰國 5月買入46.7噸黃金AAA',
    author: 'WCG分析師：AAA',
    summary: '',
    article:
      '<p>週一（7月5日），國際金價繼續走強，緊縮近一週錄得的6月18日以來高位1795.17美元不遠，因美元指數衝高回落。但在美國發布喜憂參半的6月入學數據之後，對焦點早加息的關心是否還好，則焦點則到了九月的政策會議上。</p><p><br/></p><p>星巴克14:44，黃金上漲0.15%至1789.80美元/英鎊；COMEX金主力合約上升0.38%1790.0美元/盎司；美元指數運行在平盤92.245附近。</p><p><br/></p><p><br/></p><p>SPI Asset Management 管理合夥人Stephen Innes 說：“ SPI Asset Management 管理合夥人Stephen Innes 說：“ SPI Asset Management 管理合夥人Stephen Innes 說：“最近的活躍數據發出的信號喜憂參半數據表現出強，影響影響的前景。然而，增長的經濟是相當強勁的美國，也同樣具有強勁的動力。” .我們必須非常火，因為市場還在打著這顆球的鷹牌，將限制金價球派。”</p><p><br/></p><p>上（7 月 7 日）的數據顯示，在 6 月份招聘了 10 個月以來，已有 10 個月的時間，但企業走高，美國的訪問率保持不變，時薪增長速度不變。同時，美國經濟市場的反彈正在崛起，因為經濟和行動行動的關注市場在對經濟復甦的需求中樂看到經濟復甦的更多事件。</p><p><br/></p><p>道明證券(TD證券)全球市場策略主管Priya Misra說：“我認為市場在糾結，”“數據好升星日，但如果數據成功退出（通常政策），經濟就會觀看。”</p><p><br/></p><p>開始開始討論，隨著疫情緩解，應以多快的速度何時減少對經濟的支持。最後確定將在今年開始，何時開始減少16個月前啟動的每月1200億美元的公債購買規模。</p><p><br/></p><p>最新的最新會議紀要在本週三（7 月 7 日）宣布，就決策者對可能的政策和政策的看法提供更多的智慧。12 月舉行，在市場恢復到疫情前實現“進一步推進” “實質進展”前不會減少經濟支持，此後出現的企業增加了約330萬個就業崗位。</p><p><br/></p><p>布朗諮詢固定產品主管Tom Graff 說：“我的煙霧加息喜歡在2023年加息屏幕這樣的計劃更早，也更早解決，擔心這個問題的情況，考慮這種暫時性的階段的”結束可能更接近了。”</p><p><br/></p><p>美國總統拜登週日發表了激動人心的慶祝活動245週年，他讓美國人民儘自己的努力讓新冠疫情徹底崩潰。疫情重啟60多萬萬人死亡，儘管現在他們已經恢復了美國的罷工。</p><p><br/></p><p>但由於人的抵制，目前的疫苗還有約67%，但有些許上週日（7月4日），美國仍然沒有達到拜登的目標，即70%的美國更容易接種一劑。這讓衛生專家為擔心，因為傳染性誘因的三角洲變異可能讓感染人數眾多。</p><p><br/></p>'
  },
  {
    id: 2,
    date: '2020-07-02',
    title: '國際金價原料維持升勢，但多頭須觀看觀看觀看點',
    author: 'WCG分析師：BBB',
    summary: '國際金價原料維持升勢，但多頭須觀看觀看觀看點',
    article:
      '<p>指揮中心說明，今日新增12例死亡個案，為8例男性、4例女性，年齡介於40多歲至80多歲，發病日介於5月12日至7月4日，確診日介於5月16日至7月7日，死亡日介於6月30日至7月8日；詳如新聞稿附件。</p>'
  },
  {
    id: 3,
    date: '2020-07-03',
    title: '【WCG聚焦】美國GDP超預期下修，中美關系緊張持續發酵，黃金高位企穩',
    author: 'WCG分析師：CCC',
    summary:
      '受醫療保健和科技股的推動，華爾街主要股指上漲。不過，冠狀病毒對經濟打擊的新跡象以及中美正在醞釀的緊張關系給金價帶來了支撐。據悉，特朗普政府正在尋求懲罰中國推出香港國安法。特朗普最新表示，他將於當地時間週五就中美關系舉行新聞發布會。',
    article:
      '<p>指揮中心表示，今日新增之32例本土病例(其中13例為居家隔離期間或期滿檢驗陽性者)，為17例男性、15例女性，年齡介於未滿5歲至70多歲，發病日介於今(2021)年7月1日至7月8日。個案分布以臺北市19例最多，其次為新北市11例、桃園市2例；其中14例為已知感染源、1例關聯不明、17例調查中，相關疫情調查持續進行中。</p>'
  },
  {
    id: 4,
    date: '2020-07-07',
    title: '新冠變體肆虐全球 央行預計增持黃金',
    author: 'WCG分析師：DDD',
    summary: '',
    article:
      '<p>人類活動造成的溫室氣體排放不容辯解地導致了全球氣溫升高，從19世紀末到現在全球平均溫度增加了大約1.2度。</p><p>人類活動造成的溫室氣體排放不容辯解地導致了全球氣溫升高，從19世紀末到現在全球平均溫度增加了大約1.2度。</p>'
  },
  {
    id: 5,
    date: '2020-07-09',
    title: '非農靚麗造勢 黃金震盪上行',
    author: 'WCG分析師：EEE',
    article:
      '<p>週一（7月5日），國際金價繼續走強，緊縮近一週錄得的6月18日以來高位1795.17美元不遠，因美元指數衝高回落。但在美國發布喜憂參半的6月入學數據之後，對焦點早加息的關心是否還好，則焦點則到了九月的政策會議上。</p><p><br/></p><p>星巴克14:44，黃金上漲0.15%至1789.80美元/英鎊；COMEX金主力合約上升0.38%1790.0美元/盎司；美元指數運行在平盤92.245附近。</p><p><br/></p><p><br/></p><p>SPI Asset Management 管理合夥人Stephen Innes 說：“ SPI Asset Management 管理合夥人Stephen Innes 說：“ SPI Asset Management 管理合夥人Stephen Innes 說：“最近的活躍數據發出的信號喜憂參半數據表現出強，影響影響的前景。然而，增長的經濟是相當強勁的美國，也同樣具有強勁的動力。” .我們必須非常火，因為市場還在打著這顆球的鷹牌，將限制金價球派。”</p><p><br/></p><p>上（7 月 7 日）的數據顯示，在 6 月份招聘了 10 個月以來，已有 10 個月的時間，但企業走高，美國的訪問率保持不變，時薪增長速度不變。同時，美國經濟市場的反彈正在崛起，因為經濟和行動行動的關注市場在對經濟復甦的需求中樂看到經濟復甦的更多事件。</p><p><br/></p><p>道明證券(TD證券)全球市場策略主管Priya Misra說：“我認為市場在糾結，”“數據好升星日，但如果數據成功退出（通常政策），經濟就會觀看。”</p><p><br/></p><p>開始開始討論，隨著疫情緩解，應以多快的速度何時減少對經濟的支持。最後確定將在今年開始，何時開始減少16個月前啟動的每月1200億美元的公債購買規模。</p><p><br/></p><p>最新的最新會議紀要在本週三（7 月 7 日）宣布，就決策者對可能的政策和政策的看法提供更多的智慧。12 月舉行，在市場恢復到疫情前實現“進一步推進” “實質進展”前不會減少經濟支持，此後出現的企業增加了約330萬個就業崗位。</p><p><br/></p><p>布朗諮詢固定產品主管Tom Graff 說：“我的煙霧加息喜歡在2023年加息屏幕這樣的計劃更早，也更早解決，擔心這個問題的情況，考慮這種暫時性的階段的”結束可能更接近了。”</p><p><br/></p><p>美國總統拜登週日發表了激動人心的慶祝活動245週年，他讓美國人民儘自己的努力讓新冠疫情徹底崩潰。疫情重啟60多萬萬人死亡，儘管現在他們已經恢復了美國的罷工。</p><p><br/></p><p>但由於人的抵制，目前的疫苗還有約67%，但有些許上週日（7月4日），美國仍然沒有達到拜登的目標，即70%的美國更容易接種一劑。這讓衛生專家為擔心，因為傳染性誘因的三角洲變異可能讓感染人數眾多。</p><p><br/></p>'
  },
  {
    id: 6,
    date: '2020-07-11',
    title: '新冠變體肆虐全球 央行預計增持黃金',
    author: 'WCG分析師：FFF',
    article:
      '<p>還是撒切爾夫人說得對，我們只有一個地球，我們幾十年前早就該採取行動了。</p><p>我們面臨的問題是，政府和企業都了解氣候變化可能帶來的危機，但是自然世界的改變速度要比我們做出的反應更快。</p>'
  }
];

export default mockNews;
