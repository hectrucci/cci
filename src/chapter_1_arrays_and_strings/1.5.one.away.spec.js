const isOneAway = require('./1.5.one.away');
const expect = require('chai').expect;

describe('One Away', () => {
    it('should be one edit away', () => {
        expect(isOneAway('pale', 'pale')).to.equal(true);
        expect(isOneAway('pale', 'ple')).to.equal(true);
        expect(isOneAway('pales', 'pale')).to.equal(true);
        expect(isOneAway('pale', 'bale')).to.equal(true);
    });

    it('should be more than one edit away', () => {
        expect(isOneAway('pale', 'bake')).to.equal(false);
    });
});