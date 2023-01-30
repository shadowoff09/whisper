<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
</script>

<div class="my-24 lg:my-40 grid place-items-center">
  <h1 class="text-2xl font-satoshi font-bold text-white">Welcome to <span class="text-purple-500">Whisper</span></h1>
	<h3 class="mb-10 mt-2 text-xl font-satoshi font-bold text-white">Login with your account</h3>
	<form action="?/login" method="POST" use:enhance class="grid">
		<div class="mb-6 space-y-1 w-56 sm:w-64 md:w-72 lg:w-96">
			<label for="email" class="text-sm font-medium text-white">Your email</label>
			<input
				name="email"
				type="email"
				id="email"
				class="bg-gray-700 border border-gray-600 text-white dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
				placeholder="name@whisper.com"
				required
				autocomplete="email"
			/>
		</div>
		<div class="mb-6 space-y-1 w-56 sm:w-64 md:w-72 lg:w-96">
			<label for="password" class="text-sm font-medium text-white">Your password</label>
			<input
				name="password"
				type="password"
				id="password"
				class="bg-gray-700 border border-gray-600 text-white dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
				required
				autocomplete="current-password"
				placeholder="***************************"
			>
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>Login</button
		>
    
	</form>
</div>
