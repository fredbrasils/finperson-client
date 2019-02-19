export function signup(response){
    return {type:'signup', response};
}

export function confirmRegistration(response){
    return {type:'confirmRegistration', response};
}