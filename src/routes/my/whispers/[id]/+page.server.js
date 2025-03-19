// @ts-nocheck
import { redirect, error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export async function load({ params, locals }) {
	// Check if the user is logged in.
	if (!locals.user) {
		return redirect(303, '/login');
	} else {
		// Try to get the whisper.
		try {
			const whisper = await locals.pb
				.collection('whispers')
				.getFirstListItem(`id = "${params.id}"`);

			// Return the whisper directly as a plain object.
			return {
				whisper: serializeNonPOJOs(whisper)
			};
		} catch (err) {
			return redirect(303, '/404?error=InternalServerError');
		}
	}
}

export const actions = {
	deleteWhisper: async ({ request, locals }) => {
		// create a new action called register
		const formData = Object.fromEntries(await request.formData()); // get the form data from the request

		try {
			// create a new user in the users collection

			await locals.pb.collection('whispers').delete(formData.whisperId);
		} catch (err) {
			// if there is an error then log it and throw a 500 error
			throw error(500, 'Something went wrong deleting the whisper'); // throw a 500 error
		}
		throw redirect(303, '/my/whispers'); // redirect to the login page
	},

	deleteReply: async ({ request, locals }) => {
		// create a new action called register
		const formData = Object.fromEntries(await request.formData()); // get the form data from the request

		try {
			const data = {
				// create the data object to update the whisper with the reply
				whisper: formData.whisper,
				username: locals.user.username,
				replied: false,
				reply: ''
			};
			await locals.pb.collection('whispers').update(formData.id, data); // update the whisper
		} catch (err) {
			// if there is an error then log it and throw a 500 error
			throw error(500, 'Something went wrong deleting the whisper'); // throw a 500 error
		}
	}
};
