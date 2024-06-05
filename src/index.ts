import {
	PrepareParams,
	ITrack,
} from './types.d'

import { init, request } from './request';

export default async function Stock42(props: PrepareParams) {
	try {
		const instanceSID = await init(props);
		console.info('instanceSID: ', instanceSID)
		return {
			track: (props: ITrack) => request({
				method: 'POST',
				data: {
					...props,
				},
				sid: 'asdasd',
				path: '',
			})
		}
	} catch (err) {
		throw new Error('Error initializing Stock42');
	}
}

