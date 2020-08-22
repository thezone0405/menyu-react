import {createStore} from 'redux'
import reducers  from 'client/state/reducers'

const store = createStore(reducers)

export default store