import { prepare } from './request';

let request = null;
export default async function init(applicationKey: string) {
	try {
		request = await prepare({
			applicationKey,
		});
	} catch (err) {
		console.info('Error initializing Stock42');
	}
}

