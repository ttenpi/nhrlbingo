<template>
  <main class="bingoCard">
    <BingoBox v-for="(line, index) in bingoLines"
      :key="index" :text="line" />
  </main>
</template>

<script setup lang="ts">
  const { trigger } = useTrigger()
  const { seed } = useGetSeed()
  const { lines } = useBingoLines()

  const bingoLines = ref<string[]>([])

  function generateBingoCard() {
    if (!lines.value.length) return
    const shuffled = shuffleWithSeed(lines.value, seed.value)
    bingoLines.value = shuffled.slice(0, 25) // pick first 25 unique lines
  }

  // Generate on first load
  watch(lines, generateBingoCard, { immediate: true })

  // Regenerate when trigger fires
  watch(trigger, (newVal) => {
    if (newVal) generateBingoCard()
  })
</script>

<style>
  .bingoCard {
    display: grid;
    grid-template-columns: repeat(5, minmax(5rem, 1fr));
    grid-template-rows: repeat(5, minmax(5rem, 1fr));
    gap: 0.5rem;
    padding: 1rem;
  }
</style>
