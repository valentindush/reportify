<script lang="ts">
    import Layout from "./+layout.svelte";

    const reports:{name: string, id: string}[] = [
        {
            name: "Report 1",
            id: "1"
        },
        {
            name: "Report 2",
            id: "2"
        },
        {
            name: "Report 3",
            id: "4"
        },
        {
            name: "Report 4",
            id: "4"
        },
        {
            name: "Report 5",
            id: "5"
        },
        {
            name: "Report 1",
            id: "1"
        },
        {
            name: "Report 2",
            id: "2"
        },
        {
            name: "Report 3",
            id: "4"
        },
        {
            name: "Report 4",
            id: "4"
        },
        {
            name: "Report 5",
            id: "5"
        },

    ] 
</script>

<svelte:head>
    <title>Reportify - Home</title>
</svelte:head>
<main class="p-3">
    <header>
        <h2 class="text-xl font-semibold text-gray-700">Home</h2>
    </header>
    <div class="mt-5">
        <div class="flex items-center justify-between">
            <h3 class="text-gray-700 font-medium">All created report blueprints</h3>
            <div class="flex items-center gap-2">
               <button class="py-2 px-4 bg-blue-600 text-white rounded">Create new blueprint</button>
               <button class="py-2 px-4 bg-white border border-blue-600 text-blue-600 rounded">Create new report</button>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-3 pt-4">
        {#each reports as report}
            <a href={report.id} class= "h-[100px] shadow-md rounded flex items-center justify-center border border-blue-600 border-opacity-25">
                {report.name}
            </a>
        {/each}
        </div>
        <a class="block mt-1 text-sm text-blue-600 underline font-medium" href="/Reports">view all reports</a>
    </div>
    <div class="mt-5">
        <h3 class="text-gray-700 font-medium">Recently created report blueprints</h3>
        <div class="grid grid-cols-5 gap-3 pt-4">
        {#each reports as report}
            <a href={report.id} class= "h-[100px] shadow-md rounded flex items-center justify-center border border-blue-600 border-opacity-25">
                {report.name}
            </a>
        {/each}
        </div>
        <a class="block mt-1 text-sm text-blue-600 underline font-medium" href="/Reports">view all reports</a>
    </div>
</main>