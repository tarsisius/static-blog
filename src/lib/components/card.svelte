<script>
  export let post
</script>

<article class="card">
  <div class="card_left">
    <h2>
      <a href={'/' + post.slug}>{post.metadata.title}</a>
    </h2>
    <p>{post.metadata.description}</p>
    <div>
      <a href="/">{post.metadata.category}</a>
    </div>
  </div>
  <div class="card_right">
    <p>{post.metadata.date}</p>
  </div>
</article>
