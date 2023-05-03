<script lang="ts">
    import { onMount } from 'svelte';

    const navLinks: { name: string; url: string }[] = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Contact",
            url: "/contact",
        },
    ];

    let activeLink: string = navLinks[0].name;

    onMount(() => {
        document.title = activeLink;
    });

    let navActive = false
</script>

<nav class="p-4 flex items-center justify-between pr-24 pl-28 md:hidden">
    <!-- TailwindCSS navbar -->
    <div class="flex items-center gap-8">
        {#each navLinks as navLink}
            <a on:click={() => activeLink = navLink.name}
               class="{activeLink === navLink.name ? '' : 'text-white'} hover:text-blue-400 transition-colors"
               href="{navLink.url}">
                {navLink.name}
            </a>
        {/each}
    </div>
    <div class="flex items-center gap-6">
        <a class="p-2 px-5 rounded-full text-white bg-blue-500 font-medium" href="/signup">Get started</a>
        <a class="p-2 px-5 rounded-full bg-white border border-blue-500 text-blue-500 font-medium" href="/login">Login</a>
    </div>
</nav>
<button on:click={()=>navActive = true} class="absolute hidden md:block text-red-500 right-5">
    Open
</button>
{#if navActive}
    <nav class={`hidden md:block p-3 absolute bg-black w-screen h-screen bg-opacity-40 backdrop-blur-sm`}>
        <button on:click={()=>navActive = false} class="absolute text-red-500 right-5">
            Close
        </button>
        <div class="flex flex-col gap-3 just">
            {#each navLinks as navLink}
                <a on:click={() => activeLink = navLink.name}
                class="{activeLink === navLink.name ? '' : 'text-white'} hover:text-blue-400 transition-colors"
                href="{navLink.url}">
                    {navLink.name}
                </a>
            {/each}
        </div>
        <div class="flex gap-3 mt-3">
            <a class="p-2 px-5 rounded-full text-white bg-blue-500 font-medium w-fit" href="/signup">Get started</a>
            <a class="p-2 px-5 rounded-full bg-white border border-blue-500 text-blue-500 font-medium w-fit" href="/login">Login</a>
        </div>
    </nav>
{/if}
