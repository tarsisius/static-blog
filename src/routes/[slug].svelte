<script context="module">
  export async function load({ fetch, params }) {
    const res = await fetch(`/${params.slug}.json`)
    
    if (!res.ok) {
      return {
        status: 404,
        error: 'Post not found',
      }
    }

    return {
      props: {
        post: await res.json(),
      },
    }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <meta name="keywords" content={post.category} />
  <meta name="description" content={post.description} />
  <meta property="og:description" content={post.description} />
  <meta name="twitter:description" content={post.description} />
  <meta property="og:title" content={post.title} />
  <meta name="twitter:title" content={post.title} />
  <title>{post.title}</title>
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
