<script lang="ts">
    import SideBar from "$lib/components/app/SideBar.svelte";
    import Icon from "svelte-icons-pack/Icon.svelte";
</script>

<svelte:head>
    <title>Reportify - app</title>
</svelte:head>
<main class="w-screen h-screen flex overflow-hidden ">
    <div class="max-w-[20rem] w-[20rem]">
        <SideBar />
    </div>
    <div class="w-full overflow-y-auto">
        <div class="h-[4rem] mb-3 shadow w-full flex sticky top-0">
            <div class="">
                <div class="w">ICON</div>
                <div class="">John Doe</div>
            </div>
        </div>
        <slot />
    </div>
</main>
