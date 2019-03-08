
export function category(state=[], action){

    let loading = false;

    if(action.type === 'findAll'){

        /*
        if(action.response.success){
            redirect = true;
            url = '/auth/login';
        }
        */
    }
    
    let response = Object.assign({},{categories:action.categories,loading});
    return response;     
    
}