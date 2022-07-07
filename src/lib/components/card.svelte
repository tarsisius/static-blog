<script>
  export let post
</script>

<article class="card">
  <h2>
    <a href={'/' + post.slug}>{post.title}</a>
  </h2>
  <p>{post.description}</p>
  <span>
    <a class="date" href="/">
      {post.date}
    </a>
    <a class="category" href="/">
      #{post.category}
    </a>
  </span>
</article>
