import { ADD_TODO } from '../actionTypes';

export const todoReducer = ( state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case ADD_TODO:
            return [ ...state, payload ];
        default:
            return state;
    }
}