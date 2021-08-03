module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length < 1 || matrix[0].length < 1) return [];
  let r_arr = [];
  for (let r in matrix) {
    r_arr = r_arr.concat((r % 2) ? matrix[r].reverse() : matrix[r]);
  }
  return r_arr;
}
