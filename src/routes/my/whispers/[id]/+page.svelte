<script>
// @ts-nocheck
	import { enhance } from '$app/forms';
	export let data;
	
	const date = new Date(data.whisper?.created);
	const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
	const readableDate = date.toLocaleDateString('en-US', options);

</script>

<svelte:head>
	<title>Whisper: {data.whisper.id} </title>
</svelte:head>

<div class="flex justify-center items-center">
		<div class="card mt-56 bg-base-200 shadow-lg w-3/4 md:w-2/4 lg:w-1/4">
			<div class="card-body">
				<div class="card-actions justify-end">
					
				</div>
				<h1 class="font-bold">Whisper from Anonymous</h1>

				<p class="text-xl">{data.whisper.whisper}</p>

				<h1><span class="font-bold">Sent on: </span>{readableDate}</h1>
				{#if data.whisper.replied}
					<div class="divider"></div>
					<h1 class="font-bold">Reply</h1>
					<textarea class="textarea textarea-bordered w-full" value={data.whisper.reply} readonly></textarea>
				{:else}
					<a href="/my/whispers/{data.whisper.id}/reply" class="btn -mb-2 mt-2">Reply</a>
				{/if}
				

				<form action="?/deleteWhisper" method="POST" use:enhance>
						<input hidden name="whisperId" value={data.whisper.id} />
						<div class="space-y-5">
							<button class="btn -mb-2 mt-2 w-full bg-red-500 text-black hover:bg-red-700">Delete</button>
						</div>
				</form>
				<a href="/my/whispers" class="btn -mb-2 mt-2 w-full bg-blue-500 text-black hover:bg-blue-700">Back to whispers</a>
			</div>
			
		</div>
</div>

