import { GET_PHONES, GET_PHONES_SUCCESS, GET_PHONES_ERROR } from '../actions/types';

const initialState = {
    phones: [],
    isLoading: false,
    error: false
}

function mainReducer( state = initialState, action ){
    switch(action.type){
        case GET_PHONES:
            return{
                ...state, 
                isLoading: action.payload
            }
        case GET_PHONES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                phones: action.payload
            }
        case GET_PHONES_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}


export default mainReducer;