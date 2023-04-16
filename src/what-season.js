const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(/*date*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // let result
    // let month = date.getMonth()
    //
    // if (date === undefined) {
    //     return 'Unable to determine the time of year!'
    // }
    // if (Object.getOwnPropertyNames(date).length > 0 || !(date instanceof Date)) {
    //     throw new Error('Invalid date!');
    // }
    //
    // switch (month) {
    //     case (month >= 0 && month <= 1 || month === 11) :
    //         result = 'winter'
    //         break
    //     case (month >= 2 && month <= 4) :
    //         result = 'spring'
    //         break
    //     case (month >= 5 && month <= 7) :
    //         result = 'summer'
    //         break
    //     case (month >= 8 && month <= 10) :
    //         result = 'autumn '
    //         break
    //     //default:
    //        // return 'Unable to determine the time of year!'
    //         //throw new Error('Invalid date!')
    // }
    //
    // return result
}

module.exports = {
    getSeason
};
