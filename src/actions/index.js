/**
 * Created by KUYLIM on 11/11/2016.
 */
 // action request sigin
const siginRequest = (auth) =>({
  type: 'SIGN_REQUEST',
  payload: auth,
});

// action request all users
const fetchUsers = (key) =>({
  type: 'FETCH_USER',
  payload: key,
});

// action request search user by id
const findOneUser = (data) => ({
  type: 'FIND_ONE_USER',
  payload: data,
});

// action request update user
const updateRequest = (data) => ({
  type: 'UPDATE_REQUEST',
  payload: data,
});

// action request delete user
const deleteRequest = (data) => ({
  type: 'DELETE_REQUEST',
  payload: data,
});

export default{
  siginRequest,
  fetchUsers,
  findOneUser,
  updateRequest,
  deleteRequest,
}
