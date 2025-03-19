import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export async function load({ params, locals }) {
	if (!locals.user || !locals.user.isAdmin) {
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
			console.log(`The whisper with the id ${params.id} was not found!`);
			throw redirect(303, '/404?error=WhisperNotFound');
		}
	}
}
