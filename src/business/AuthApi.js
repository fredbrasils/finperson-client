import { Component } from 'react';
import { request } from '../util/APIUtils';
import { API_AUTH_SIGNUP_URL, API_AUTH_CONFIRM_REGISTRATION_URL,
         API_AUTH_SIGNIN_URL, API_AUTH_RESET_PASSWORD_URL,
         API_AUTH_CONFIRM_RESET_PASSWORD_URL, API_AUTH_UPDATE_PASSWORD_URL} from '../constants/auth/index';
import {signup, confirmRegistration, resetPassword, updatePassword,
        login, redirectUpdatePassword, cleanMessage, redirectLogin} from '../actions/authActionCreator';

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

    static login(requestInfo){

        return dispatch => {
            request({
                    url: API_AUTH_SIGNIN_URL,
                    method: 'POST',
                    body: JSON.stringify(requestInfo)
                })
                .then(response => {                    
                    dispatch(login(response));
                    return response;
                })
                .catch(error => {
                    dispatch(login(error));
                    return error;
                });
        }
    }
    
    static resetPassword(requestInfo){

        return dispatch => {
            request({
                    url: API_AUTH_RESET_PASSWORD_URL,
                    method: 'POST',
                    body: JSON.stringify(requestInfo)
                })
                .then(response => {                    
                    dispatch(resetPassword(response));
                    return response;
                })
                .catch(error => {
                    dispatch(resetPassword(error));
                    return error;
                });
        }
    }

    static redirectUpdatePassword(requestInfo){

        return dispatch => {
            request({
                    url: API_AUTH_CONFIRM_RESET_PASSWORD_URL + `?token=${requestInfo.token}&id=${requestInfo.id}`,
                    method: 'GET'
                })
                .then(response => {  
                    dispatch(redirectUpdatePassword(response));
                    return response;
                })
                .catch(error => {
                    dispatch(redirectUpdatePassword(error));
                    return error;
                });
        }
    }

    static updatePassword(requestInfo){

        return dispatch => {
            request({
                    url: API_AUTH_UPDATE_PASSWORD_URL,
                    method: 'POST',
                    body: JSON.stringify(requestInfo)
                })
                .then(response => {                    
                    dispatch(updatePassword(response));
                    return response;
                })
                .catch(error => {
                    dispatch(updatePassword(error));
                    return error;
                });
        }
    }
    
    static redirectLogin(){
        return dispatch => {
            dispatch(redirectLogin());
        }
    }

    static cleanMessage(){
        return dispatch => {
            dispatch(cleanMessage());
        }
    }
}