/**
 * Created by KUYLIM on 11/11/2016.
 */

export default function (state = {}, action) {
    console.log('Action received from', action);
    switch (action.type){
        case 'LOAD_USER_SUCCESS':
          return action.payload;
        break;
        case 'FIND_ONE_USER_SUCCESS':
          return action.payload;
        break;
    }
    return state;
}
