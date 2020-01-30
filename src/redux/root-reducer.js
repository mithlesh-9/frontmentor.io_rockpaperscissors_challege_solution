import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import scoreReducer from './score/score-reducer'
import userReducer from './user/user-reducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
    score:scoreReducer,
    user: userReducer
  
});

export default persistReducer(persistConfig, rootReducer);