import { type Request } from '../lib/request.js'
import { type ITrackScreenshot } from '../types/types.d.js'

export class Screenshot {
	private readonly request: Request
	private static instance: Screenshot

	constructor(request: Request) {
		this.request = request
		return this
	}

	static getInstance(request: Request): Screenshot {
		if (!Screenshot.instance) {
			Screenshot.instance = new Screenshot(request)
		}
		return Screenshot.instance
	}

	public screenshot(props: ITrackScreenshot) {
		this.request.fetch({
			method: 'POST',
			data: {
				...props,
				eventName: 'screenshot',
			},
			sid: 'asdasd',
			path: '',
		})
	}
}
