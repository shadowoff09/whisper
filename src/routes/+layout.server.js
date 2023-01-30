// @ts-nocheck
export const load = ({ locals }) => {
	if (locals.user) {
		// if we have a user then we return the user
		return {
			user: locals.user // this is the user object
		};
	}

	return {
		// if we don't have a user then we return undefined
		user: undefined // this is undefined
	};
};
