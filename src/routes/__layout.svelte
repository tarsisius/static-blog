<script>
  import '../app.css'
  import 'highlight.js/styles/github.css'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header class="header">
  <a href="/">
    <h1>T</h1>
  </a>
</header>

<slot />

<footer>
  <a href="/">about</a>
  <a href="/">contact</a>
</footer>
