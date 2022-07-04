<script>
  import '$lib/scss/base.scss'
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
    <h1>%</h1>
  </a>
</header>
<slot />