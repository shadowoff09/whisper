<script>
// @ts-nocheck

  export let data;

</script>

<div class="navbar bg-base-100 font-satoshi">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl tracking-wider">
      <span class="text-xl font-space-mono font-black bg-gradient-to-r bg-clip-text text-transparent
							from-blue-500 via-purple-500 to-indigo-500
							animate-text select-none">WHISPER</span>
      {#if data.user?.isAdmin}
        <span class="text-xs font-satoshi font-normal mt-2.5 text-red-700">Admin</span>
      {/if}
    </a>
  </div>
  {#if !data.user}
    <div class="navbar-end space-x-3">
       <a
        href="/login"
			class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-satoshi rounded-lg text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-blue-500 border border-gray-800 font-bold"
			>LOGIN</a
		>
    </div>
  {:else}
    <div class="navbar-end space-x-3">
      <h1 class="font-satoshi font-bold text-lg select-none hidden sm:block">{data.user.username}</h1>
      <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn gap-2">
            Menu
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-[0.20rem]"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#a6adbb"/><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#a6adbb"/><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#a6adbb"/></svg>
        </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="dropdown-content menu p-2 shadow rounded-box w-52 bg-slate-900 gap-y-1">
              <li><a class="font-satoshi" href="/my/link">My Link</a></li>
              <li><a class="font-satoshi" href="/my/whispers">My Whispers</a></li>
              <form action="/logout" method="POST">
                <li><button type="submit">Logout</button></li>
              </form>
              <li><a class="font-satoshi bg-gray-700 cursor-not-allowed" href="/my/profile">{data.user.username}</a></li>
              {#if data.user.isAdmin}
                <li>
                  <a class="font-satoshi" href="/admin/dashboard">Admin Dashboard</a>
                </li>
              {/if}
            </ul>
      </div>
    </div>
  {/if}
</div>