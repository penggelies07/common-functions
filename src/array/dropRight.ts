/**
 * 数组去除后 n 个元素，然后返回剩余的部分
 * @return [] [新数组]
 */
function dropRight (array: any[], amount: number = 0) {
  return array.length > amount ? amount > 0 ? array.slice(0, array.length - amount) : array : []
}

console.log(dropRight([1, 2, 3]))
console.log(dropRight([1, 2, 3], 1))
console.log(dropRight([1, 2, 3], 2))
console.log(dropRight([1, 2, 3], 5))
console.log(dropRight([1, 2, 3], 0))
console.log(dropRight([1, 2, 3], -1))
/**
 * --- demo ---
 * dropRight([1, 2, 3])
 * => [1, 2, 3]
 * 
 * dropRight([1, 2, 3], 1)
 * => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * => [1]
 *
 * dropRight([1, 2, 3], 5)
 * => []
 *
 * dropRight([1, 2, 3], 0)
 * => [1, 2, 3]
 * 
 * dropRight([1, 2, 3], -1)
 * => [1, 2, 3]
 */

export default dropRight
