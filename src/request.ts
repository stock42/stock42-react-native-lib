const ports = [4530, 4531];
const getPort = () => String(ports[Math.round(Math.random() * 1)]);

const PATH:string = 'hits';

let appVersion: string = ''
let userAgent: string = ''
let appName: string = ''
let sid: string = ''
let deviceId: string = ''
let applicationToken: string = ''

import {
	PrepareParams,
	RequestParams,
	RequestResponse,
	ApiResponse,
} from './types.d'

export async function request(params: RequestParams):Promise<RequestResponse> {
	const requestUUID:string = new Date().getTime().toString(32) + '-' + Math.random().toString(32) + '-' + (Math.random() * 100).toString(32) + '-' + (Math.random() * 100).toString(32);

	const finalHeaders = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'user-agent': userAgent,
		'app-version': appVersion,
		'app-name': appName,
		'app-token': applicationToken,
		deviceId,
		sid,
		requestUUID,
	};

	const requestOptions: RequestInit = {
		method: params.method.toUpperCase(),
		headers: finalHeaders,
		body: params.method.toUpperCase() !== 'GET' && params.data ? JSON.stringify(params.data) : undefined,
	};

	const HOST:string = process?.env.NODE_ENV === 'PROD' ? 'https://services.visiongroup.nyc/core' : `http://localhost:${getPort()}`;
	console.info('HOST: ', HOST)
	const url = new URL(`${HOST}/${PATH}${params.path}`);
	if (params.query) {
		Object.keys(params.query).forEach(key => url.searchParams.append(key, params.query![key]));
	}

	try {
		const response = await fetch(url.toString(), requestOptions);
		const data = await response.json();
		const toResponse = { ...data as ApiResponse, status: response.status }
		if (response.status !== 200) throw new Error(`Error: Stock42 Hits is not init: ${response.status} : ${toResponse.msg}`)
		return toResponse
	} catch (error) {
		console.error('Stock42 Fetch error:', error)
		throw error
	}
}

export async function init(options: PrepareParams): Promise<string> {

	deviceId = options.deviceId;
	userAgent = options.userAgent;
	appVersion = options.appVersion;
	appName = options.appName;
	applicationToken = options.applicationToken
	const result = await request({
		method: 'GET',
		path: '/init',
		...options,
		sid,
	});
	sid = result.msg;
	return sid;
}
