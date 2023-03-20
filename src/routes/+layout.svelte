<script>
	import './style.css';
	import { fade,fly } from 'svelte/transition';
  import { nomeAluno, count, count0, countFinal } from './stores';
  import Header from './componentes/Header.svelte';
  import Footer from './componentes/Footer.svelte';
  import Progresso from './componentes/Progresso.svelte';

  $: numerical = Number($count)
  
  function retorna() {
    $count0 = numerical;
  }

  let menuLiberado = false;

</script>

<Progresso />
  
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
      <div class="caixaMenu" in:fly="{{ y: 200, delay: 100, duration: 400}}">
        <h1>Olá {$nomeAluno},</h1>
        <h2>Altere seu nome na caixa abaixo:</h2>
        <input type="text" bind:value={$nomeAluno}>
  
        <button class="fechar" in:fade="{{ delay: 500, duration: 200 }}" on:click={() => (menuLiberado = !menuLiberado)}>FECHAR</button>

        <h2>Navegue pelo menu:</h2>
  
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
    
    <button on:click={count0.voltar}>{$count} Clicando aqui, a pessoa volta pra página de onde parou (implementado!)</button>countFinal {countFinal}
    
    <h1>Olá {$nomeAluno}, seja bem vindo!</h1>
    <h2>Número da Página: {$count0} || Anterior Salva: {$count}</h2>

    <slot />

  </main>
  
  <Footer />

<style>

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