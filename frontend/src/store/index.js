// import { createStore, compose } from 'redux';
import { createStore } from 'redux';

import rootReducer from "../reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

// const store = createStore(rootReducer,applyMiddleware(thunk));
// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));
// const store = createStore(rootReducer, composeEnhancers());
const store = createStore(rootReducer);

export default store;

