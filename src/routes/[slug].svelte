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
      <span class="date">{post.date}</span>
      <span class="category">{post.category}</span>
    </div>
    <h1>{post.title}</h1>
    <article>
      {@html post.html}
    </article>
  </div>
</main>
