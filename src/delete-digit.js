const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let arr = n.toString().split('')
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        let workArr = n.toString().split('')
        workArr.splice(i, 1)
        newArr.push(+workArr.join(''))
    }

    newArr.sort((a, b) => b - a)
    return newArr[0]
}

module.exports = {
    deleteDigit
};
