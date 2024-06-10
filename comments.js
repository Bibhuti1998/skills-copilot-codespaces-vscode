// Create web server
// Create a web server that listens for incoming requests on port 3000. When a request is received, the server should respond with a status code of 200 and the following JSON object:
// {
//   "status": "success",
//   "message": "You have connected to the server. This is the response from the server!"
// }
// This JSON object should be sent as the response body. To test the server, you can use the curl command in your terminal.
// curl http://localhost:3000
// The curl command should output the JSON object above.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'You have connected to the server. This is the response from the server!',
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Path: comments.js
// Create a web server that listens for incoming requests on port 3000. When a request is received, the server should respond with a status code of 200 and the following JSON object:
// {
//   "status": "success",
//   "message": "You have connected to the server. This is the response from the server!"
// }
// This JSON object should be sent as the response body. To test the server, you can use the curl command in your terminal.
// curl http://localhost:3000
// The curl command should output the JSON object above.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'You have connected to the server. This is the response from the server!',
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Path: comments.js
// Create a web server that listens for incoming requests on port 3000. When a request is received, the server should respond with a status code of 200 and the following JSON object:
// {
//   "status": "success",
//   "message": "You have connected to the server. This is the response from the server!"
// }
// This JSON object should