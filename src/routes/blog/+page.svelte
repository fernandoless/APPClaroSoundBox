<script>
  export let data;
  const { posts } = data;
</script>

<h1>Webjeda Blog</h1>

{#each posts as post}
  <a href="/blog/{post.id}">
    <h2>id: {post.id} {post.title.rendered}</h2>
  </a>
{/each}