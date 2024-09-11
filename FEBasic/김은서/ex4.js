function deepCopy(obj) {
    if(obj === null || typeof obj !== 'object')
        return obj;
    
    const newObj = {};

    if(Array.isArray(obj)){
        return obj.map(element => deepCopy(element));
    }else if(obj instanceof Map){
        return new Map(obj.entries());
    }else if(obj instanceof WeakMap){
        return obj;
    }else if(obj instanceof Set){
        return new Set([...obj].map(value => deepCopy(value)));
    }else if(obj instanceof WeakSet){
        return obj;
    }else if(Object.getOwnPropertySymbols(obj) === Symbol){
        return Reflect.ownKeys(obj);
    }else{
        for(const k in obj){    
            newObj[k] = deepCopy(obj[k]);
        }
    }
    
    const keys = Reflect.ownKeys(obj);
    for(const key of keys){
        newObj[key] = deepCopy(obj[key]);
    }

    return newObj;
}
module.exports = { deepCopy };