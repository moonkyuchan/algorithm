// function solution(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let empty = [];
//     for (let j = 0; j < arr1[i].length; j++) {
//       empty.push(arr1[i][j] + arr2[i][j]);
//     }
//     result.push(empty);
//   }
//   return result;
// }

function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
console.log(
  sumMatrix(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
