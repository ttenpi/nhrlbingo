export function useBingoLines() {
  const lines = ref<string[]>([])
  const checksum = ref<string | null>(null) // short checksum (hex)

  onMounted(async () => {
    const res = await fetch('/boxes.txt')
    const text = await res.text()
    lines.value = text.split('\n').map(l => l.trim()).filter(Boolean)
    checksum.value = await sha256Short(text, 8) // first 8 hex chars
  })

  async function sha256Short(str: string, length = 8): Promise<string> {
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      const data = new TextEncoder().encode(str)
      const hashBuffer = await crypto.subtle.digest('SHA-256', data)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const hex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
      return hex.slice(0, length)
    }

    // fallback: simple FNV-1a 32-bit -> hex
    let h = 2166136261 >>> 0
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i)
      h = Math.imul(h, 16777619) >>> 0
    }
    return (h >>> 0).toString(16).padStart(8, '0').slice(0, length)
  }

  return { lines, checksum }
}
