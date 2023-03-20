<script>  
	import Counter from './componentes/Counter.svelte';
  import DragDropZone from './componentes/DragDropZone.svelte';
  import Interlocutor from './componentes/Interlocutor.svelte';
</script>

<svelte:head>
  <title>FeAlvarez.dev</title>
</svelte:head>

<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture> 

<h1>Conteúdo geral da página inicial</h1>

<Counter />
<DragDropZone />

<Interlocutor>
	<div slot="name">Ai não</div>
	<div slot="email">tudodeboa@talvez.naosaberemos</div>
	<div slot="phone">12345678</div>
</Interlocutor>

