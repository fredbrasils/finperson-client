import { Component } from 'react';
import { request } from '../util/APIUtils';
import { API_CATEGORY_FIND_ALL_URL} from '../constants/category/index';
import {findAll} from '../actions/categoryActionCreator';

export default class CategoryApi extends Component {

    static findAll(requestInfo){

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

}