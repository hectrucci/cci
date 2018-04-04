const isUnique = require('./1.1.is.unique');
const expect = require('chai').expect;

describe('Is Unique', () => {
    it('should be unique', () => {
        expect(isUnique('abcde')).to.equal(true);
    });

    it('should not be unique', () => {
        expect(isUnique('abcdee')).to.equal(false);
    });
});