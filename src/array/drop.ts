/**
 * 数组去除前 n 个元素，然后返回剩余的部分
 * @return [] [新数组]
 */
function drop (array: any[], amount: number = 0) {
  return array.length > amount ? array.slice(amount < 0 ? 0 : amount, array.length) : []
}

console.log(drop([1, 2, 3]))
console.log(drop([1, 2, 3], 2))
console.log(drop([1, 2, 3], 5))
console.log(drop([1, 2, 3], 0))
console.log(drop([1, 2, 3], -1))
/**
 * --- demo ---
 * drop([1, 2, 3])
 * => [1, 2, 3]
 *
 * drop([1, 2, 3], 2)
 * => [3]
 *
 * drop([1, 2, 3], 5)
 * => []
 *
 * drop([1, 2, 3], 0)
 * => [1, 2, 3]
 * 
 * drop([1, 2, 3], -1)
 * => [1, 2, 3]
 */

export default drop
