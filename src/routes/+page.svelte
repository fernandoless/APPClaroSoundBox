<script>  
	import Counter from './componentes/Counter.svelte';
  import DragDropZone from './componentes/DragDropZone.svelte';
  import Interlocutor from './componentes/Interlocutor.svelte';
</script>

<svelte:head>
  <title>FeAlvarez.dev</title>
</svelte:head>

<h1>Conteúdo geral da página inicial</h1>

<Counter />
<DragDropZone />

<Interlocutor>
	<div slot="name">Ai não</div>
	<div slot="email">tudodeboa@talvez.naosaberemos</div>
	<div slot="phone">12345678</div>
</Interlocutor>

