import {createStore} from 'redux'
import tasksReducer from './reducer'

const store = createStore(tasksReducer)

export default store
