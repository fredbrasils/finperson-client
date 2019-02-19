export function auth(state=[], action){

    if(action.type === 'signup'){

        let redirect = false;
        let url = '';

        if(action.response.success){
            redirect = true;
            url = '/auth/login';
        }

        let response = Object.assign({}, action.response, {redirect,url});
        return response;    
    }

    return state;
}