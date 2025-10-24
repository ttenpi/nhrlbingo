export function mulberry32(seed: number) {
  // ensure a 32-bit unsigned integer seed
  let t = seed >>> 0
  return function () {
    t += 0x6d2b79f5
    // Math.imul is deterministic across engines
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

export function shuffleWithSeed(array: string[], seed: number) {
  const rand = mulberry32(seed)
  const arr = [...array]
  if (arr.length === 0) return arr
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
      ;[arr[i]!, arr[j]!] = [arr[j]!, arr[i]!]
  }
  return arr
}
