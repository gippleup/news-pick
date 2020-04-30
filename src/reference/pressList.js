const pressList = [
  ["JTBC", "news.jtbc.joins.com"],
  ["KBS", "news.kbs.co.kr"],
  ["MBC", "imnews.imbc.com"],
  ["MBN", "mbn.mk.co.kr"],
  ["SBS", "news.sbs.co.kr"],
  ["TV조선", "news.tvchosun.com"],
  ["YTN", "www.ytn.co.kr"],
  ["경향신문", "news.khan.co.kr"],
  ["국민일보", "news.kmib.co.kr"],
  ["네이버뉴스", "news.naver.com"],
  ["노컷뉴스", "www.nocutnews.co.kr"],
  ["뉴스1", "www.news1.kr"],
  ["뉴시스", "www.newsis.com"],
  ["동아일보", "www.donga.com"],
  ["매일경제", "news.mk.co.kr"],
  ["머니투데이", "news.mt.co.kr"],
  ["머니S", "moneys.mt.co.kr"],
  ["미디어오늘", "www.mediatoday.co.kr"],
  ["서울신문", "www.seoul.co.kr"],
  ["서울경제", "www.sedaily.com"],
  ["세계일보", "www.segye.com"],
  ["시사저널", "www.sisajournal-e.com"],
  ["아시아경제", "view.asiae.co.kr"],
  ["연합뉴스", "www.yonhapnewstv.co.kr"],
  ["오마이뉴스", "www.ohmynews.com"],
  ["이데일리", "www.edaily.co.kr"],
  ["조선일보", "news.chosun.com"],
  ["조선비즈", "biz.chosun.com"],
  ["중앙일보", "news.joins.com"],
  ["채널A", "www.ichannela.com"],
  ["파이낸셜뉴스", "www.fnnews.com"],
  ["한국경제", "www.hankyung.com"],
  ["한겨레", "www.hani.co.kr"],
  ["한국경제TV", "www.wowtv.co.kr"],
  ["헤럴드경제", "news.heraldcorp.com"]
]

const linkToPress = {
  "news.jtbc.joins.com": "JTBC",
  "news.kbs.co.kr": "KBS",
  "imnews.imbc.com": "MBC",
  "mbn.mk.co.kr": "MBN",
  "news.sbs.co.kr": "SBS",
  "news.tvchosun.com": "TV조선",
  "www.ytn.co.kr": "YTN",
  "news.khan.co.kr": "경향신문",
  "news.kmib.co.kr": "국민일보",
  "news.naver.com": "네이버뉴스",
  "www.nocutnews.co.kr": "노컷뉴스",
  "www.news1.kr": "뉴스1",
  "www.newsis.com": "뉴시스",
  "www.donga.com": "동아일보",
  "news.mk.co.kr": "매일경제",
  "news.mt.co.kr": "머니투데이",
  "moneys.mt.co.kr": "머니S",
  "www.mediatoday.co.kr": "미디어오늘",
  "www.seoul.co.kr": "서울신문",
  "www.sedaily.com": "서울경제",
  "www.segye.com": "세계일보",
  "www.sisajournal-e.com": "시사저널",
  "view.asiae.co.kr": "아시아경제",
  "www.yonhapnewstv.co.kr": "연합뉴스",
  "www.ohmynews.com": "오마이뉴스",
  "www.edaily.co.kr": "이데일리",
  "news.chosun.com": "조선일보",
  "biz.chosun.com": "조선비즈",
  "news.joins.com": "중앙일보",
  "www.ichannela.com": "채널A",
  "www.fnnews.com": "파이낸셜뉴스",
  "www.hankyung.com": "한국경제",
  "www.hani.co.kr": "한겨레",
  "www.wowtv.co.kr": "한국경제TV",
  "news.heraldcorp.com": "헤럴드경제"
}

const pressToLink = {
  "JTBC": "news.jtbc.joins.com",
  "KBS": "news.kbs.co.kr",
  "MBC": "imnews.imbc.com",
  "MBN": "mbn.mk.co.kr",
  "SBS": "news.sbs.co.kr",
  "TV조선": "news.tvchosun.com",
  "YTN": "www.ytn.co.kr",
  "경향신문": "news.khan.co.kr",
  "국민일보": "news.kmib.co.kr",
  "네이버뉴스": "news.naver.com",
  "노컷뉴스": "www.nocutnews.co.kr",
  "뉴스1": "www.news1.kr",
  "뉴시스": "www.newsis.com",
  "동아일보": "www.donga.com",
  "매일경제": "news.mk.co.kr",
  "머니투데이": "news.mt.co.kr",
  "머니S": "moneys.mt.co.kr",
  "미디어오늘": "www.mediatoday.co.kr",
  "서울신문": "www.seoul.co.kr",
  "서울경제": "www.sedaily.com",
  "세계일보": "www.segye.com",
  "시사저널": "www.sisajournal-e.com",
  "아시아경제": "view.asiae.co.kr",
  "연합뉴스": "www.yonhapnewstv.co.kr",
  "오마이뉴스": "www.ohmynews.com",
  "이데일리": "www.edaily.co.kr",
  "조선일보": "news.chosun.com",
  "조선비즈": "biz.chosun.com",
  "중앙일보": "news.joins.com",
  "채널A": "www.ichannela.com",
  "파이낸셜뉴스": "www.fnnews.com",
  "한국경제": "www.hankyung.com",
  "한겨레": "www.hani.co.kr",
  "한국경제TV": "www.wowtv.co.kr",
  "헤럴드경제": "news.heraldcorp.com"
}

const linkList = {
  "biz.chosun.com": undefined,
  "imnews.imbc.com": undefined,
  "mbn.mk.co.kr": undefined,
  "moneys.mt.co.kr": undefined,
  "news.chosun.com": undefined,
  "news.heraldcorp.com": undefined,
  "news.joins.com": undefined,
  "news.jtbc.joins.com": undefined,
  "news.kbs.co.kr": undefined,
  "news.khan.co.kr": undefined,
  "news.kmib.co.kr": undefined,
  "news.mk.co.kr": undefined,
  "news.mt.co.kr": undefined,
  "news.naver.com": undefined,
  "news.sbs.co.kr": undefined,
  "news.tvchosun.com": undefined,
  "view.asiae.co.kr": undefined,
  "www.donga.com": undefined,
  "www.edaily.co.kr": undefined,
  "www.fnnews.com": undefined,
  "www.hani.co.kr": undefined,
  "www.hankyung.com": undefined,
  "www.ichannela.com": undefined,
  "www.mediatoday.co.kr": undefined,
  "www.news1.kr": undefined,
  "www.newsis.com": undefined,
  "www.nocutnews.co.kr": undefined,
  "www.ohmynews.com": undefined,
  "www.sedaily.com": undefined,
  "www.segye.com": undefined,
  "www.seoul.co.kr": undefined,
  "www.sisajournal-e.com": undefined,
  "www.wowtv.co.kr": undefined,
  "www.yonhapnewstv.co.kr": undefined,
  "www.ytn.co.kr": undefined
}

export {
  pressList,
  linkList,
  linkToPress,
  pressToLink
}