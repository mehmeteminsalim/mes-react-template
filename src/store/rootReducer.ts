import { combineReducers } from "redux";
import FeatureReducer from "./Feature1/FeatureReducer";

export const rootReducer = combineReducers({
  feature: FeatureReducer,
});
