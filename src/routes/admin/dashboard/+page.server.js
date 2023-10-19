// @ts-nocheck

import { redirect, error } from '@sveltejs/kit';


export async function load({ locals }) {

	async function getTotalItems(collectionName) {
		const { totalItems } = await locals.pb.collection(collectionName).getList(1, 1);
		return totalItems;
	}

	if (!locals.user) {
		throw redirect(303, '/login');
	} else {
		const recordsUsers = await locals.pb.collection('users').getFullList(200);
		const recordsWhispers = await locals.pb.collection('whispers').getFullList(200);

		const totalUsers = await getTotalItems('users');
		const totalWhispers = await getTotalItems('whispers');

		return {
			users: JSON.parse(JSON.stringify(recordsUsers)),
			whispers: JSON.parse(JSON.stringify(recordsWhispers)),
			totalUsers,
			totalWhispers
		};
	}
}

export const actions = {
	deleteUser: async ({ request, locals }) => {
		// create a new action called register
		const formData = Object.fromEntries(await request.formData()); // get the form data from the request

		try {
			// create a new user in the users collection

			await locals.pb.collection('users').delete(formData.userId);
		} catch (err) {
			// if there is an error then log it and throw a 500 error
			console.log('Error: ', err);
			throw error(500, 'Something went wrong deleting the user'); // throw a 500 error
		}
		throw redirect(303, '/admin/dashboard'); // redirect to the login page
	},

	deleteWhisper: async ({ request, locals }) => {
		// create a new action called register
		const formData = Object.fromEntries(await request.formData()); // get the form data from the request

		try {
			// create a new user in the users collection

			await locals.pb.collection('whispers').delete(formData.whisperId);
		} catch (err) {
			// if there is an error then log it and throw a 500 error
			console.log('Error: ', err);
			throw error(500, 'Something went wrong deleting the whisper'); // throw a 500 error
		}
		throw redirect(303, '/admin/dashboard'); // redirect to the login page
	}
};
