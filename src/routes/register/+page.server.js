// @ts-nocheck

import { redirect, error } from '@sveltejs/kit'; // import the redirect function from @sveltejs/kit

export const actions = {
	register: async ({ request, locals }) => {
		// create a new action called register
		const formData = Object.fromEntries(await request.formData()); // get the form data from the request

		try {
			// create a new user in the users collection

			await locals.pb.collection('users').create({ ...formData });
		} catch (err) {
			// if there is an error then log it and throw a 500 error
			console.log('Error: ', err);
			throw error(500, 'Something went wrong with the login'); // throw a 500 error
		}
		throw redirect(303, '/login'); // redirect to the login page
	}
};
