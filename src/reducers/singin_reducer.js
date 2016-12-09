export default function (state = {}, action) {
    console.log('Action received from', action);
    switch (action.type){
        case 'SIGNIN_SUCCESS':
            return action.payload;
        break;
    }
    return state;
}
