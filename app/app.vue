<template>
  <div class="mainContainer">
    <LayoutHeader />
    <BingoInput />
    <BingoCard />
    <LayoutFooter />
  </div>
</template>

<style>
  body {
    background: var(--ctp-crust);
    color: var(--ctp-text);
  }

  #__nuxt {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .mainContainer {
    max-block-size: fit-content;
    max-inline-size: fit-content;
    background: var(--ctp-mantle);
    border-radius: 1rem;
    margin-block: 2rem;
    margin-inline: 0.5rem;
  }
</style>
