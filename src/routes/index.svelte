<script context="module">
  export const load = async ({ props }) => {
    const posts = await props.posts
    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  import Card from '$lib/components/card.svelte'
  export let posts
</script>

<svelte:head>
  <meta name="keywords" content="blog" />
  <meta name="description" content="blognya aryo" />
  <meta property="og:description" content="blognya aryo" />
  <meta name="twitter:description" content="blognya aryo" />
  <title>Blog</title>
  <meta property="og:title" content="blognya aryo" />
  <meta name="twitter:title" content="blognya aryo" />
</svelte:head>

<main class="main">
  {#each posts as post}
    <Card {post} />
  {/each}
</main>
