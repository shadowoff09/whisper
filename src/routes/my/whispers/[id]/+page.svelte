<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import moment from 'moment';
	
	export let data;

	
</script>

<svelte:head>
	<title>Whisper: {data.whisper.id}</title>
</svelte:head>

<div class="flex justify-center items-center">
	<div class="card mt-20 bg-base-200 shadow-lg w-3/4 md:w-2/4 lg:w-1/4">
		<div class="card-body">
			<div class="card-actions justify-end" />
			<h1 class="font-bold">Whisper from Anonymous {data.whisper.replied ? '(Replied)' : ''}</h1>

			<p class="text-xl">{data.whisper.whisper}</p>

			<h1><span class="font-bold">Sent: </span>{moment(data.whisper.created).fromNow()}</h1>
			{#if data.whisper.replied}
				<div class="divider" />
				<h1 class="font-bold">Reply:</h1>
				{data.whisper.reply}
				<form action="?/deleteReply" method="POST" use:enhance>
					<input type="text" hidden value={data.whisper.id} name="id" />
					<button type="submit" class="btn w-full">Delete Reply</button>
				</form>
			{:else}
				<a href="/my/whispers/{data.whisper.id}/reply" class="btn">Reply</a>
			{/if}

			<form action="?/deleteWhisper" method="POST" use:enhance>
				<input hidden name="whisperId" value={data.whisper.id} />
				<div class="space-y-5">
					<button class="btn -mb-2 w-full bg-red-500 text-black hover:bg-red-700"
						>Delete Whisper</button
					>
				</div>
			</form>
			<a href="/my/whispers" class="btn -mb-2 mt-2 w-full bg-blue-500 text-black hover:bg-blue-700"
				>Back to whispers</a
			>
		</div>
	</div>
</div>
