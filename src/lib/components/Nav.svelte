<script>
// @ts-nocheck

  export let data;
</script>

<div class="navbar bg-base-100 font-satoshi">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl ">Whisper</a>
  </div>
  {#if !data.user}
    <div class="navbar-end space-x-3">
      <a href="/login" class="btn">Login</a>
      <a href="/register" class="btn">Register</a>
    </div>
  {:else}
    <div class="navbar-end space-x-3">
      <h1 class="font-satoshi font-bold text-lg select-none hidden sm:block">{data.user.username}</h1>
      <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn m-1">Menu</label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a class="font-satoshi" href="/my/link">Get My Link</a></li>
              <li><a class="font-satoshi" href="/my/whispers">My Whispers</a></li>
              <form action="/logout" method="POST">
                <li><button type="submit">Logout</button></li>
              </form>
            </ul>
      </div>
    </div>
  {/if}
</div>