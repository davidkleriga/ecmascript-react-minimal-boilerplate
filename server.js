const path = require('path');
const express = require('express');

const server = express();
const port = process.env.PORT || 3000;

const compiledPath = path.join(__dirname, 'compiled');
const publicPath = path.join(__dirname, 'public');

server.use(express.static(compiledPath));
server.use(express.static(publicPath));
server.listen(port, () => console.log(`server listening on ${port}`));
