export function signup(response){
    return {type:'signup', response};
}

export function confirmRegistration(response){
    return {type:'confirmRegistration', response};
}

export function login(response){
    return {type:'login', response};
}

export function resetPassword(response){
    return {type:'resetPassword', response};
}

export function redirectUpdatePassword(response){
    return {type:'redirectUpdatePassword', response};
}

export function updatePassword(response){
    return {type:'updatePassword', response};
}

export function redirectLogin(){
    return {type:'redirectLogin'};
}

export function cleanMessage(){
    return {type:'cleanMessage'};
}

