# Stock42 Analytics lib.

# Installation

```bash
$ npm install stock42-lib-hits
```

# Use Stock42 hits

## Initializing
First step: get a valid applicationToken from [Stock42](https://stock42.com). Register a new tenant (Own tenant type).

```javascript
import { init } from 'stock42-lib-hits'

try {
	const { track, identify } = stock42({
		version: '1.0',
		appName: 'Stock42Test',
		userAgent: 'stock42agent',
		applicationToken: 'bd23a6fb-02e6-4ac6-8e5c-2aa28bd83db2-FV2AH3'
	});
} catch (err) {
	console.info('Fatal Hit Errors: ', err)
}
```

## Sending hists

```javascript
track('eventName', 'screenName', { ...payload });

```


# Run Test
```bash
$ npx tsx test/
```