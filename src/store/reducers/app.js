import * as type from '../types';

const initialState = {
    isAuthenticate: false,
    data: []
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
        case type.GET_DATA:
            return {
                ...state,
                isAuthenticate: true,
                data: action.payload
            }
        case type.POST_DATA:
            return {
                ...state,
                isAuthenticate: true,
            }
        case type.DELETE_DATA:
            return {
                ...state,
                data: state.data.filter(list => list.id !== action.payload)
            }

    }
}
