<script lang="ts">
    import { toast, ToastContainer } from "svelte-toastify";
    import { isEmail, isValidName, isPassword } from "$lib/utils/validations";

    toast.configure({
        position: "top-right"
    });

    let email = "", fullname = '', password = '', confirmPassword = ''

    const handleSignUp = (e: Event) => {
        e.preventDefault()
        //validate
        if(!isEmail(email)) {
            toast.error("Invalid email address")
            
        }else if(!isValidName(fullname)){
            toast.error("Invalid name")
        }else if(!isPassword(password)){
            toast.error("Invalid password")
        }else if(password !== confirmPassword){
            toast.error("Password do not match")
        }else{

        }

        
    };

</script>

<svelte:head>
    <title>Create account</title>
</svelte:head>

<main class="h-screen flex items-center justify-center">
    <div class="max-w-md w-full">
        <header>
            <h2 class="text-center text-2xl font-semibold">Create a new account</h2>
        </header>
        <form on:submit={(e)=>handleSignUp(e)} class="w-full mx-auto bg-white p-8 rounded-md shadow-md">
            <div class="mb-4 m-f">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
              <input bind:value={fullname} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                type="text" id="name" name="name" placeholder="John Doe">
            </div>
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
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
              <input bind:value={confirmPassword} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                type="password" id="confirm-password" name="confirm-password" placeholder="********">
            </div>
            <button
              class="w-full bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              type="submit">Create account</button>
          </form>
          <div class="text-center">
            <p>Already have account <a href="/login" class="text-blue-600 hover:underline">login here</a></p>
          </div>
    </div>
</main>
<ToastContainer />