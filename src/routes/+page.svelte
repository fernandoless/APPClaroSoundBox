<script>  
  import { pagina, pagSalva } from './stores';

	import Intro from "./paginas/Intro.svelte";
  import S01 from './paginas/s01.svelte';
</script>

<svelte:head>
  <title>[CLARO] APP Sound Box</title>
</svelte:head>

{#if $pagina >= 0 && $pagina < 2}
  <Intro />
  {#if $pagina == 1}
    <S01 />
  {/if}
{/if}

