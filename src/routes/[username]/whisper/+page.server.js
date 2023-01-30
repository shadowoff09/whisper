// @ts-nocheck
import { redirect } from '@sveltejs/kit'; // import the redirect function from @sveltejs/kit

export async function load({ params, locals }) {

	try{
		await locals.pb.collection('users').getFirstListItem(`username = "${params.username}"`); // check if exists
	}
	catch(err){
		if (err.status !== 404) {
			console.log('User found');
			return {
				user: params.username
			};
		}
		console.log(`User ${params.username} was not found!`);
		throw redirect(303, '/404?error=UserNotFound');
	}
	return {
		user: params.username
	};
	
}

export const actions = {
	sendWhisper: async ({ locals, request }) => {
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
		console.log('Whisper sent!');
		throw redirect(303, `/${formData.username}/whisper-sent`); // redirect to the home page
	}
};
