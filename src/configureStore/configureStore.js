import { createStore } from 'redux'
import roomReducer from '../reducers/roomReducer'

export default () => {
    let store = createStore(roomReducer)
    return store
}