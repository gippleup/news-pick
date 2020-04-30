import * as type from '../action/type'

const initialState = {
  keywords: {
    코로나: {
      items: [
        {
          title: "'<b>코로나</b>충격' 3월 서비스업 4.4% ↓…&quot;해외發 영향은 내달 반영&quot;(종합)",
          originallink: "http://yna.kr/AKR20200429023252002?did=1195m",
          link: "https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=001&aid=0011578402",
          description: "신종 <b>코로나</b>바이러스 감염증(<b>코로나</b>19) 확산을 막기 위해 '사회적 거리두기'가 이뤄지면서 지난달 소비와 산업생산이 감소하는 모습을 보였다. 특히 서비스업 생산이 전월 대비 4.4% 급감하면서 2000년 관련 통계 집계... ",
          pubDate: "Wed, 29 Apr 2020 09:01:00 +0900",
        },
      ],
      lastBuildDate: "Wed, 29 Apr 2020 22:26:52 +0900",
      total: 2027430,
    }
  },
  links: {
    "https://www.artinsight.co.kr/news/view.php?no=47476":true,
    // "http://www.dailysportshankook.co.kr/news/articleView.html?idxno=223072":true
    // "http://yna.kr/AKR20200430036451017?did=1195m": true,
  }
}


export const FETCH_NEWS = 'FETCH_NEWS';

const news = (state=initialState, action) => {
  let newState = {
    keywords: {
      ...state.keywords
    },
    links: {
      ...state.links
    }
  };

  switch(action.type) {
    case type.FETCH_NEWS: {
      let {keywordBlocks, newLinks} = action.payload;
      Object.keys(keywordBlocks).forEach(keyword => {
        if (!state.keywords[keyword]) {
          newState.keywords[keyword] = keywordBlocks[keyword];
        } else {
          let prevItems = state.keywords[keyword].items;
          let newBlock = keywordBlocks[keyword];
          Object.assign(newState.keywords[keyword], {
            items: prevItems.concat(newBlock.items),
            lastBuildDate: newBlock.lastBuildDate,
            total: newBlock.total,
          })
        }
      })
      Object.assign(newState.links, newLinks);
      return newState;
    }

    case type.DELETE_NEWS: {
      let {keyword, itemLink} = action.payload;
      if (!newState.keywords[keyword]) return newState;
      let existingItems = state.keywords[keyword].items;
      let filteredItem = existingItems.filter(item => item.originallink !== itemLink)
      newState.keywords[keyword].items = filteredItem;
      return newState;
    }

    case type.ADD_NEWS: {
      let {keyword, item} = action.payload;
      if (!newState.keywords[keyword]) {
        newState.keywords[keyword] = {
          items: [],
        };
      }
      newState.keywords[keyword].items.push(item);
      return newState;
    }

    default:
      return state
  }
}

export default news;