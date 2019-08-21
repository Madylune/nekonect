import { combineReducers } from 'redux'
import mood from './mood'
import time from './time'

const reducers = combineReducers({
  mood,
  time
})

export default reducers
