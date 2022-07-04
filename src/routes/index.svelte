<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/.json')
    if (!res.ok) {
      return {
        status: 404,
      }
    }
    const { posts } = await res.json()
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

<main class="main">
  {#each posts as post}
    <Card {post} />
  {/each}
</main>
