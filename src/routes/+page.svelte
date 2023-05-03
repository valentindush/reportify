<script>
    import Hero from "$lib/components/Hero.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import { onMount } from "svelte";
    import Layout from "./+layout.svelte";
	import './styles.css';

</script>

<svelte:head>
	<title>Reportify Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="">
	<div class="app h-screen bg-blue-600">
		<NavBar />
		<Hero/>
	</div>
</div>
