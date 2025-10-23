export function seededRandom(seed: number) {
  let s = seed
  return function () {
    s = Math.sin(s) * 10000
    return s - Math.floor(s)
  }
}

export function shuffleWithSeed(array: string[], seed: number) {
  const rand = seededRandom(seed)
  const arr = [...array]
  if (arr.length === 0) return arr
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
      ;[arr[i]!, arr[j]!] = [arr[j]!, arr[i]!]
  }
  return arr
}
