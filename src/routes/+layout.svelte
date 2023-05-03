<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import NavBar from "$lib/components/NavBar.svelte";
    import { onMount } from "svelte";
	import "./styles.css";
	export let title:string;
 
	onMount(() => {
		document.title = title;
	});
</script>

<main>
	<slot />
</main>
