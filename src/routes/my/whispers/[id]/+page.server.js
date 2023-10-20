// @ts-nocheck
import { redirect, error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export async function load({ params, locals }) {
	if (!locals.user) {
		throw redirect(303, '/login');
	} else {
		try {
			const whisper = await locals.pb
				.collection('whispers')
				.getFirstListItem(`id = "${params.id}"`); // check if exists
			return {
				whisper: serializeNonPOJOs(whisper)
			};
		} catch (err) {
			console.log(`The whisper with the id ${params.id} was not found!`);
			throw redirect(303, '/404?error=WhisperNotFound');
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
			console.log('Error: ', err);
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
			console.log('Error: ', err);
			throw error(500, 'Something went wrong deleting the whisper'); // throw a 500 error
		}
	}
};
