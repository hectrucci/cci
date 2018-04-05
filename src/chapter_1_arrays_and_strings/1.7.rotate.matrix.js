const rotateMatrix = matrix => {
    let n = matrix.length;

    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - 1 - layer;

        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i];

            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
};

module.exports = rotateMatrix;