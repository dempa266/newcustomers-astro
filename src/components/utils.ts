export function parseEncodedJson<T>(value: unknown, fallback: T): T {
	if (typeof value !== 'string' || value.length === 0) {
		return fallback;
	}

	try {
		return JSON.parse(decodeURIComponent(value)) as T;
	} catch {
		try {
			return JSON.parse(value) as T;
		} catch {
			return fallback;
		}
	}
}

export function stripHtml(value: string): string {
	return value.replace(/<[^>]*>/g, '');
}
