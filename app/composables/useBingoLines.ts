export function useBingoLines() {
  const lines = ref<string[]>([])

  onMounted(async () => {
    const res = await fetch('/boxes.txt')
    const text = await res.text()
    lines.value = text.split('\n').map(l => l.trim()).filter(Boolean)
  })

  return { lines }
}
