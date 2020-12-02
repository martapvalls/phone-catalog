import { GET_PHONES, GET_PHONES_SUCCESS, GET_PHONES_ERROR } from '../actions/types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/phones';

//get phone catalog from API
export function getPhonesCatalog(){
    return async(dispatch) =>{
        dispatch( downloadPhones() );
        try {
            setTimeout(async () => {
                const res = await axios.get(apiUrl)
                dispatch(retrievePhonesSuccess(res.data))
            }, 3000)
        } catch (error) {
            dispatch( retrievePhonesError() )
        }
    }
}

//start the call, for loading true
const downloadPhones = () => ({
    type: GET_PHONES,
    payload: true
})

// fetching phones from API success
const retrievePhonesSuccess = phones => ({
    type: GET_PHONES_SUCCESS,
    payload: phones
})

// failing fetching phones from API 
const retrievePhonesError = () => ({
    type: GET_PHONES_ERROR,
    payload: true
})