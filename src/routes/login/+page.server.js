// @ts-nocheck
import { redirect } from '@sveltejs/kit'; // import the redirect function from @sveltejs/kit

export const actions = {
	login: async ({ locals, request }) => {
		const formData = Object.fromEntries(await request.formData()); // get the form data from the request

		try {
			await locals.pb.collection('users').authWithPassword(formData.email, formData.password); // authenticate the user with the email and password
		} catch (err) {
			
			return {
				success: false,
				error: err.data.message
			};
		}

		throw redirect(303, '/'); // redirect to the home page
	}
};
