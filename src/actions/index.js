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

export default{
  siginRequest,
  fetchUsers,
}
