// @ts-nocheck

import { redirect, error } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user) {
		throw redirect(303, '/login');
	} else {
		const recordsUsers = await locals.pb.collection('users').getFullList(200);
		const recordsWhispers = await locals.pb.collection('whispers').getFullList(200);

		return {
			recordsUsers: JSON.parse(JSON.stringify(recordsUsers)),
			whispers: JSON.parse(JSON.stringify(recordsWhispers))
		};
	}
}

export const actions = {
	deleteUser: async ({ request, locals }) => {
		// create a new action called register
		const formData = Object.fromEntries(await request.formData()); // get the form data from the request

		try {
			// create a new user in the users collection

			await locals.pb.collection('users').delete(formData.whisperId);
		} catch (err) {
			// if there is an error then log it and throw a 500 error
			console.log('Error: ', err);
			throw error(500, 'Something went wrong deleting the user'); // throw a 500 error
		}
		throw redirect(303, '/admin/dashboard'); // redirect to the login page
	}
};
