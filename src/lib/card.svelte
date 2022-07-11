<script>
  export let post
</script>

<article class="card">
  <a class='title' href={'/' + post.slug}>
    <h1>
      {post.title}
    </h1>
  </a>
  <p>{post.description}</p>
  <span>
    <p class="date">
      {post.date}
    </p>
    <a class="category" href="/">
      #{post.category}
    </a>
  </span>
</article>
