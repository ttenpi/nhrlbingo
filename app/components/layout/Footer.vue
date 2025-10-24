<template>
  <footer>
    <p>
      <small>tenpi is not associated with NHRL and this is
        just a fan project</small>
    </p>
    <p>
      <small>credits to my octofriends for the suggestions
        on a lot of these boxes</small>
    </p>
    <p>
      <small>designed by tenpi in sweet lake city NL also
        trans rights</small>
    </p>
    <p>
      <small>your info stays local, nothing's sent
        online</small>
    </p>
    <p class="bingoDebug">
      <small><code>bingoLinesChecksum: {{ checksum }}, seed: {{ seed }}</code></small>
    </p>
  </footer>
</template>

<script setup lang="ts">
  const { seed } = useGetSeed()
  const { checksum } = useBingoLines()
</script>

<style>
  footer {
    text-align: center;
    margin-top: 1rem;
    color: var(--c-muted);
    border-top: var(--b-dashed);
    padding: .5rem;
  }
</style>
