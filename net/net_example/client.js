const net = require('net');
const conn = net.createConnection({ 
  host: '8.tcp.ngrok.io', // change to IP address of computer or ngrok host if tunneling
  port: 15546 // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});