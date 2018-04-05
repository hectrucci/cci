const rotateMatrix = require('./1.7.rotate.matrix');
const expect = require('chai').expect;

describe('Rotate Matrix', () => {
    it('should rotate the matrix', () => {
        const matrix = [
            ['a', 'l', 'k', 'j'],
            ['b', '1', '4', 'i'],
            ['c', '2', '3', 'h'],
            ['d', 'e', 'f', 'g']
        ];
        const rotatedMatrix = [
            ['d', 'c', 'b', 'a'],
            ['e', '2', '1', 'l'],
            ['f', '3', '4', 'k'],
            ['g', 'h', 'i', 'j']
        ];
        const matrixToRotate = matrix.map(arr => [...arr]);

        rotateMatrix(matrixToRotate);

        expect(matrix).to.not.deep.equal(rotatedMatrix);
        expect(matrixToRotate).to.deep.equal(rotatedMatrix);
    });
});