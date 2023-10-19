<script>
	import moment from 'moment';
	import { enhance } from '$app/forms';

	export let data;
</script>

<svelte:head>
	<title>Whisper: Admin Dashboard</title>
</svelte:head>

<div class="m-20">
	<div class="flex flex-col">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
				<div class="overflow-hidden">
					<h1 class="font-space-mono text-lg mb-2">Registered Users</h1>
					<table class="min-w-full text-left text-sm font-light border-2 border-slate-600">
						<thead class="border-b font-medium dark:border-neutral-500">
							<tr>
								<th scope="col" class="px-6 py-4 font-space-mono">Role</th>
								<th scope="col" class="px-6 py-4 font-space-mono">id</th>
								<th scope="col" class="px-6 py-4 font-space-mono">username</th>
								<th scope="col" class="px-6 py-4 font-space-mono">email</th>
								<th scope="col" class="px-6 py-4 font-space-mono">created</th>
								<th scope="col" class="px-6 py-4 font-space-mono">Action</th>
							</tr>
						</thead>
						<tbody>
							{#each data.users as user}
								<tr class="border-b dark:border-neutral-500 font-space-mono">
									<td
										class="whitespace-nowrap px-6 py-4 font-medium {user.isAdmin
											? 'text-red-700'
											: 'text-blue-700'}"
									>
										{user.isAdmin ? 'Admin' : 'User'}
									</td>
									<td class="whitespace-nowrap px-6 py-4">{user.id}</td>
									<td class="whitespace-nowrap px-6 py-4">{user.username}</td>
									<td class="whitespace-nowrap px-6 py-4">{user.email}</td>
									<td class="whitespace-nowrap px-6 py-4">{moment(user.created).fromNow()}</td>
									<td class="px-3">
										<form action="?/deleteUser" method="POST" use:enhance>
											<input hidden name="userId" value={user.id} />
											<button
												class="{user.isAdmin
													? 'cursor-not-allowed'
													: ''} bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
												type="submit"
                        disabled={user.isAdmin}
											>
												Delete
											</button>
										</form>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
					<h1 class="font-space-mono text-sm">Number of Users: {data.totalUsers}</h1>

					<h1 class="font-space-mono text-lg mb-2 mt-10">Whispers</h1>
					{#if data.totalWhispers === 0}
						<h1 class="font-space-mono text-sm">No whispers yet.</h1>
					{:else}
						<table class="min-w-full text-left text-sm font-light border-2 border-slate-600">
							<thead class="border-b font-medium dark:border-neutral-500">
								<tr>
									<th scope="col" class="px-6 py-4 font-space-mono">id</th>
									<th scope="col" class="px-6 py-4 font-space-mono">receiver</th>
									<th scope="col" class="px-6 py-4 font-space-mono">whisper</th>
									<th scope="col" class="px-6 py-4 font-space-mono">reply</th>
									<th scope="col" class="px-6 py-4 font-space-mono">created</th>
									<th scope="col" class="px-6 py-4 font-space-mono">Action</th>
								</tr>
							</thead>
							<tbody>
								{#each data.whispers as whisper}
									<tr class="border-b dark:border-neutral-500 font-space-mono">
										<td class="whitespace-nowrap px-6 py-4">{whisper.id}</td>
										<td class="whitespace-nowrap px-6 py-4">{whisper.username}</td>
										<td class="whitespace-nowrap px-6 py-4">{whisper.whisper}</td>
										<td class="whitespace-nowrap px-6 py-4"
											>{whisper.reply ? whisper.reply : 'No reply'}</td
										>
										<td class="whitespace-nowrap px-6 py-4">{moment(whisper.created).fromNow()}</td>
										<td class="px-3">
											<form action="?/deleteWhisper" method="POST" use:enhance>
												<input hidden name="whisperId" value={whisper.id} />
												<button
													class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
													type="submit"
												>
													Delete
												</button>
											</form>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
						<h1 class="font-space-mono text-sm">Number of Whispers: {data.totalWhispers}</h1>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
