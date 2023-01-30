<script>
// @ts-nocheck

import "../app.postcss";
import { Nav } from '$lib/components';

export let data;
</script>

<Nav {data}/>

<slot/>