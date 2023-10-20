<script>
	// @ts-nocheck
	import { Nav, Footer } from '$lib/components';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
  import 'nprogress/nprogress.css';
  import '../app.postcss';

	export let data;

	NProgress.configure({
		minimum: 0.16,
		trickle: false,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<Nav {data} />

<slot />

<div class="">
	<Footer />
</div>
