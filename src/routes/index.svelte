<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/.json')
    const { posts } = await res.json()
    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  import Card from '$lib/card.svelte'
  export let posts
</script>

<svelte:head>
  <meta name="keywords" content="blog" />
  <meta name="description" content="blognya aryo" />
  <meta property="og:description" content="blognya aryo" />
  <meta name="twitter:description" content="blognya aryo" />
  <meta property="og:title" content="blognya aryo" />
  <meta name="twitter:title" content="blognya aryo" />
  <title>Blog</title>
</svelte:head>

<main class="main">
  {#each posts as post}
    <Card {post} />
  {/each}
</main>
