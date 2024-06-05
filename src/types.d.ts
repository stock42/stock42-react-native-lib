export interface PrepareParams {
	appVersion: string
	userAgent: string
	appName: string
	applicationToken: string
	deviceId: string
}

export interface RequestParams {
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

export interface ITrack {
	eventName: string
	screenName: string
	functionName?: string
	data?: object
}

export interface IScreenName {
	screenName: string
}

export interface IScreenshot {
	base64: string
}
