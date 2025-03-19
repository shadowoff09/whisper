import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export async function load({ params, locals }) {
	if (!locals.user) {
		throw redirect(303, '/login');
	} else if (!locals.user.isAdmin) {
		throw redirect(303, '/');
	} else {
		try {
			const whisper = await locals.pb
				.collection('whispers')
				.getFirstListItem(`id = "${params.whisperId}"`); // check if exists
			return {
				whisper: serializeNonPOJOs(whisper)
			};
		} catch (err) {
			throw redirect(303, '/404?error=WhisperNotFound');
		}
	}
}
