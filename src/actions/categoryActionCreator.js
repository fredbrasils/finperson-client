export function findAll(categories){
    return {type:'findAll', categories};
}

export function insert(response){
    return {type:'insert', response};
}

export function update(category){
    return {type:'update', category};
}

export function remove(response){
    return {type:'remove', response};
}

