import { combineReducers } from "redux";

import sessionReducer from "./session/sessionReducer";
import financeReducer from "./finance/financeReducer";

const rootreducer = combineReducers({
  session: sessionReducer,
  finance: financeReducer,
});

export default rootreducer;