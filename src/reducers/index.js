import { combineReducers } from 'redux'
import mood from './mood'
import time from './time'
import neko from './neko'

const reducers = combineReducers({
  mood,
  time,
  neko
})

export default reducers
