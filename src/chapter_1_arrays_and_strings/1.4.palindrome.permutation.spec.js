const isPalindromePermutation = require('./1.4.palindrome.permutation');
const expect = require('chai').expect;

describe('Palindrome Permutation', () => {
    it('should be a palindrome permutation', () => {
        expect(isPalindromePermutation('Tact Coa')).to.equal(true);
    });

    it('should not be a palindrome permutation', () => {
        expect(isPalindromePermutation('this is a test')).to.equal(false);
    });
});