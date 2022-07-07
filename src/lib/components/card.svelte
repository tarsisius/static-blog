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
    <a class="date" href="/">
      {post.date}
    </a>
    <a class="category" href="/">
      #{post.category}
    </a>
  </span>
</article>
