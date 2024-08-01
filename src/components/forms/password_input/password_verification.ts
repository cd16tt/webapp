export async function havePasswordBeenPwned(password: string): Promise<boolean> {
	const uInt8Password = new TextEncoder().encode(password);
	const hash = await crypto.subtle.digest('SHA-1', uInt8Password);
	const hashHex = [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, '0')).join('');

	const response = await fetch('https://api.pwnedpasswords.com/range/' + hashHex.slice(0, 5));

	if (response.status !== 200) {
		return false;
	}

	const body = await response.text();
	const hashes = body.split('\n').map((line) => {
		const [hash, count] = line.split(':');
		return {
			hash,
			count: count ? Number.parseInt(count, 10) : 0,
		};
	});

	const hashSuffix = hashHex.slice(5).toUpperCase();
	const result = hashes.find(({ hash }) => hash === hashSuffix);

	if (!result) return false;

	return result.count > 3;
}

export async function isPasswordSafe(password: string): Promise<boolean> {
	return !(await havePasswordBeenPwned(password));
}
