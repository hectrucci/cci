const URLify = require('./1.3.URLify');
const expect = require('chai').expect;

describe('URLify', () => {
    it('should be URLified', () => {
        const str1 = 'Mr John Smith';
        const str2 = 'This is a Test';

        expect(URLify(str1, str1.length)).to.equal('Mr%20John%20Smith');
        expect(URLify(str2, str2.length)).to.equal('This%20is%20a%20Test');
    });
});