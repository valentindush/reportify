<script lang="ts">
    import { isEmail, isValidName } from "$lib/utils/validations";
    import { toast, ToastContainer } from "svelte-toastify";
    
    toast.configure({
        position: "top-right"
    });

    let email = "" ,password = ''

    const handleSignUp = (e: Event) => {
        e.preventDefault()
        
    };

</script>
<svelte:head>
    <title>Login</title>
</svelte:head>
<main class="h-screen flex items-center justify-center">
    <div class="max-w-md w-full">
        <header>
            <h2 class="text-center text-2xl font-semibold">Welcome back</h2>
        </header>
        <form class="w-full mx-auto bg-white p-8 rounded-md shadow-md">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
              <input bind:value={email} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                type="email" id="email" name="email" placeholder="john@example.com">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
              <input bind:value={password} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                type="password" id="password" name="password" placeholder="********">
            </div>
            <button
              class="w-full bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              type="submit">Sign in</button>
          </form>
          <div class="text-center">
            <p>Don't have account <a href="/signup" class="text-blue-600 hover:underline">create one</a></p>
          </div>
    </div>
</main>
<ToastContainer />