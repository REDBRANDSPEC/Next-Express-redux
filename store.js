import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import Cont from './Redux/cont'

const rootReducer = combineReducers({
  Cont
});

export const initializeStore = (initialState) => {
  return createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)))
}