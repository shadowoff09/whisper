<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	let query = '';

	function submitSearch() {
		if (query) {
			goto(`/${query}/whisper`);
			console.log(`/${query}/whisper`);
		}
	}

</script>

<svelte:head>
	<title>Whisper: Search</title>
</svelte:head>

<form on:submit|preventDefault={submitSearch}>
	<div class="grid place-items-center mt-64 space-y-5">
		<div class="form-control lg:w-3/5 md:w-3/4 sm:w-3/4">
			<label for="query" class=" mb-2 text-sm font-medium text-white dark:text-white">Search Bar</label>
			<input
				class="bg-gray-700 border border-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				bind:value={query} placeholder="Search for a user"
			/>
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
			Search
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
