import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { userSignin, loadUsers } from "./user_sagas";

export function* sagas(){
  yield[
    fork(takeLatest, 'SIGN_REQUEST', userSignin),
    fork(takeLatest, 'FETCH_USER', loadUsers),
  ];
}
