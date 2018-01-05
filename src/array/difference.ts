/**
 * 数组过滤指定数组
 * @return [] [新数组]
 */
function difference (array: any[], values: any[]) {
  return array.filter((a) => values.findIndex((v) => v === a) < 0)
}

console.log(difference([1, 2, 3], [4, 2]))
console.log(difference([1, '2', 3], [4, 2]))
/**
 * --- demo ---
 * difference([1, 2, 3], [4, 2])
 * => [1, 3]
 * difference([1, '2', 3], [4, 2])
 * => [1, "2", 3]
 */

export default difference
