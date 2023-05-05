<script lang="ts">
    const sideBarItems: string[] = [
        "Home",
        "Reports",
        "Reports Blueprints"
    ];

    let active = sideBarItems[0]
</script>

<nav class="max-w-[20rem] w-full h-screen shadow-md p-4 bg-slate-800">
    <header class="p-2">
        <h2 class="text-white text-2xl font-bold">Reportify</h2>
    </header>
    <div class="flex flex-col gap-2 mt-12">
        {#each sideBarItems as item}
            <a on:click={()=>active=item} class={`p-2 text-white  rounded ${active === item? "bg-blue-600" : ""}`} href={`/app/${item !=='Home'? item.split(' ').join(''): ""}`}>{item}</a>
        {/each}
    </div>
</nav>
