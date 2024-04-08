const HOST:string = process?.env.NODE_ENV === 'PROD' ? 'https://hits.visiongroup.nyc' : 'http://localhost:4567';
const PATH:string = '/hit';

let appVersion: string = '';
let userAgent: string = '';
let appName: string = '';

interface RequestParams {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'UPDATE';
	data?: object;
	query?: Record<string, string>
	path?: string,
}

interface RequestResponse {
	data: object;
	status: number;
}

interface PrepareParams {
	version?: string;
	useragent?: string;
	appname?: string;
	applicationKey: string;
}

interface ApiResponse {
  status: 'OK' | 'ERROR';
}

async function request(params: RequestParams):Promise<RequestResponse | void> {
	const requestUUID:string = new Date().getTime().toString(32) + '-' + Math.random().toString(32) + '-' + (Math.random() * 100).toString(32) + '-' + (Math.random() * 100).toString(32);

	const finalHeaders = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'user-agent': userAgent,
		'app-version': appVersion,
		'app-name': appName,
		requestUUID,
	};

	const requestOptions:RequestInit = {
		method: params.method.toUpperCase(),
		headers: finalHeaders,
		body: params.method.toUpperCase() !== 'GET' && params.data ? JSON.stringify(params.data) : undefined,
	};

	const url = new URL(`${HOST}/${PATH}${params.path}`);
	if (params.query) {
		Object.keys(params.query).forEach(key => url.searchParams.append(key, params.query![key]));
	}

	try {
		const response = await fetch(url.toString(), requestOptions);
		const data = await response.json();
		return { data: data as ApiResponse, status: response.status };
	} catch (error) {
		console.error('Stock 42 Fetch error:', error);
	}
}

export async function prepare({
	version =  '1.0.0',
	useragent = 'app-user-agent',
	appname = 'ApplicationName',
	applicationKey = 'no-app-key',

}: PrepareParams): Promise<typeof request> {
	appVersion = version;
	userAgent = useragent;
	appName = appname;
	const result = await request({
		method: 'GET',
		path: '/getsid',
	});

	console.info('result: ', result);
	return request;
}
