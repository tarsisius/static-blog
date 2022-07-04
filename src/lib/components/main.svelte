<div class="layout">
  <div class="header">
    <a href="/">
      <h1>Blog</h1>
    </a>
  </div>
  <slot />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    width: 100%;
    max-width: var(--mw-container);
    margin: auto;
    padding: 0 1rem;
  }
  a {
    margin: 3rem auto;
    padding: 1rem 0;
  }

  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 2.75rem;
    cursor: pointer;
  }
</style>
