<script>
  export let post
</script>

<svelte:head>
  <meta name="keywords" content={post.category} />
  <meta name="description" content={post.description} />
  <meta property="og:description" content={post.description} />
  <meta name="twitter:description" content={post.description} />
  <title>{post.title}</title>
  <meta property="og:title" content={post.title} />
  <meta name="twitter:title" content={post.title} />
</svelte:head>

<main class="main">
  <div class="detail">
    <div>
      <span class="date">{post.date}</span>
      <span class="category">{post.category}</span>
    </div>
    <h1>{post.title}</h1>
    <article>
      {@html post.html}
    </article>
  </div>
</main>
