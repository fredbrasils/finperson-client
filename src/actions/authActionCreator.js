export function signup(response){
    return {type:'signup', response};
}

export function confirmRegistration(response){
    return {type:'confirmRegistration', response};
}

export function login(response){
    return {type:'login', response};
}

export function cleanMessage(){
    return {type:'cleanMessage'};
}