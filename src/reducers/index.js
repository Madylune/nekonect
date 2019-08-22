import { combineReducers } from 'redux'
import mood from './mood'
<<<<<<< HEAD
import time from './time'
import neko from './neko'

const reducers = combineReducers({
  mood,
  time,
  neko
=======
import inventory from './inventory'
import store from './store'

const reducers = combineReducers({
  mood,
  inventory,
  store
>>>>>>> added inventory reducers
})

export default reducers
