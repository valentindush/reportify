<script lang="ts">
    import type { Course, CourseCategory } from "$lib/types";

    import { Input, Modal } from "@svelteuidev/core";
    /**
     * Title
     * Logo
     * 
     *CourseCategoryies[belongsTo blueprintCat]
      Course -->belongsTo[courseCategory] contains [CAT EX TOT]

    */
    let courseModelOpen = false;
    let title: string, logo: string;
    

    let courseCategories: CourseCategory[] = [];
    let courses: Course[] = [];

    //state
    const addCategory = () => {

    }

    const addCourse = () => {

    }

</script>

<svelte:head>
    <title>Reportify - Blueprints</title>
</svelte:head>
<main class="p-3 pb-12">
    <header>
        <h2 class="text-xl font-semibold text-gray-700">
            New report blueprint
        </h2>
    </header>
    <div class="mt-5">
        <form action="#" method="post">
            <div class="p-4 border shadow rounded">
                <h2 class="text-lg text-gray-600 font-medium">
                    Blueprint Information
                </h2>

                <div class="fields mt-4 flex flex-col gap-2">
                    <div class="">
                        <input
                            class="p-2 text-sm text-gray-700 w-full outline-none border-2 border-gray-400 focus:border-blue-400 transition-colors rounded"
                            type="text"
                            placeholder="Title"
                            bind:value={title}
                        />
                    </div>
                    <div class="">
                        <input
                            class="p-2 text-sm text-gray-700 outline-none border-2 border-gray-400 focus:border-blue-400 transition-colors rounded"
                            type="file"
                            accept="image/*"
                            placeholder="Title"
                            bind:value={title}
                        />
                    </div>
                </div>
            </div>

            <div class="p-4 border shadow rounded mt-4">
                <h2 class="text-lg text-gray-600 font-medium">
                    Course Categories
                </h2>

                <div class="fields mt-4 flex flex-col gap-2">
                    <div class="">
                        <div class="cat pb-2">
                            <p
                                class="p-1 text-sm bg-gray-200 mt-1 px-2 rounded w-fit"
                            >
                                CAT 1
                            </p>
                            <p
                                class="p-1 text-sm bg-gray-200 mt-1 px-2 rounded w-fit"
                            >
                                CAT 1
                            </p>
                            <p
                                class="p-1 text-sm bg-gray-200 mt-1 px-2 rounded w-fit"
                            >
                                CAT 1
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <input
                                class="p-2 max-w-sm w-full text-sm text-gray-700 outline-none border-2 border-gray-400 focus:border-blue-400 transition-colors rounded"
                                type="text"
                                placeholder="Type category"
                                bind:value={title}
                            />
                            <button
                                type="button"
                                class="bg-blue-600 p-2 px-3 text-white text-sm rounded"
                                >Add New</button
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 border shadow rounded mt-4">
                <h2 class="text-lg text-gray-600 font-medium">Courses</h2>

                <div class="fields mt-4 flex flex-col gap-2">
                    <div class="">
                        <div class="cat pb-2 grid grid-cols-5 gap-4">
                            <div
                                class="p-4 text-sm bg-gray-200 mt-1 px-4 rounded"
                            >
                                <p>
                                    Course: <span class="font-semibold"
                                        >Course 1</span
                                    >
                                </p>
                                <p>
                                    Category: <span class="font-semibold"
                                        >Cat 1</span
                                    >
                                </p>
                                <div class="mt-5">
                                    <p class="text-sm text-gray-600">
                                        CAT: <span class="font-semibold">5</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        EXAM: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        TOTAL: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                </div>
                            </div>
                            <div
                                class="p-4 text-sm bg-gray-200 mt-1 px-4 rounded"
                            >
                                <p>
                                    Course: <span class="font-semibold"
                                        >Course 1</span
                                    >
                                </p>
                                <p>
                                    Category: <span class="font-semibold"
                                        >Cat 1</span
                                    >
                                </p>
                                <div class="mt-5">
                                    <p class="text-sm text-gray-600">
                                        CAT: <span class="font-semibold">5</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        EXAM: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        TOTAL: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                </div>
                            </div>
                            <div
                                class="p-4 text-sm bg-gray-200 mt-1 px-4 rounded"
                            >
                                <p>
                                    Course: <span class="font-semibold"
                                        >Course 1</span
                                    >
                                </p>
                                <p>
                                    Category: <span class="font-semibold"
                                        >Cat 1</span
                                    >
                                </p>
                                <div class="mt-5">
                                    <p class="text-sm text-gray-600">
                                        CAT: <span class="font-semibold">5</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        EXAM: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        TOTAL: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                </div>
                            </div>
                            <div
                                class="p-4 text-sm bg-gray-200 mt-1 px-4 rounded"
                            >
                                <p>
                                    Course: <span class="font-semibold"
                                        >Course 1</span
                                    >
                                </p>
                                <p>
                                    Category: <span class="font-semibold"
                                        >Cat 1</span
                                    >
                                </p>
                                <div class="mt-5">
                                    <p class="text-sm text-gray-600">
                                        CAT: <span class="font-semibold">5</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        EXAM: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        TOTAL: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                </div>
                            </div>
                            <div
                                class="p-4 text-sm bg-gray-200 mt-1 px-4 rounded"
                            >
                                <p>
                                    Course: <span class="font-semibold"
                                        >Course 1</span
                                    >
                                </p>
                                <p>
                                    Category: <span class="font-semibold"
                                        >Cat 1</span
                                    >
                                </p>
                                <div class="mt-5">
                                    <p class="text-sm text-gray-600">
                                        CAT: <span class="font-semibold">5</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        EXAM: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        TOTAL: <span class="font-semibold"
                                            >10</span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Modal
                            centered
                            opened={courseModelOpen}
                            on:close={() => (courseModelOpen = false)}
                        >
                            <header>
                                <h2 class="text-lg font-medium text-gray-600">
                                    New course
                                </h2>
                            </header>
                            <div class="mt-4 flex flex-col gap-3">
                                <input
                                    class="p-2 max-w-sm w-full text-sm text-gray-700 outline-none border-2 border-gray-400 focus:border-blue-400 transition-colors rounded"
                                    type="text"
                                    placeholder="Course Name"
                                    bind:value={title}
                                />
                                <select
                                    class="p-2 max-w-sm w-full text-sm text-gray-700 outline-none border-2 border-gray-400 focus:border-blue-400 transition-colors rounded"
                                    name=""
                                    id=""
                                >
                                    <option value=""
                                        >Select course category</option
                                    >
                                    <option value=""
                                        >Select course category</option
                                    >
                                    <option value=""
                                        >Select course category</option
                                    >
                                </select>
                                <div class="flex gap-3">
                                    <input
                                        class="p-2 text-sm w-full text-gray-700 outline-none border-2 border-gray-400 focus:border-blue-400 transition-colors rounded"
                                        type="number"
                                        placeholder="CAT"
                                    />
                                    <input
                                        class="p-2 text-sm w-full text-gray-700 outline-none border-2 border-gray-400 focus:border-blue-400 transition-colors rounded"
                                        type="number"
                                        placeholder="EXAM"
                                    />
                                    <input
                                        class="p-2 text-sm w-full text-gray-700 outline-none border-2 border-gray-400 focus:border-blue-400 transition-colors rounded"
                                        type="number"
                                        placeholder="TOTAL"
                                    />
                                </div>
                                <div class="mt-5">
                                    <button
                                        type="button"
                                        on:click={() =>
                                            (courseModelOpen = false)}
                                        class="bg-blue-600 p-3 text-white text-sm rounded"
                                        >Add Course</button
                                    >
                                </div>
                            </div>
                        </Modal>
                        <div class="flex gap-3 mt-4">
                            <button
                                type="button"
                                on:click={() => (courseModelOpen = true)}
                                class="bg-blue-600 p-3 text-white text-sm rounded"
                                >Add New</button
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <button
                    class="bg-blue-600 p-3 text-white text-sm rounded"
                    type="submit">Save Blueprint</button
                >
            </div>
        </form>
    </div>
</main>
