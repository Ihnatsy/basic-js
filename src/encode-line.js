const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = []
    if (str === '') {
        return ''
    } else {
        for (let i = 0; i < str.length; i++) {
            let number = 1
            while (str[i] === str[i + 1]) {
                number++
            }
            result.push(number === 1 ? ('', str[i]) : (number, str[i]))
        }
        return result.join('')
    }
}

module.exports = {
    encodeLine
};
