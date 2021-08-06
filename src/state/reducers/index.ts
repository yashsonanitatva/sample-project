import { combineReducers } from "redux";
import AuthReducer from "./auth.reducer";
import UserReducer from "./user.reducer";

const reducers = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

export type RootState = ReturnType<typeof reducers>;
export default reducers;
