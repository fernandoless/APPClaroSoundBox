<script>
	import './css/style.css';
	import { fade } from 'svelte/transition';
  import { nomeAluno, count, count0, } from './stores';
  import Header from './componentes/Header.svelte';
  import Footer from './componentes/Footer.svelte';

  let numerofinal = Number($count)
  
  function retorna() {
    $count0 += numerofinal;
  }

  let menuLiberado = false;

</script>

<div class="app">
  
  <!-- Header, logo, Título, Capítulo, etc.-->
  <Header />

  <!-- Navegação Menu Principal ^ > -->
  <button class="menu-principal" on:click={() => (menuLiberado = !menuLiberado)}>MENU</button>

  <!-- Navegação Passa Página v > -->
  <nav class="paginas">
    <button on:click={count0.decrement}>  voltar </button>
    <button on:click={count0.reset}>home</button>
    <button on:click={count0.increment}> avançar </button>
  </nav>


  <!-- Menu Principal Aberto -->
  {#if menuLiberado}
    <nav class="principal" in:fade="{{ duration: 200 }}" out:fade="{{ duration: 80 }}">
      <div>
        <h1>Nome: {$nomeAluno}</h1>
        <input type="text" bind:value={$nomeAluno}>
  
        <button class="fechar" on:click={() => (menuLiberado = !menuLiberado)}>FECHAR</button>
  
        <ul>
          <li><a on:click={() => (menuLiberado = !menuLiberado)} href="/">Home</a></li>
          <li><a on:click={() => (menuLiberado = !menuLiberado)} href="/dev">DEV</a></li>
          <li><a on:click={() => (menuLiberado = !menuLiberado)} href="/dev/svelte">DEV > Svelte</a></li>
          <li><a on:click={() => (menuLiberado = !menuLiberado)} href="/blog">JSON</a></li>
        </ul>
  
      </div>
    </nav>
  {/if}
  
  
  <!-- Conteúdo -->
  <main>
    
    <button on:click={count0.voltar}>{$count} Clicando aqui, a pessoa volta pra página de onde parou (ainda a ser implementado)</button>
    
    <h1>Olá {$nomeAluno}, seja bem vindo!</h1>
    <h2>Número da Página: {$count0} || Anterior Salva: {$count}</h2>

    <slot />

  </main>
  
  <Footer />
</div>

<style>
  
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
    background-color: rgba(49,221,244, .4);
    border: 1px solid rgba(49,221,244, 1);
  }

main {
		flex: 1;
		display: flex;
		min-height: 100vh;
		flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(229,14,163, .3);
    border: 1px solid rgba(229,14,163, 1);
		padding: 1rem;
		box-sizing: border-box;
    
    /* margem de conteudo */
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
	}

</style>