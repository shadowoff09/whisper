// @ts-nocheck

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj); // structuredClone is a browser API that serializes non-POJOs(plain old javascript objects)
};
