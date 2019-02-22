import { ACCESS_TOKEN} from '../constants/general';

export function auth(state=[], action){

    let redirect = false;
    let url = '';
    let loading = false;

    if(action.type === 'signup'){

        if(action.response.success){
            redirect = true;
            url = '/auth/login';
        }
    }
    
    if(action.type === 'login'){
        
        if(action.response.accessToken){
            localStorage.setItem(ACCESS_TOKEN, action.response.accessToken);
            redirect = true;
            url = '/';
            return Object.assign({}, {success:false, message:[], redirect, url,loading});
        }
        
    }
    
    if(action.type === 'redirectUpdatePassword'){
        
        if(action.response.user){
            redirect = true;
            url = '/auth/updatepassword';
            let resp = Object.assign({}, action.response, {success:false, message:[], redirect, url,loading});
            return resp;
        }
    }

    if(action.type === 'updatePassword'){
        
        if(action.response.success){
            redirect = true;
            url = '/auth/login';
        }
    }

    if(action.type === 'confirmRegistration' || action.type === 'resetPassword'){
        // do nothing
    }

    if(action.type === 'redirectLogin'){
        return Object.assign({}, {success:false, message:[], redirect:true, url:'/auth/login',loading});
    }

    if(action.type === 'cleanMessage'){
        return Object.assign({}, {success:false, message:[], redirect:false, url:'',loading});
    }
    
    let response = Object.assign({}, action.response, {redirect,url,loading});
    return response;    
    
}