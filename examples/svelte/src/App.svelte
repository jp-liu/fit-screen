<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import FitScreen from './lib/FitScreen.svelte'

  let width = 1920
  let height = 1080
  const changeWidth = () => {
    width += 1
  }
  const changeHeight = () => {
    width += 1
  }
</script>

<FitScreen {width} {height} mode="fit">
  <main>
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>
    <h1>Vite + Svelte</h1>

    <div class="card">
      <Counter />
    </div>

    <div class="card">
      <input bind:value={width} />
      <button on:click={changeWidth}>Change design width</button>
    </div>

    <div class="card">
      <input bind:value={height} />
      <button on:click={changeHeight}>Change design height</button>
    </div>

    <p>
      Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
    </p>

    <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
  </main>
</FitScreen>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
