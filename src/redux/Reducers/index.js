import { storyReducer } from './stories';
import { authReducer } from './auth';
import {combineReducers} from 'redux';

export const rootReducer =combineReducers({
    storyReducer,
    authReducer
})