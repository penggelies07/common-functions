/**
 * 数组去除无效值(false, null, 0, '', undefined, NaN)
 * @return [] [新数组]
 */
function compact (array: any[]) {
  return array.filter((a) => a)
}

console.log(compact([0, 1, false, 2, '', null, undefined, NaN, 3]))
/**
 * --- demo ---
 * compact([0, 1, false, 2, '', 3])
 * => [1, 2, 3]
 */

export default compact
