// @ts-nocheck
import { redirect } from '@sveltejs/kit'; // import the redirect function from @sveltejs/kit

export async function load({ locals }) {
	if (locals.user) {
		throw redirect(303, '/');
	}
}

export const actions = {
	register: async ({ request, locals }) => {
		// create a new action called register
		const formData = Object.fromEntries(await request.formData()); // get the form data from the request

		try {
			// create a new user in the users collection
			await locals.pb.collection('users').create({ ...formData, emailVisibility: true });
		} catch (err) {
			// if there is an error then log it and throw a 500 error
			return {
				success: false,
				error: err.data.message
			};
		}
		await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
		throw redirect(303, '/'); // redirect to the login page
	}
};
