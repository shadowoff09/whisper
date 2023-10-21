// @ts-nocheck
import { redirect } from '@sveltejs/kit';

// if get request then we redirect to the login page
export const GET = () => {
	throw redirect(303, '/login'); // redirect to the login page
};

export const POST = ({ locals }) => {
	locals.pb.authStore.clear(); // clear the authStore
	locals.user = undefined; // set the user to undefined

	throw redirect(303, '/login'); // redirect to the login page
};
