export function auth(state=[], action){

    let redirect = false;
    let url = '';

    if(action.type === 'signup'){

        if(action.response.success){
            redirect = true;
            url = '/auth/login';
        }

        let response = Object.assign({}, action.response, {redirect,url});
        return response; 
    }

    if(action.type === 'confirmRegistration'){
        let response = Object.assign({}, action.response, {redirect,url});
        return response;    
    }
    
    return state;
}