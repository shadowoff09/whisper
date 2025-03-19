// @ts-nocheck
import { redirect, error } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user) {
		throw redirect(303, '/login');
	} else {
		const records = await locals.pb.collection('whispers').getFullList(200,{
			filter: `receiverId = '${locals.user.id}'`
		});

		const notRepliedWhispers = records.filter((record) => !record.replied).length;
		const repliedWhispers = records.filter((record) => record.replied).length;
		const totalWhispers = records.length;

		return {
			records: JSON.parse(JSON.stringify(records)),
			notRepliedWhispers,
			repliedWhispers,
			totalWhispers
		};
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
	}
};
