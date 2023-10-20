<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	export let form;
</script>

<svelte:head>
	<title>Whisper: Login</title>
</svelte:head>

<div class="my-20 lg:my-40 grid place-items-center">
	<h1 class="text-2xl font-space-mono font-bold text-white">
		Welcome to <span
			class="font-space-mono font-black bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-500 to-indigo-500
							animate-text select-none">WHISPER</span
		>
	</h1>
	<h3 class="mb-10 mt-2 text-xl font-space-mono font-bold text-white">Login with your account</h3>
	<form action="?/login" method="POST" use:enhance class="grid">
		<div class="mb-2 space-y-1 md:w-72 lg:w-96">
			<label for="email" class="text-sm font-medium text-white font-space-mono">Your email</label>
			<input
				name="email"
				type="email"
				id="email"
				class="bg-gray-700 border font-space-mono border-gray-600 text-white dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
				placeholder="name@whisper.com"
				required
				autocomplete="email"
			/>
		</div>
		<div class="mb-6 space-y-1 md:w-72 lg:w-96">
			<label for="password" class="text-sm font-medium text-white font-space-mono"
				>Your password</label
			>
			<input
				name="password"
				type="password"
				id="password"
				class="bg-gray-700 font-space-mono border border-gray-600 text-white dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
				required
				autocomplete="current-password"
				placeholder="***************"
			/>
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-space-mono rounded-lg text-sm px-5 py-2.5 text-center md:w-72 lg:w-96"
			>Login</button
		>
		<p class="mt-2 text-white text-sm font-space-mono">
			Don't have an account? <a href="/register" class="text-blue-500">Sign up</a>
		</p>

		{#if form?.success === false}
			<div
				class="mt-4 flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 gap-2 rounded-md"
				role="alert"
			>
				<svg
					style="color: white"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
						fill="white"
					/>
					<path
						d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
						fill="white"
					/>
				</svg>
				<p>{form.error}</p>
			</div>
		{/if}
	</form>
</div>
