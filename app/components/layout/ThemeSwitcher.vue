<template>
  <div>
    <label for="colorModePreference">theme</label>
    <select v-model="$colorMode.preference"
      id="colorModePreference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="latte">🌻 Latte</option>
      <option value="frappe">🪴 Frappe</option>
      <option value="macchiato">🌺 Macchiato</option>
      <option value="mocha">🌿 Mocha</option>
    </select>
  </div>
</template>

<style></style>
