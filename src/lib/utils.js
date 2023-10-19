// @ts-nocheck

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj); // structuredClone is a browser API that serializes non-POJOs(plain old javascript objects)
};

export const convertTime = (timeStr) => {
	const timeObj = new Date(timeStr);
	const now = new Date();
	const delta = now - timeObj;

	if (delta.days > 0) {
		return `${delta.days} days ago`;
	} else if (delta.hours > 0) {
		return `${delta.hours} hours ago`;
	} else if (delta.minutes > 0) {
		return `${delta.minutes} minutes ago`;
	} else {
		return `${delta.seconds} seconds ago`;
	}
}
