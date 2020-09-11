import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducers from '../reducers/rootReducers';
const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducers,composeEnhancer);

export default store;

