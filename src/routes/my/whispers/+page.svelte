<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import moment from 'moment';

	export let data;

	let hideReplied = false;

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
{#if data.records.length <= 0}
	<div class="flex justify-center">
		<div class="card max-w-sm bg-base-200 shadow-lg border border-red-500">
			<div class="card-body">
				<h1 class="font-bold">No whispers found</h1>
				<p>It seems like no one haven't sent any whispers to you.</p>
				<a href="/{data.user.username}/whisper" class="btn -mb-2 mt-2">Send a whisper to yourself</a
				>
			</div>
		</div>
	</div>
{:else}
	<div class="flex">
		<div>
			<h1 class="ml-10 mr-4 mb-10 font-space-mono text-xl">
				Whispers ({data.totalWhispers}
				{data.totalWhispers === 1 ? 'Whisper' : 'Whispers'})
				<br>
				{#if hideReplied && data.repliedWhispers > 0}
					<span class="mt-1 absolute text-sm font-medium font-space-mono text-gray-300">Replied whispers are hidden ({data.repliedWhispers} in total).</span>
				{/if}
			</h1>
		</div>
		{#if data.repliedWhispers > 0}
			<div>
				<label class="mt-0.5 relative sm:inline-flex items-center cursor-pointer hidden">
					<input type="checkbox" value="" class="sr-only peer" bind:checked={hideReplied} />
					<div
						class="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-blue-600"
					/>
					<span class="ml-3 text-sm font-medium font-space-mono text-gray-300"
						>Hide Replied Whispers</span
					>
				</label>
			</div>
		{/if}
	</div>

	<div
		class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-10 gap-y-8 mx-10 my-2 mb-24"
	>
		{#each data.records as whisper}
				<div
					class="card max-w-sm bg-base-200 shadow-lg border 
					{whisper.replied
						? 'border-red-500'
						: 'border-green-600'}
					
					{hideReplied && whisper.replied
						? 'hidden'
						: ''}"
				>
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
						<h1 class="absolute mt-1 mr-37 font-bold font-space-mono">
							Whisper #{getCount()}
							{whisper.reply ? '(Replied)' : ''}
						</h1>
						<p class="break-words">{whisper.whisper}</p>
						<a href="/my/whispers/{whisper.id}" class="btn mt-2">View</a>
						<p class="-mb-4 font-space-mono text-sm">{moment(whisper.created).fromNow()}</p>
					</div>
				</div>
				{increment()}
			
		{/each}
	</div>
{/if}
