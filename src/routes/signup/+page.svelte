<script lang="ts">
    import { isEmail, isValidName } from "$lib/utils/validations";

    let email = "", fullname = '', password = '', confirmPassword = ''

    const handleSignUp = (e: Event) => {
        e.preventDefault()

        //validate
        if(isEmail(email)) {

        }else if(isValidName(fullname)){

        }else if(isValidName(password)){

        }else if(password !== confirmPassword){

        }else{

        }

        
    };

</script>

<main class="p-24 flex items-center justify-center bg-blue-600 h-screen">
    <div class="form">
        <form on:submit={(e)=>handleSignUp(e)} class="p-4 min-w-[30rem] border border-white rounded-xl" action="" method="post">
            <header>
                <h2 class="text-xl font-semibold text-white text-center"> Create account now</h2>
            </header>
            <div class="fields mt-12">
                <input bind:value={fullname} type="text" placeholder="Full name" class="bg-transparent border-2 text-white placeholder:text-white placeholder:text-opacity-50 border-white border-opacity-50 p-2 block w-full rounded-xl outline-none mt-3">
                <input bind:value={email} type="email" placeholder="Email" class="bg-transparent border-2 text-white placeholder:text-white placeholder:text-opacity-50 border-white border-opacity-50 p-2 block w-full rounded-xl outline-none mt-3">
                <input bind:value={password} type="password" placeholder="Password" class="bg-transparent border-2 text-white placeholder:text-white placeholder:text-opacity-50 border-white border-opacity-50 p-2 block w-full rounded-xl outline-none mt-3">
                <input bind:value={confirmPassword} type="password" placeholder="Comfirm password" class="bg-transparent border-2 text-white placeholder:text-white placeholder:text-opacity-50 border-white border-opacity-50 p-2 block w-full rounded-xl outline-none mt-3">

                <button type="submit" class="bg-white p-2  text-blue-600 font-medium w-full mt-8 rounded-xl">Create account</button>

                <div class="mt-3 text-white text-center">
                    <p>Have an account? <a href="/login" class="underline font-medium">Login here</a></p>
                </div>
            </div>
        </form>
    </div>
</main>
