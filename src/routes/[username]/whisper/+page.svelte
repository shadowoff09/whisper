<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	export let data;
</script>

<svelte:head>
	<title>Whisper: {data.user.username}</title>
</svelte:head>

<div class="max-w-lg mx-auto my-48 h-full">
	<h1 class="grid text-2xl font-satoshi font-bold place-items-center text-white mb-10">
		Send an whisper to <span class="text-purple-500">{data.user.username}</span>
	</h1>
	<form action="?/sendWhisper" method="POST" use:enhance>
		<input class="hidden" type="text" name="receiverId" value={data.user.id} />
		<input class="hidden" type="text" name="receiverUsername" value={data.user.username} />
		<div class="mb-6">
			<textarea
				name="whisper"
				id="whisper"
				class="lg:w-full md:w-3/4 w-3/4 mx-auto bg-gray-700 border border-gray-600 text-white dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
				placeholder="Something you want to say to {data.user.username}"
				required
			/>
		</div>

		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:ml-0 ml-12 md:ml-16 sm:ml-16 xs:ml-16 xxs:ml-9 smx:ml-[3.25rem] sxm:ml-[3.1rem]"
			>Send Anonymously</button
		>
	</form>
</div>
