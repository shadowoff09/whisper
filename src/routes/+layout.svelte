<script>
// @ts-nocheck

import "../app.postcss";
import { Nav, Footer } from '$lib/components';

export let data;

</script>

<Nav {data}/>

<slot/>

<div class="">
  <Footer />
</div>