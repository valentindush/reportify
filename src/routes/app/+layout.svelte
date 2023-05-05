<script lang="ts">
    import SideBar from "$lib/components/app/SideBar.svelte";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import AiOutlineUser from "svelte-icons-pack/ai/AiOutlineUser";
    import {Menu} from '@svelteuidev/core'

    const logout = ()=>{
        
    }
</script>

<svelte:head>
    <title>Reportify - app</title>
</svelte:head>
<main class="w-screen h-screen flex overflow-hidden ">
    <div class="max-w-[20rem] w-[20rem]">
        <SideBar />
    </div>
    <div class="w-full overflow-y-auto">
        <div class="h-[4rem] mb-3 shadow w-full flex justify-between sticky top-0 ">
            <div class="">..</div>
            <div class="flex items-center p-4">
                <div class="">John Doe</div>
                <Icon className="text-4xl" src={AiOutlineUser} />
                <Menu>
                    <Menu.Item>Home</Menu.Item>
                    <Menu.Item >Reports</Menu.Item>
                    <Menu.Item >Blueprints</Menu.Item>
                    <Menu.Item on:click={logout} color="red" >Logout</Menu.Item>
                </Menu>
            </div>
        </div>
        <slot />
    </div>
</main>
