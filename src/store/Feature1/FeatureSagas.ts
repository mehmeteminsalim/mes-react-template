import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./FeatureAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./FeatureTypes";

// Replace with your sagas
export function* sagasRequestExample() {}

export function* FeatureSaga1() {
  yield takeLatest(TYPES.GET_DATA_REQUEST, sagasRequestExample);
}
