- [Stock42 React Native](#stock42-react-native)
- [Installation](#installation)
- [Stock42 React Native Analytics](#stock42-react-native-analytics)
	- [Initializing](#initializing)
	- [Sending hits](#sending-hits)
	- [Sending screenshot](#sending-screenshot)
- [Run Test](#run-test)

![Stock42 logo](DOCUMENTATION/assets/stock42-logo.png)

# Stock42 React Native

![Platform](https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20expo%20-%239cf)
[![NPM Badge](https://img.shields.io/npm/v/stock42-react-native)](https://www.npmjs.com/package/stock42-react-native)

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-%23ff69b4)

Official lib for works with *Stock42 Services*.

# Installation

```bash
$ npm install stock42-react-native-lib --save
```

# Stock42 React Native Analytics

## Initializing
First step: get a valid applicationToken from [Stock42](https://stock42.com). Register a new tenant and create a new application.

```javascript
import { Stock42 } from 'stock42-react-native-lib'

try {
	const { track, screenshot } = await Stock42({
			appVersion: '1.0',
			appName: 'Stock42Test',
			userAgent: 'stock42agent',
			applicationToken: 'bd23a6fb-02e6-4ac6-8e5c-2aa28bd83db2-FV2AH3',
			deviceId: '1',
		})
} catch (err) {
	console.info('Fatal Hit Errors: ', err)
}
```

## Sending hits

```javascript
	track({
		eventName: 'custom',
		screenName: 'home',
		functionName: `functionForSomeOne`,
		data: {
			msg: 'random msg',
		},
	})
```

## Sending screenshot
```javascript
screenshot({
			screenName: 'screentesting',
			base64:
				'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACClBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKDgUBAgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAtEQcFFx4HAwEAAAArEAcCCAsAAAAiDQUBBQYAAAAEAgEBBAYnNxI2TBktPxQTGwkcJw1qlTCEuzx1ozJxnjBxnjFKaCENEgYMEAVrlzGJwT4/XykYQkgYR08lSTZKaydObSEAAAAyRxeNx0BdgikJICYce6UnpdwknNEab5UlTT8fLA4RBgNVdiaOyUE2TRgIBwkWHyMNPlMgh7QqreYkmc0SRloBAwMTBwNVIw5kjC2Jwj8hMA1paGrNzcxlY2ISHiQTV3Uno9kno9gPPVE8Fgl5MRRijS6Hvz4bJwuFhIb////6+vq6ubkuLy8NQVcijLoEEBZWIA6NNhZYfSiHwD4cKQuEg4Xn5+dHR0cPBQEdY4Iop90LLTxQHg2uQBtDVRx7enz29vaipKU3NTRSIA6lPBYmPUgmotgMMEDOTSBLKxBgji4pPBIdHSBAQEAtFg6MMxPqWCWcOBUYTWQjlMSfPBm/Rx5RLREzIAw/FgiBLhHUUCH2XSe2QhkqLjIhjr4UUWzCSR/qVyXgVCPtWiX3XSfgVCKMOBooPEYehLAXXn15LhOpQBukPhp3LRM3KCQVTGQXZogNNkgDAQABCg4EERf2NICUAAAAI3RSTlMAASuBw+AKbtz+/t1vC475+izb/v7C3/7+23D6+o/6+pD+/nx5/ywAAAABYktHRGIruR08AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6AIGDx0mT1WRLwAAAQdJREFUGNNjYGBgYGRiZmFlZWFmYmQAAzZ2Dk5lFVU1Lm4eXjCfj19dQ1NLW0dXj5+PDSjAw69vYGhkbGJqZq4nwMPAIChkYWllbWNrZ+/g6GQhJMjALOzs4urm7uHp5e3j6yfCzCDqHxAYFBwSGhYeERkVbcHCIBYTGxefkJiUnJKaFpmeIcYglpmVnZObl5SUX1BYVFzCyiBaWlaeE1xRWVVdU1tX38DCwCze2NTc0trW3tHZ1d0jwcwgKNnb1z9h4qTJU6ZOmz6DQ5CBQUp65qzZc+bOm79g4SIZKaBLeWXlFi9Zumz5ipWr5BXAnuGV4lZcbbFmrRK3FC/Eu4yCEO8LgrwPAD5TP1gt5ja0AAAAPHRFWHRDb21tZW50AHhyOmQ6REFGN2tlTk1rQjg6NDQsajo1NjI0Mjg3ODc5MDUwODQ4NTMwLHQ6MjQwMjA2MTQOLTypAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTAyLTA2VDE1OjI5OjM4KzAwOjAw7iETDQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wMi0wNlQxNToyOTozOCswMDowMJ98q7EAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=',
		})
```
# Run Test
```bash
$ npx tsx test/
```