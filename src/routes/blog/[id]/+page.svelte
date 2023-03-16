<script>
  export let data;
  const { post } = data;
</script>

<h2>daqui preciso saber como puxar as informações como artistas e categorias, etc.</h2>

<div class="container">
  <h1>id: {post.id} {post.title.rendered}</h1>
  <h3>{post.format}</h3>
</div>