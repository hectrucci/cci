const isRotation = require('./1.9.string.rotation');
const expect = require('chai').expect;

describe('String Rotation', () => {
    it('should be a string rotation', () => {
        const str1 = 'waterbottle';
        const str2 = 'erbottlewat';

        expect(isRotation(str1, str2)).to.equal(true);
    });

    it('should not be a string rotation', () => {
        const str1 = 'waterbottle';
        const str2 = 'erbottlewater';

        expect(isRotation(str1, str2)).to.equal(false);
    });

    it('should not be a string rotation', () => {
        const str1 = 'waterbottle';
        const str2 = 'erbotilewat';

        expect(isRotation(str1, str2)).to.equal(false);
    });
});