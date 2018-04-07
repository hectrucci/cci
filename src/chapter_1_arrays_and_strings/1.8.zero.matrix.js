const zeroMatrix = matrix => {

    const zeroXY = [];

    matrix.forEach((row, i) => {
        row.forEach((column, j) => {
            if (matrix[i][j] === 0) {
                zeroXY.push([i, j]);
            }
        });
    });

    zeroXY.forEach(xy => {
        setNullRow(matrix, xy[0]);
        setNullColumn(matrix, xy[1]);
    });
};

const setNullRow = (matrix, row) => {
    matrix[row] = matrix[row].map(() => 0);
};

const setNullColumn = (matrix, column) => {
    matrix.forEach((row, i) => {
        matrix[i][column] = 0;
    });
};


module.exports = zeroMatrix;