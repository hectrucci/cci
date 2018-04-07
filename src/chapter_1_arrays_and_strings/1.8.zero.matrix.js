const zeroMatrix = matrix => {
    const zeroXY = [];

    matrix.forEach((row, y) => {
        row.forEach((column, x) => {
            if (matrix[y][x] === 0) {
                zeroXY.push([x, y]);
            }
        });
    });

    zeroXY.forEach(xy => {
        setNullRow(matrix, xy[1]);
        setNullColumn(matrix, xy[0]);
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