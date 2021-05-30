const express = require('express');
const cors = require('cors');
const hbs = require('hbs');

const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const server = require('http').createServer(app);
app.use(express.json());
app.use(cors());

const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
