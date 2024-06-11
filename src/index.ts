import { type PrepareParams, type ITrack, type ITrackScreenshot } from './types.d'

import { init, request } from './request'

export async function Stock42(props: PrepareParams) {
	try {
		await init(props)

		const track = (props: ITrack) =>
			request({
				method: 'POST',
				data: {
					...props,
				},
				sid: 'asdasd',
				path: '',
			})

		const screenshot = (props: ITrackScreenshot) =>
			request({
				method: 'POST',
				data: {
					...props,
					eventName: 'screenshot',
				},
				sid: 'asdasd',
				path: '',
			})
		return { track, screenshot }
	} catch (err) {
		throw new Error('Error initializing Stock42')
	}
}
