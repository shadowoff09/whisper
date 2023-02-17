<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';

	export let data;

	let counter = 1;
	let increment = () => {
		counter++;
		return '';
	};
	const getCount = () => {
		return counter;
	};
</script>

<svelte:head>
	<title>Whisper: My Whispers</title>
</svelte:head>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-10 gap-y-8 mx-10 my-2">
	{#each data.records as whisper}
		<div class="card max-w-sm bg-base-200 shadow-lg border {whisper.replied ? 'border-red-500' : 'border-green-600'}">
			<div class="card-body">
				<div class="card-actions justify-end">
					<form action="?/deleteWhisper" method="POST" use:enhance>
						<input hidden name="whisperId" value={whisper.id} />
						<button class="btn btn-square btn-sm btn-ghost" type="submit">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 hover:text-red-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/></svg
							>
						</button>
					</form>
				</div>
				<h1 class="absolute mt-1 mr-37 font-bold">Whisper #{getCount()} {whisper.reply ? '(Replied)' : ''}</h1>
				<p class="break-words">{whisper.whisper}</p>
				<a href="/my/whispers/{whisper.id}" class="btn -mb-2 mt-2">View</a>
			</div>
		</div>
		{increment()}
	{/each}
</div>
