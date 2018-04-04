const checkPermutation = require('./1.2.check.permutation');
const expect = require('chai').expect;

describe('Check Permutation', () => {
    it('should be a permutation', () => {
        expect(checkPermutation('testing', 'ingtest')).to.equal(true);
    });

    it('should not be a permutation', () => {
        expect(checkPermutation('testing', 'test')).to.equal(false);
        expect(checkPermutation('testing', 'test1ng')).to.equal(false);
    });
});