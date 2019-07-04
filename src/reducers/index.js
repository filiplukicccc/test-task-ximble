import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';
import languageReducer from './languageReducer';

export default combineReducers({
  services: servicesReducer,
  language: languageReducer
});