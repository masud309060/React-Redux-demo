import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import IceCreamReducer from './IceCream/IceCreamReducer'
import userReducer from './user/userReducer'


export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  user: userReducer
}) 
