<script context="module">
  export const prerender = true
  export const hydrate = true

  export const load = ({ props }) => {
    const posts = props.posts
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
