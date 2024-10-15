import { type PrepareParams } from './types/types.d.js'

import { Request } from './lib/request'
import { Track, Screenshot } from './services'

export async function Stock42(props: PrepareParams) {
	try {
		const request = await new Request(props).init()

		console.info('fetch: ', fetch)
		return {
			track: new Track(request).track,
			screenshot: new Screenshot(request).screenshot,
		}
	} catch (err) {
		console.error(err)
		throw new Error('Error initializing Stock42 for React Native')
	}
}
