import stock42 from '../src/index';

async function init() {
	try {
		const { track } = await stock42({
			appVersion: '1.0',
			appName: 'Stock42Test',
			userAgent: 'stock42agent',
			applicationToken: 'bd23a6fb-02e6-4ac6-8e5c-2aa28bd83db2-FV2AH3',
			deviceId: '1'
		});

		for (let x = 0; x < 11; x++) {
			setTimeout(() => {
				track({
					eventName: 'event testing',
					screenName: 'home',
					functionName: `function${x}`,
					data: {
						x,
						msg: 'random number'
					}
				})
			}, 200 * x);

		}

	} catch (err) {
		console.info('Fatal Hit Errors: ', err)
	}
}

init();