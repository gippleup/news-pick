import {combineReducers} from 'redux';
import conf from './conf';
import filter from './filter';
import news from './news';
import press from './press';
import subscription from './subscription';

const rootReducer = combineReducers({
  conf,
  filter,
  news,
  press,
  subscription,
})

export default rootReducer;