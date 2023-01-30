// @ts-nocheck
import { redirect } from '@sveltejs/kit';

export const POST = ({ locals }) => {
	locals.pb.authStore.clear(); // clear the authStore
	locals.user = undefined; // set the user to undefined

	throw redirect(303, '/login'); // redirect to the login page
};
