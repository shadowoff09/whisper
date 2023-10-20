// @ts-nocheck
import { redirect } from '@sveltejs/kit'; // import the redirect function from @sveltejs/kit

export async function load({ locals }) {
	if (!locals.user) {
		throw redirect(303, '/login');
	} else {
		return {
			user: locals.user
		};
	}
}
