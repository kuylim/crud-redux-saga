import axios from 'axios';

const ROOT_URL = "http://localhost:9000/";


export default class ApiUsers {
  // created sigin api function
  static signin(action){

      const url = `${ROOT_URL}signin`;
      const request = axios.post(url,
         action.payload.data,
          {
              headers:
              {
                  "X-Api-Key": "AbCdEfGhIjK1",
              }
          }
      );
      return request;
    }

    // created get user api function
    static fetchUsers(action){
      const url = `${ROOT_URL}api/v1/users`;
      console.log("fetch api key", action);
      const request = axios.get(url,
        {
          headers:
          {
            "X-Api-Key": "AbCdEfGhIjK1",
            "X-Auth-Token": action.payload.data.key,
          }
        }
      );
      return request;
    }

    // finde one user
    static fetchOneUser(action) {
        const url = `${ROOT_URL}api/v1/users/${action.payload.data.id}`;

        const request = axios.get(url,
            {
                headers:
                {
                    "X-Api-Key": "AbCdEfGhIjK1",
                    "X-Auth-Token" : action.payload.data.key,
                }
            }
        );

        console.log('request', request)
        return request;
    }

    // edit user
    static modidifyUser(action){
      const url = `${ROOT_URL}api/v1/users/${action.payload.data.id}`;

      const request = axios.patch(url,
         action.payload.data.user,
          {
              headers:
              {
                  "X-Api-Key": "AbCdEfGhIjK1",
                  "X-Auth-Token" : action.payload.data.key,
              }
          }
      );
      return request;
    }

    static deleteUser(action){
      const url = `${ROOT_URL}api/v1/users/${action.payload.data.id}`;
      const request = axios.delete(url,
        {
          headers:
          {
            "X-Api-Key": "AbCdEfGhIjK1",
            "X-Auth-Token": action.payload.data.key,
          }
        }
      );
      return request;
    }
}
