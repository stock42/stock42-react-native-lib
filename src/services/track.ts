import { type Request } from '../lib/request.js'
import { type ITrack } from '../types/types.js'

export class Track {
	private readonly request: Request
	private static instance: Track

	constructor(request: Request) {
		this.request = request
	}

	static getInstance(request: Request): Track {
		if (!Track.instance) {
			Track.instance = new Track(request)
		}
		return Track.instance
	}

	track(props: ITrack) {
		this.request.fetch({
			method: 'POST',
			data: {
				...props,
			},
			sid: 'asdasd',
			path: '',
		})
	}
}
