<script>
// @ts-nocheck

	import { onMount } from 'svelte';

	export let data;
	let url = '';
	onMount(() => url = window.location.href);

	import { Input } from '$lib/components';
	import { copy } from 'svelte-copy';

</script>

<svelte:head>
	<title>Whisper: My Link</title>
</svelte:head>

<div class="grid place-items-center font-satoshi my-52 text-5xl text-red-800">
	<Input value="{url.replace("/my/link", `/${data.user.username}/whisper`)}" readonly label=""/>
	<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" use:copy={url.replace("/my/link", `/${data.user.username}/whisper`)}>
			Copy Link
			<svg class="ml-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="20" width="20">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
			</svg>
	</button>
</div>