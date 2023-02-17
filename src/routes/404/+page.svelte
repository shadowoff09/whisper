<script>
  // @ts-nocheck

  import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';


</script>

<svelte:head>
	<title>Whisper: 404</title>
</svelte:head>

<div class="grid place-items-center mx-10 space-y-1">
  <h1 class="mt-32 font-tanker text-9xl select-none">404</h1>
  {#if $page.url.searchParams.get('error') === 'UserNotFound'}
    <h2 class="font-satoshi text-lg text-red-400 select-none text-center">Sorry, the user you are looking for could not be found.</h2>
  {:else if $page.url.searchParams.get('error') === 'WhisperNotFound'}
    <h2 class="font-satoshi text-lg text-red-400 select-none text-center">Sorry, the whisper you are looking for could not be found.</h2>
  {:else}
    <h2 class="font-satoshi text-lg text-red-400 select-none text-center">Sorry, the page you are looking for could not be found.</h2>
  {/if}
  <a type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/">
			Go Home
			<svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
	</a>
</div>