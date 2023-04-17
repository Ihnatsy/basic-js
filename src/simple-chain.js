const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],

    getLength() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.chain.length
    },

    addLink(value) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.chain.push(`( ${value} )`)
        return this
    },

    removeLink( position ) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if ((position - 1) >= 0 && position <= this.chain.length) {
            this.chain.splice(position-1, 1)
            return this
        } else {
            this.chain = []
            throw new Error("You can't remove incorrect link!")
        }
    },

    reverseChain() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.chain = this.chain.reverse()
        return this
    },

    finishChain() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let resultChain = this.chain.join('~~')
        this.chain = []
        return resultChain
    }
};

module.exports = {
    chainMaker
};
