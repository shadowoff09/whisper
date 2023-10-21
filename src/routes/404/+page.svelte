<script>
	// @ts-nocheck
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Whisper: 404</title>
</svelte:head>

<div class="grid place-items-center mx-10 space-y-1">
	<h1 class="mt-32 font-tanker text-9xl select-none">404</h1>
	{#if $page.url.searchParams.get('error') === 'UserNotFound'}
		<h2 class="font-satoshi text-lg text-red-400 select-none text-center">
			Sorry, the user you are looking for could not be found.
		</h2>
	{:else if $page.url.searchParams.get('error') === 'WhisperNotFound'}
		<h2 class="font-satoshi text-lg text-red-400 select-none text-center">
			Sorry, the whisper you are looking for could not be found.
		</h2>
	{:else}
		<h2 class="font-satoshi text-lg text-red-400 select-none text-center">
			Sorry, the page you are looking for could not be found.
		</h2>
	{/if}
	<a
		type="button"
		class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
		href='/'
	>
		Go Home
	</a>
</div>
