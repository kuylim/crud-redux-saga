/**
 * Created by KUYLIM on 11/11/2016.
 */
 // action user sigin
const siginRequest = (auth) =>({
  type: 'SIGN_REQUEST',
  payload: auth,
});

// action get users
const fetchUsers = (key) =>({
  type: 'FETCH_USER',
  payload: key,
});

const findOneUser = (data) => ({
  type: 'FIND_ONE_USER',
  payload: data,
});

const updateRequest = (data) => ({
  type: 'UPDATE_REQUEST',
  payload: data,
});

export default{
  siginRequest,
  fetchUsers,
  findOneUser,
  updateRequest,
}
