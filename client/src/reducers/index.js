import { combineReducers } from 'redux';
import countriesReducers from './countriesReducers';
export default combineReducers({
  countries: countriesReducers,
});
