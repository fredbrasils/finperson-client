
export function category(state=[], action){

    let redirect = false;
    let url = '';
    let loading = false;

    if(action.type === ''){
        
    }
    
    let response = Object.assign({}, action.response, {redirect,url,loading});
    return response;    
    
}