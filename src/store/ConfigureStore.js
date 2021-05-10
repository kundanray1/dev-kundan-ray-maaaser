import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import rootReducer from './reducers/rootReducer'


// we need an initialState otherwise , store will freak out
const initialState = {
  posts: {}
}

const sagaMiddleware = createSagaMiddleware()

// redux sagas is a middleware that we apply to the store
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store;


