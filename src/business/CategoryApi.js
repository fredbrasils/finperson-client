import { Component } from 'react';
import { request } from '../util/APIUtils';
import { API_CATEGORY_FIND_ALL_URL, API_CATEGORY_INSERT_URL} from '../constants/category/index';
import {findAll, insert} from '../actions/categoryActionCreator';

export default class CategoryApi extends Component {

    static findAll(){

        return dispatch => {
            request({
                    url: API_CATEGORY_FIND_ALL_URL,
                    method: 'GET'
                })
                .then(response => {  
                    dispatch(findAll(response));
                    return response;
                })
                .catch(error => {
                    dispatch(findAll(error));
                    return error;
                });
        }
    }

    static insert(requestInfo){

        return dispatch => {
            request({
                    url: API_CATEGORY_INSERT_URL,
                    method: 'POST',
                    body: JSON.stringify(requestInfo)
                })
                .then(response => {                    
                    dispatch(insert(response));
                    return response;
                })
                .catch(error => {
                    dispatch(insert(error));
                    return error;
                });
        }
    }

}