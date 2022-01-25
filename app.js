const express = require('express');

const app = express();

//Make everything in public/ available
app.use(express.static('public'));

//app.set("views", __dirname + "/views");

app.get('/', (request, response, next) =>  response.sendFile(__dirname + "/views/index.html"));

//routes
app.get('/home', (request, response, next) =>  response.sendFile(__dirname + "/views/index.html"));
app.get('/about', (request, response, next) =>  response.sendFile(__dirname + "/views/about.html"));
app.get('/works', (request, response, next) =>  response.sendFile(__dirname + "/views/works.html"));
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));

//server listen 
app.listen(3000, () => console.log('Site request made'));