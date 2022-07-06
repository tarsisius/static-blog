<script context="module">
  export const load = ({ props }) => {
    const post = props.post
    if (!post) {
      return {
        status: 404,
      }
    }
    return {
      props: {
        post,
      },
    }
  }
</script>

<script>
  export let post
</script>

<main class="main">
  <div class="detail">
    <div>
      <span class="date">{post.metadata.date}</span>
      <span class="category">{post.metadata.category}</span>
    </div>
    <h1>{post.metadata.title}</h1>
    <article>
      {@html post.html}
    </article>
  </div>
</main>
