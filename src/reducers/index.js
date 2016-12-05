/**
 * Created by KUYLIM on 11/11/2016.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import selectors from './reducer_user';

export const rootReducer = combineReducers({
    routing: routerReducer,
    user: selectors,
});
