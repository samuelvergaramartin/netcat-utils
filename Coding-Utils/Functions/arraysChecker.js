function isArray(array) {
    result = undefined;
    try {
        array.forEach(()=>{});
        result = true;
    }
    catch {
        result = false;
    }

    return result;
}

module.exports = isArray;