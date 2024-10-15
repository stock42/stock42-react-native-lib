import {
	type PrepareParams,
	type RequestParams,
	type RequestResponse,
	type ApiResponse,
} from '../types/types.d.js'

export class Request {
	private readonly PATH: string = 'hits'
	private readonly HOST: string = 'http://api.stock42.com/'
	private static instance: Request
	readonly appVersion: string = ''
	readonly userAgent: string = ''
	readonly appName: string = ''
	private sid: string = ''
	readonly deviceId: string = ''
	readonly applicationToken: string = ''

	private generateRequestUUID(): string {
		return (
			new Date().getTime().toString(32) +
			'-' +
			Math.random().toString(32) +
			'-' +
			(Math.random() * 100).toString(32) +
			'-' +
			(Math.random() * 100).toString(32)
		)
	}

	public async fetch(params: RequestParams): Promise<RequestResponse> {
		const requestUUID: string = this.generateRequestUUID()

		const finalHeaders = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'user-agent': this.userAgent,
			'app-version': this.appVersion,
			'app-name': this.appName,
			'app-token': this.applicationToken,
			deviceId: this.deviceId,
			sid: this.sid,
			requestUUID,
		}

		const requestOptions: RequestInit = {
			method: params.method.toUpperCase(),
			headers: finalHeaders,
			body:
				params.method.toUpperCase() !== 'GET' && params.data ?
					JSON.stringify(params.data)
				:	undefined,
		}

		const url = new URL(`${this.HOST}/${this.PATH}${params.path}`)
		if (params.query) {
			Object.keys(params.query).forEach(key =>
				url.searchParams.append(key, params.query![key]),
			)
		}

		const response = await fetch(url.toString(), requestOptions)
		const data = await response.json()
		const toResponse = { ...(data as ApiResponse), status: response.status }
		if (response.status !== 200) {
			throw new Error(
				`Error: Stock42 for React Native is not init: ${response.status} : ${toResponse.msg}`,
			)
		}
		return toResponse
	}

	constructor(options: PrepareParams) {
		this.deviceId = options.deviceId
		this.userAgent = options.userAgent
		this.appVersion = options.appVersion
		this.appName = options.appName
		this.applicationToken = options.applicationToken
	}

	getInstance(options: PrepareParams) {
		if (!Request.instance) {
			Request.instance = new Request(options)
		}
		return Request.instance
	}

	public async init(): Promise<Request> {
		const result = await this.fetch({
			method: 'GET',
			path: '/init',
			// ...options,
			sid: this.sid,
		})
		this.sid = result.msg
		return this
	}

	public getSID(): string {
		return this.sid
	}
}
