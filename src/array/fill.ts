/**
 * 使用value值来填充（也就是替换）array，从start位置开始, 到end位置结束（但不包含end位置） 
 * @return [] [新数组]
 */
function fill (array: any[], value: string | number, start: number = 0, end: number = array.length) {
  array = typeof array === 'object' ? Array.from(array) : array
  return array.map((a, index) => (index >= start && index < end) ? value : a)
}

console.log(fill([1, 2, 3], 'a'))
console.log(fill(Array(3), 2))
console.log(fill([4, 6, 8], '*', 1, 2))
/**
 * --- demo ---
 * fill([1, 2, 3], 'a')
 * => ['a', 'a', 'a']
 * fill(Array(3), 2)
 * [2, 2, 2]
 * fill([4, 6, 8], '*', 1, 2)
 * [4, '*', 8]
 */

export default fill
