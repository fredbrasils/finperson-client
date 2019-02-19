import { Component } from 'react';
import { request } from '../util/APIUtils';
import { API_AUTH_SIGNUP_URL, API_AUTH_CONFIRM_REGISTRATION_URL} from '../constants/auth/index';
import {signup, confirmRegistration} from '../actions/authActionCreator';

export default class AuthApi extends Component {

    static signup(requestInfo){

        return dispatch => {
            request({
                    url: API_AUTH_SIGNUP_URL,
                    method: 'POST',
                    body: JSON.stringify(requestInfo)
                })
                .then(response => {                    
                    dispatch(signup(response));
                    return response;
                })
                .catch(error => {
                    dispatch(signup(error));
                    return error;
                });
        }
    }

    static confirmRegistration(requestInfo){

        return dispatch => {
            request({
                    url: API_AUTH_CONFIRM_REGISTRATION_URL + `?token=${requestInfo.token}`,
                    method: 'GET'
                })
                .then(response => {  
                    dispatch(confirmRegistration(response));
                    return response;
                })
                .catch(error => {
                    dispatch(confirmRegistration(error));
                    return error;
                });
        }
    }
}