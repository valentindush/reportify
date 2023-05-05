<script lang="ts">


    /**
     * Title
     * Logo
     * 
     *CourseCategoryies[belongsTo blueprintCat]
      Course -->belongsTo[courseCategory] contains [CAT EX TOT]

    */

   let title: string, logo:string
   let courseCategoryies
</script>

<svelte:head>
    <title>Reportify - Blueprints</title>
</svelte:head>
<main class="p-3">
    <header>
        <h2 class="text-xl font-semibold text-gray-700">New report blueprint</h2>
    </header>
    <div class="mt-5">
        <div class="flex items-center justify-between">
            <h3 class="text-gray-700 font-medium">All created report blueprints</h3>
            <button class="py-2 px-4 bg-blue-600 text-white rounded">Create new blueprint</button>
        </div>
        <div class="grid grid-cols-5 gap-3 pt-4">
        </div>
    </div>

</main>