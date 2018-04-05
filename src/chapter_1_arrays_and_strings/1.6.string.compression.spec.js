const stringCompression = require('./1.6.string.compression');
const expect = require('chai').expect;

describe('String Compression', () => {
    it('should be compressed', () => {
        expect(stringCompression('aabcccccaaa')).to.equal('a2b1c5a3');
    });

    it('should not be compressed', () => {
        expect(stringCompression('abcd')).to.equal('abcd');
    });
});