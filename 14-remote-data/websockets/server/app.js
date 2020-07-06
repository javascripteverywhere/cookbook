const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  // object being passed back and forth between
  // client and server
  const counter = { counter: 1, strng: '' };

  // send first communication to client
  ws.send(JSON.stringify(counter));

  // on response back
  ws.on('message', message => {
    const ct = JSON.parse(message);
    ct.counter = Number(ct.counter) + 1;
    if (ct.counter < 100) {
      ws.send(JSON.stringify(ct));
    }
  });
});
