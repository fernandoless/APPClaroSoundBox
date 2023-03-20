<script lang="ts">
  import { onMount } from 'svelte';

	let scrollPercent = 0, articleElement: HTMLElement;

	onMount(() => {
		articleElement = document.body;
	});

	const onScroll = () => {
		scrollPercent = window.scrollY / articleElement.offsetHeight;
	};
</script>

<svelte:window on:scroll={onScroll} />

<div class="progresso">
	<div class="progresso-barra" style="width:{(scrollPercent ?? 0) * 100 * 2}%" />
</div>