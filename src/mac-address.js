const {NotImplementedError} = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let data = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', '-']
    let arr = n.split('')

    if (arr[2] !== '-' || arr[2] !== '-' || arr[5] !== '-' || arr[8] !== '-' || arr[11] !== '-' || arr[14] !== '-') {
        return false
    }

    let res = arr.filter(item => data.includes(item))
    return (res && (res.length === 17))
}

module.exports = {
    isMAC48Address
};
