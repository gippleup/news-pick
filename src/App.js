import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchNews, deleteNews, addNews} from './redux/action/creator'

function App({fetchNews, deleteNews, addNews}) {
  fetchNews(['눈사람', '코로나', '토네이도'])
  setTimeout(()=>{
    deleteNews('눈사람', "http://www.gametoc.co.kr/news/articleView.html?idxno=54680");
  },5000) 
  addNews('긴급재난지원금', {
    title: '테스트',
    originallink: 'https://www.yonhapnewstv.co.kr/news/MYH20200430006500641',
    link: 'https://www.yonhapnewstv.co.kr/news/MYH20200430006500641',
    pubDate: '오늘이다 임마'
  });
  return (
    <div className="App">
      
    </div>
  );
}

export default connect(null, {fetchNews, deleteNews, addNews})(App);
