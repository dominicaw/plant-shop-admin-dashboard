export const intersection = (arr1, arr2) => {
  const set2 = new Set(arr2)
  return arr1.filter((el) => set2.has(el))
}
