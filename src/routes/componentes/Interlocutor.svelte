<script>
	import { fade, fly } from 'svelte/transition';  

  let conversa = false;

</script>


<button class="chat" on:click={() => (conversa = !conversa)}>CHAT</button>


{#if conversa}

  <section class="personagem" in:fly="{{ x: -200, duration: 200 }}" out:fly="{{ x: -200, duration: 200 }}">
    
<button class="fechar" on:click={() => (conversa = !conversa)}>FECHAR</button>
    {#if $$slots.name}
    <div>Name</div>
    <p><slot name="name" /></p>
    {/if}
    {#if $$slots.email}
      <div>Email</div>
      <slot name="email" />
    {/if}
    {#if $$slots.phone}
      <div>Phone</div>
      <slot name="phone" />
    {/if}
  </section>

{/if}


<style>
  .personagem {
    position: fixed;
    height: 200px;
    width: 50%;
    background-color: rgba(49,249,163, .4);
    border: 1px solid rgba(49,249,163, 1);
    bottom: 0;
    left: 0;
  }
</style>