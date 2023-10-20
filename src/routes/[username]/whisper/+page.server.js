// @ts-nocheck
import { redirect } from '@sveltejs/kit'; // import the redirect function from @sveltejs/kit

export async function load({ params, locals }) {
	try {
		const userInfo = await locals.pb
			.collection('users')
			.getFirstListItem(`username = "${params.username}"`); // check if exists

		return {
			user: {
				username: userInfo.username,
				id: userInfo.id
			}
		};
	} catch (err) {
		console.log(`User ${params.username} was not found!`);
		throw redirect(303, '/404?error=UserNotFound');
	}
}

export const actions = {
	sendWhisper: async ({ locals, request, params }) => {
		const formData = Object.fromEntries(await request.formData()); // get the form data from the request

		try {
			await locals.pb.collection('whispers').create(formData); // authenticate the user with the email and password
		} catch (err) {
			console.log('Error: ', err);
			// if there is an error then log it and throw a 500 error
			return {
				error: err.message // return the error message
			};
		}
		console.log(`Whisper sent to  ${params.username} (${formData.userId})!`);
		throw redirect(303, `/${params.username}/whisper-sent`); // redirect to the home page
	}
};
