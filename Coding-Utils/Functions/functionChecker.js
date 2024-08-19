function isFunction(f) {
    if(!`${f}`.startsWith("function") && !`${f}`.startsWith("async function") 
        && !`${f}`.startsWith("()")) return false;
    else return true;
   
}

module.exports = isFunction;