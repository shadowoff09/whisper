<script>
	import moment from 'moment';
	import { enhance } from '$app/forms';

	export let data;

	let screenSize;
	let screenSizeToSeeTables = 1249;
</script>

<svelte:head>
	<title>Whisper: Admin Dashboard</title>
</svelte:head>

<svelte:window bind:innerWidth={screenSize} />

<div class="m-20">
	<div class="flex flex-col">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
				<div class="overflow-hidden">
					<h1 class="font-space-mono text-lg mb-2">Registered Users</h1>
					{#if screenSize < screenSizeToSeeTables}
						<div
							class="my-4 flex items-center bg-yellow-500 text-white text-sm font-bold px-4 py-3 gap-2 rounded-md"
							role="alert"
						>
							<svg
								style="color: white"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
									fill="white"
								/>
								<path
									d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
									fill="white"
								/>
							</svg>
							<p>You need a bigger screen to see this content properly.</p>
						</div>
					{:else}
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
					{/if}

					<h1 class="font-space-mono text-sm">Number of Users: {data.totalUsers}</h1>
					<div class="flex-1">
						
						<h1 class="font-space-mono text-lg mb-2 mt-10">Whispers</h1>
						{#if data.totalWhispers > 0}
						<form action="?/deleteAllWhispers" method="POST" use:enhance>
							<button
								class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2 font-space-mono"
								type="submit"
							>
								Delete all
							</button>
						</form>
						{/if}
					</div>
					{#if screenSize < screenSizeToSeeTables}
						<div
							class="my-4 flex items-center bg-yellow-500 text-white text-sm font-bold px-4 py-3 gap-2 rounded-md"
							role="alert"
						>
							<svg
								style="color: white"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
									fill="white"
								/>
								<path
									d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
									fill="white"
								/>
							</svg>
							<p>You need a bigger screen to see this content properly.</p>
						</div>
					{:else if data.totalWhispers === 0}
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
									<th scope="col" class="px-6 py-4 font-space-mono">View</th>
								</tr>
							</thead>
							<tbody>
								{#each data.whispers as whisper}
									<tr class="border-b dark:border-neutral-500 font-space-mono">
										<td class="whitespace-nowrap px-6 py-4">{whisper.id}</td>
										<td class="whitespace-nowrap px-6 py-4">{whisper.receiverUsername}</td>
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
										<td class="px-3">
												<a
													href="/admin/whisper/{whisper.id}"
													class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
													type="submit"
												>
													View
										</a>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					{/if}
					<h1 class="font-space-mono text-sm">Number of Whispers: {data.totalWhispers}</h1>
				</div>
				<div
					class="my-4 flex items-center bg-slate-800 text-white text-sm font-bold px-4 py-3 gap-2 rounded-md border {data.isHealthy
						? 'border-green-600'
						: 'border-red-600'} w-full"
					role="alert"
				>
					<svg
						width={screenSize < 525 ? 40 : 25}
						height={screenSize < 525 ? 40 : 25}
						viewBox="0 0 24 24"
					>
						<circle
							fill={data.isHealthy ? '#7CFC00' : '#FF3131'}
							stroke="none"
							cx="11"
							cy="12"
							r="5"
						>
							<animate
								attributeName="opacity"
								dur="1s"
								values="0;1;0"
								repeatCount="indefinite"
								begin="0.1"
							/>
						</circle>
					</svg>
					<p class="font-space-mono">
						{data.isHealthy
							? 'Database is healthy and operational.'
							: 'Database is experiencing issues and is not healthy.'}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
