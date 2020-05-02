import {combineReducers} from 'redux';
import query from './query';
import news from './news';
import press from './press';
import filter from './filter';
import conf from './conf';
import subscription from './subscription';

const rootReducer = combineReducers({
  conf,
  filter,
  news,
  press,
  subscription,
  query,
})

export default rootReducer;