<script>
	// @ts-nocheck
	export let data;
</script>

<svelte:head>
	<title>Whisper: Sent to {data.user}</title>
</svelte:head>

<div class="max-w-lg mx-auto my-48 h-full">
	<h1 class="grid text-2xl font-satoshi font-bold place-items-center text-white mb-10">
		Your whisper has been sent to <span class="text-purple-500">{data.user}</span>
	</h1>
	<div class="grid place-items-center">
		<a
			href="/{data.user}/whisper"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			Send another one
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
		</a>
	</div>
</div>
