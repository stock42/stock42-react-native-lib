export type PrepareParams = {
	appVersion: string
	userAgent: string
	appName: string
	applicationToken: string
	deviceId: string
}

export type RequestParams = {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'UPDATE'
	data?: object
	query?: Record<string, string>
	path?: string
	sid: string
}

export interface RequestResponse {
	status: number
	ok: boolean
	msg: string
}

export interface ApiResponse {
	status: 'OK' | 'ERROR'
	msg: string
	ok: boolean
}

export type ITrack = {
	eventName:
		| 'hit'
		| 'screenshot'
		| 'request'
		| 'call'
		| 'identity'
		| 'error'
		| 'exception'
		| 'info'
		| 'custom'
	screenName: string
	functionName?: string
	data?: object
}

export type ITrackScreenshot = {
	screenName: string
	base64: string
}

export type IScreenName = {
	screenName: string
}

export type IScreenshot = {
	base64: string
}
