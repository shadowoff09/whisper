<script>
// @ts-nocheck

import "../app.postcss";
import { Nav, Footer } from '$lib/components';
import NProgress from 'nprogress'
import { navigating } from '$app/stores'

export let data;

// NProgress css
import 'nprogress/nprogress.css'

NProgress.configure({
      // Full list: https://github.com/rstacruz/nprogress#configuration
      minimum: 0.16,
      trickle: false,
      showSpinner: false
  })

$: {
  if ($navigating) {
    NProgress.start();
  }
  if (!$navigating) {
    NProgress.done();
  }
}
</script>


<Nav {data}/>

<slot/>

<div class="">
  <Footer />
</div>