const zeroMatrix = require('./1.8.zero.matrix');
const expect = require('chai').expect;

describe('Zero Matrix', () => {
    it('should  set to 0', () => {
        const matrix = [
            [1, 0, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 0, 1],
            [1, 1, 1, 1]
        ];
        const result = [
            [0, 0, 0, 0],
            [1, 0, 0, 1],
            [0, 0, 0, 0],
            [1, 0, 0, 1]
        ];
        const matrixToEdit = matrix.map(arr => [...arr]);

        zeroMatrix(matrixToEdit);

        expect(matrix).to.not.deep.equal(matrixToEdit);
        expect(matrixToEdit).to.deep.equal(result);
    });
});