<script>
	import './style.css';
	import { fade,fly } from 'svelte/transition';
  import { nomeAluno, pagina, pagSalva } from './stores';

  let menuLiberado = false;
</script>
  
  <!-- Conteúdo -->
  <main>
    <!-- Navegação Menu Principal ^ > -->
    <button class="menu-principal" 
            on:click={() => (menuLiberado = !menuLiberado)}>
            <img src="./img/menu.svg" height="20" alt="">
    </button>
    <slot />
  </main>
  

  <!-- Menu Principal Aberto -->
  {#if menuLiberado}
    <nav class="principal" in:fade="{{ duration: 200 }}" out:fade="{{ duration: 80 }}">
  
      <button class="fechar" 
              in:fade="{{ delay: 500, duration: 200 }}" 
              on:click={() => (menuLiberado = !menuLiberado)}>
              <img src="./img/menu.svg" height="20" alt="">
      </button>
      
      <div class="caixaMenu" in:fly="{{ y: 200, delay: 100, duration: 400}}">

        <div>
          <h2>Número da Página: {$pagina}</h2>
          <h2>Anterior Salva: {$pagSalva}</h2>
          <button on:click={pagina.voltar} on:click={() => (menuLiberado = !menuLiberado)}>
            {$pagSalva} Voltar de onde parou 
          </button>
        </div>
        
  
      </div>
    </nav>
  {/if}


<style>

  main {
    position: relative;
    flex: 1;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2B2B29;
    padding: 0;
    box-sizing: border-box;
    
    /* margem de conteudo */
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

</style>