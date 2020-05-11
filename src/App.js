import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import NewsList from './component/NewsList/NewsList';
import TagList from './component/TagList/TagList';
import Header from './component/Header/Header';


export const DELETE_PRESS = 'DELETE_PRESS';

function App() {
  return (
    <div className="App">
      <Header/>
      <TagList/>
      <NewsList/>
    </div>
  );
}

export default App;
