<script>
  export let post
</script>

<article class="card">
  <div class="card_left">
    <h2>
      <a href={'/' + post.slug}>{post.title}</a>
    </h2>
    <p>{post.description}</p>
    <div>
      <a href="/">{post.category}</a>
    </div>
  </div>
  <div class="card_right">
    <p>{post.date}</p>
  </div>
</article>
