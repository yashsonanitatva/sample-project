import { combineReducers } from "redux";
import AuthReducer from "./auth.reducer";

const reducers = combineReducers({
  auth: AuthReducer,
});

export type RootState = ReturnType<typeof reducers>;
export default reducers;
