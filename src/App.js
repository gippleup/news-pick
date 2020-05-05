import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searcher from './component/Searcher/Searcher';
import NewsList from './component/NewsList/NewsList';
import Subscription from './component/Subscription/Subscription';
import TagList from './component/TagList/TagList';


export const DELETE_PRESS = 'DELETE_PRESS';

function App() {
  return (
    <div className="App">
      <Searcher/>
      <TagList/>
      <NewsList/>
    </div>
  );
}

export default App;
