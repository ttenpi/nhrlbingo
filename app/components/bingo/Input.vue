<template>
  <div class="bingoInput">
    <label for="username">
      discord username to randomize
      {{ new Date().toLocaleString('en-US', { month: 'long' }).toLowerCase() }}
      bingo card
    </label>
    <form class="bingoInputInputs" @submit.prevent="activate">
      <input id="username" name="username" type="text"
        v-model="username" placeholder="@yourusername"
        inputmode="text"
        pattern="^@?[\w._]{2,32}$"
        required />
      <button @click="activate" type="submit">Generate</button>
    </form>
    <!-- <p class="bingoInputDebug">
      <small><code>username: {{ username }}, datevalue:
        {{ datevalue }}, combinedSeed:
        {{ combinedSeed }}</code></small>
    </p> -->
  </div>
</template>

<script setup lang="ts">
  const username = ref<string>('')
  const datevalue = `${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}`
  const combinedSeed = computed(() => {
    const cleaned = username.value.replace(/@/g, '').toLowerCase()
    return `${cleaned}#${datevalue}`
  })

  const { seed } = useGetSeed()
  watch(combinedSeed, (newSeed) => {
    let hash = 0
    for (let i = 0; i < newSeed.length; i++) {
      const char = newSeed.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash |= 0
    }
    seed.value = hash
  }, { immediate: true })

  const { activate } = useTrigger()
</script>

<style>
  .bingoInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-block-end: 1rem;
    padding: .5rem;
    border-block-end: var(--b-dashed);
  }

  .bingoInputInputs {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: var(--ctp-surface0);
    color: var(--ctp-text);
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: border-color .2s ease-in-out;
  }

  input:valid + button {
    border-color: var(--ctp-mauve);
  }

  label {
    font-size: .9rem;
    display: block
  }

  input[type="text"] {
    padding: 0.5rem;
    border: 2px solid var(--ctp-surface0);
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: var(--ctp-mantle);
    color: var(--ctp-text);
    width: fit-content;
  }

  input:invalid {
    border-color: var(--c-danger);
  }
</style>
