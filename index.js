/**
 * @param {*} obj
 * @param {string[]} path
 * @returns {*}
 */
var mkopjp = function (obj, path) {
    var t = obj;
    for (var i = 0, name; i < path.length; i++) {
        name = path[i];
        obj[name] = (typeof obj[name] === 'undefined') ? {} : obj[name];
        obj = obj[name];
    }
    
    return t;
};

module.exports = mkopjp;
