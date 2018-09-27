import app from './app';

let normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

let PORT = normalizePort(process.env.PORT || '4000');

if (process.env.NODE_ENV === 'test') {
  PORT = 3333;
}

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
})

module.exports = app;
