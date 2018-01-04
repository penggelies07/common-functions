
/**
 * 数组按规格拆分成小数组
 * @return [[][]] [新二维数组]
 */
function chunk (array: any[], size: number) {
  const length = array === null ? 0 : array.length
  size = Math.max(size, 0)

  if (!length || !size) {
    return []
  }

  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }

  return result
}

console.log(chunk(['a', 'b', 'c', 'd'], 2))
console.log(chunk(['a', 'b', 'c', 'd'], 3))
/**
 * --- demo ---
 * chunk(['a', 'b', 'c', 'd'], 2)
 * => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * => [['a', 'b', 'c'], ['d']]
 */

export default chunk
