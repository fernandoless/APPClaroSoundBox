<script>
// @ts-nocheck

  import { pagina } from '../stores';

// @ts-ignore
function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

</script>

<img src="./img/claro_branco.svg" height="50" alt="">

<div style="position:relative;">
  <img src="./img/s00_0.png" alt="" style="position:absolute;">
  <img src="./img/s00_1.png" alt="" style="position:relative;">
</div>

<img src="./img/waves.png" alt="" >

<button class="glass" href="#s01" on:click={pagina.intro} on:click|preventDefault={scrollIntoView}>Iniciar</button>
