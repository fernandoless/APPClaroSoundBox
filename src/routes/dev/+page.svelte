<script>  
	import Counter from '../componentes/Counter.svelte';
  import DragDropZone from '../componentes/DragDropZone.svelte';
  import Interlocutor from '../componentes/Interlocutor.svelte';
</script>

<svelte:head>
  <title>developments • FeAlvarez.dev</title>
</svelte:head>

<h1>CONTEUDO DEEEEV</h1>

<Counter />

<Interlocutor>
	<div slot="name">aasd</div>
	<div slot="email">bob@email.com</div>
	<div slot="phone">12345678</div>
</Interlocutor>

