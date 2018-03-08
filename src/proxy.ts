import * as WebSocket from 'ws';

const port = parseInt(process.argv[2]);

const wss = new WebSocket.Server({ port });

let client: WebSocket | undefined;

wss.on('error', ws => {
    console.log("ERROR", ws);
})

wss.on('connection', (ws, req) => {
    const t = req.url!.split("/");
    const role = t[t.length - 1];
    console.log(`proxy connection from ${role}`);
    switch (role) {
        case 'server':
            ws.on('message', message => {
                console.log(`proxy role ${role} received: "${message}"`);
                if (client)
                    client.send(message);
                else
                    console.log("proxy waiting for client to connect.");
            });
            break;
        case 'client':
            client = ws;
            ws.on('close', () => {
                client = undefined;
            })
            break;
    }
});
