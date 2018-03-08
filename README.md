# proxyfight

Extremely simple proxy to connect a "server" (sender) and a "client" (receiver).

**proxyfight is a supported Microsoft product. Use at your own risk.**

# use

* `npm install proxyfight`
* `node lib/proxy.js 8080` (or the port number of your choice)

## client (receiver)

```ts
import * as WebSocket from 'ws'; // skip this line if you're in a browser

const ws = new WebSocket('ws://localhost:8000/client');

ws.on('open', () => {
    console.log("client connected");
    ws.on('message', message => {
        console.log(`client received ${message}`);
    })
});
```

## server (sender)

```ts
import * as WebSocket from 'ws'; // skip this line if you're in a browser

const ws = new WebSocket('ws://localhost:8000/server');

ws.on('open', () => {
    console.log("server connected");
    ws.send("hey"),
});
```
