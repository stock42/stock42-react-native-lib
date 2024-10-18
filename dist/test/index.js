"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const index_js_1 = require("../src/index.js");
async function init() {
    try {
        const { track, screenshot } = await (0, index_js_1.Stock42)({
            appVersion: '1.0',
            appName: 'Stock42Test',
            userAgent: 'stock42agent',
            applicationToken: 'bd23a6fb-02e6-4ac6-8e5c-2aa28bd83db2-FV2AH3',
            deviceId: '1',
        });
        assert_1.strict.ok(track, 'track function should be defined');
        assert_1.strict.ok(screenshot, 'screenshot function should be defined');
        for (let x = 0; x < 11; x++) {
            setTimeout(() => {
                track({
                    eventName: 'custom',
                    screenName: 'home',
                    functionName: `function${x}`,
                    data: {
                        x,
                        msg: 'random number',
                    },
                });
            }, 200 * x);
        }
        screenshot({
            screenName: 'screentesting',
            base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACClBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKDgUBAgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAtEQcFFx4HAwEAAAArEAcCCAsAAAAiDQUBBQYAAAAEAgEBBAYnNxI2TBktPxQTGwkcJw1qlTCEuzx1ozJxnjBxnjFKaCENEgYMEAVrlzGJwT4/XykYQkgYR08lSTZKaydObSEAAAAyRxeNx0BdgikJICYce6UnpdwknNEab5UlTT8fLA4RBgNVdiaOyUE2TRgIBwkWHyMNPlMgh7QqreYkmc0SRloBAwMTBwNVIw5kjC2Jwj8hMA1paGrNzcxlY2ISHiQTV3Uno9kno9gPPVE8Fgl5MRRijS6Hvz4bJwuFhIb////6+vq6ubkuLy8NQVcijLoEEBZWIA6NNhZYfSiHwD4cKQuEg4Xn5+dHR0cPBQEdY4Iop90LLTxQHg2uQBtDVRx7enz29vaipKU3NTRSIA6lPBYmPUgmotgMMEDOTSBLKxBgji4pPBIdHSBAQEAtFg6MMxPqWCWcOBUYTWQjlMSfPBm/Rx5RLREzIAw/FgiBLhHUUCH2XSe2QhkqLjIhjr4UUWzCSR/qVyXgVCPtWiX3XSfgVCKMOBooPEYehLAXXn15LhOpQBukPhp3LRM3KCQVTGQXZogNNkgDAQABCg4EERf2NICUAAAAI3RSTlMAASuBw+AKbtz+/t1vC475+izb/v7C3/7+23D6+o/6+pD+/nx5/ywAAAABYktHRGIruR08AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6AIGDx0mT1WRLwAAAQdJREFUGNNjYGBgYGRiZmFlZWFmYmQAAzZ2Dk5lFVU1Lm4eXjCfj19dQ1NLW0dXj5+PDSjAw69vYGhkbGJqZq4nwMPAIChkYWllbWNrZ+/g6GQhJMjALOzs4urm7uHp5e3j6yfCzCDqHxAYFBwSGhYeERkVbcHCIBYTGxefkJiUnJKaFpmeIcYglpmVnZObl5SUX1BYVFzCyiBaWlaeE1xRWVVdU1tX38DCwCze2NTc0trW3tHZ1d0jwcwgKNnb1z9h4qTJU6ZOmz6DQ5CBQUp65qzZc+bOm79g4SIZKaBLeWXlFi9Zumz5ipWr5BXAnuGV4lZcbbFmrRK3FC/Eu4yCEO8LgrwPAD5TP1gt5ja0AAAAPHRFWHRDb21tZW50AHhyOmQ6REFGN2tlTk1rQjg6NDQsajo1NjI0Mjg3ODc5MDUwODQ4NTMwLHQ6MjQwMjA2MTQOLTypAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTAyLTA2VDE1OjI5OjM4KzAwOjAw7iETDQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wMi0wNlQxNToyOTozOCswMDowMJ98q7EAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=',
        });
    }
    catch (err) {
        process.exit(1);
    }
}
init();
