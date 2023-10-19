<script>

  import moment from 'moment';

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
            {#each data.recordsUsers as record}
                <tr class="border-b dark:border-neutral-500 font-space-mono">
                  <td class='whitespace-nowrap px-6 py-4 font-medium {record.isAdmin ? "text-red-700" : "text-blue-700"}'>
                    {record.isAdmin ? "Admin" : "User"}
                  </td>
                    <td class='whitespace-nowrap px-6 py-4'>{record.id}</td>
                    <td class='whitespace-nowrap px-6 py-4'>{record.username}</td>
                    <td class='whitespace-nowrap px-6 py-4'>{record.email}</td>
                    <td class='whitespace-nowrap px-6 py-4'>{moment(record.created).fromNow()}</td>
                  <td class="px-3">
                    <button class='{record.isAdmin ? "cursor-not-allowed" : "cursor-auto"} bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>
                      Delete
                    </button>
                  </td>
                </tr>
            {/each}
          </tbody>
        </table>
        <h1 class="font-space-mono text-sm">Number of Users: </h1>
        
        <h1 class="font-space-mono text-lg mb-2 mt-10">Whispers</h1>
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
            {#each data.whispers as record}
                <tr class="border-b dark:border-neutral-500 font-space-mono">
                    <td class='whitespace-nowrap px-6 py-4'>{record.id}</td>
                    <td class='whitespace-nowrap px-6 py-4'>{record.username}</td>
                    <td class='whitespace-nowrap px-6 py-4'>{record.whisper}</td>
                    <td class='whitespace-nowrap px-6 py-4'>{record.reply ? record.reply : "No reply"}</td>
                    <td class='whitespace-nowrap px-6 py-4'>{moment(record.created).fromNow()}</td>
                  <td class="px-3">
                    <button class='{record.isAdmin ? "cursor-not-allowed" : "cursor-auto"} bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>
                      Delete
                    </button>
                  </td>
                </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>