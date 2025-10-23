<template>
  <div
    class="bingoBox"
    onclick="this.classList.toggle('is-success'); this.style.borderColor = this.classList.contains('is-success') ? 'var(--c-success)' : ''"
  >
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
    width: 6rem;
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
</style>
