import { combineReducers } from 'redux'
import mood from './mood'
import time from './time'
import neko from './neko'
import store from './store'
import inventory from './inventory'
import code from './code'

const reducers = combineReducers({
  mood,
  time,
  neko,
  store,
  inventory,
  code
})

export default reducers
