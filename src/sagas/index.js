import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { userSignin, loadUsers, findOneUser, editUser } from "./user_sagas";

export function* sagas(){
  yield[
    fork(takeLatest, 'SIGN_REQUEST', userSignin),
    fork(takeLatest, 'FETCH_USER', loadUsers),
    fork(takeLatest, 'FIND_ONE_USER', findOneUser),
    fork(takeLatest, 'UPDATE_REQUEST', editUser),
  ];
}
