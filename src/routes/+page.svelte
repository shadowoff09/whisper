<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { toast, SvelteToast } from '@zerodevx/svelte-toast';
	import { redirect } from '@sveltejs/kit';
	let query = '';

	function submitSearch() {
		if (query) {
			goto(`/${query}/whisper`);
			console.log(`/${query}/whisper`);
		}
	}

	let isShowed = false; // Define isShowed outside the conditional block

	if ($page.url.searchParams.get('success')) {
  // Check if the toast has already been shown
		if (!isShowed) {
			// Push the toast to the page
			toast.push('Logged in Successfully', {
				target: 'new',
				onpop: () => {
					// Set the `isShowed` variable to `true`
					const isShowed = true;
				},
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A',
				},
			});
		}
}
</script>

<svelte:head>
	<title>Whisper: Search</title>
</svelte:head>

<div>
	<div class="wrap">
		<SvelteToast target="new" options={{ initial: 0, intro: { y: -64 } }} />
	</div>
	<div class="grid place-items-center mt-32">
		<h1
			class="text-5xl sm:text-6xl md:text-7xl font-space-mono font-black bg-gradient-to-r bg-clip-text text-transparent
							from-blue-500 via-purple-500 to-indigo-500
							animate-text select-none"
		>
			WHISPER
		</h1>
		<p class="text-white font-space-mono font-normal text-md sm:text-lg mt-10">
			Speak Freely, Stay Anonymous
		</p>
	</div>

	<form on:submit|preventDefault={submitSearch}>
		<div class="grid place-items-center mt-32 space-y-5">
			<div class="form-control lg:w-3/5 md:w-3/4 w-full grid place-items-center">
				<input
					class="bg-gray-700 border border-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					bind:value={query}
					placeholder="Search for a user"
					name="query"
					id="query"
					type="text"
					required
				/>
			</div>
			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Search User
				<svg
					aria-hidden="true"
					class="w-5 h-5 ml-2 -mr-1"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
	</form>
</div>
