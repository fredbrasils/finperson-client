
export function category(state=[], action){

    let loading = false;
    let create = false;
    let updated = false;

    if(action.type === 'findAll'){
        updated = true;
    }

    if(action.type === 'insert'){
        create = action.response.success ? false : true;
        updated = create;
        let response = Object.assign({},state,{create, message:action.response.message, 
            success: action.response.success,updated});
        return response;
    }

    if(action.type === 'update'){
        updated = action.response.success ? false : true;
        let response = Object.assign({},state,{create, message:action.response.message, 
            success: action.response.success,updated});
        return response;
    }
    
    let response = Object.assign({},state,{categories:action.categories,loading,create,updated});
    return response;     
    
}