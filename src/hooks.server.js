// @ts-nocheck
import 'dotenv/config';
import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';


export const handle = async ({ event, resolve }) => {
	// set pocketbase to a new pocketbase instance
	event.locals.pb = new PocketBase(`${process.env.POCKETBASE_URL}`);
	// grab cookie from browser if we have one
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		//if the cookie is valid then we have a user
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		// if the cookie is not valid then we don't have a user
		event.locals.user = undefined;
	}

	// resolve the request and get the response back from the server (this is where the request is actually made)
	const response = await resolve(event);

	// set the cookie to the response headers so the browser can save it for next time (this is where the cookie is actually set)
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	// return the response
	return response;
};
