<script>
// @ts-nocheck
	import { enhance } from '$app/forms';
	export let data;
	const date = new Date(data.whisper?.created);
	const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
	const readableDate = date.toLocaleDateString('en-US', options);
</script>

<svelte:head>
	<title>Whisper: Reply</title>
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
					<form action="?/replyWhisper" method="POST" use:enhance>
					<input type="text" hidden value={data.whisper.id} name="id" >
					<textarea class="textarea textarea-bordered w-full" placeholder="Your Reply" name="reply"></textarea>
					<button type="submit" class="btn mt-2 w-full">Reply</button>
				</form>
				{/if}
				
			</div>
		</div>
</div>

