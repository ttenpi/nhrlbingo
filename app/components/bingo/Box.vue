<template>
  <div class="bingoBox"
    @click="($event.currentTarget as HTMLElement | null)?.classList.toggle('is-success')">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    text?: string
  }>()
</script>

<style>
  .bingoBox {
    border: 4px solid var(--ctp-surface0);
    max-width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    box-sizing: border-box;
    font-size: 0.9rem;
    line-height: 1rem;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s, color 0.2s;
    border-radius: .8rem;
  }

  .bingoBox:hover {
    background-color: var(--ctp-surface1);
  }

  .bingoBox:active {
    background-color: var(--ctp-surface2);
  }

  .bingoBox.is-success {
    border-color: var(--c-success);
  }
</style>
