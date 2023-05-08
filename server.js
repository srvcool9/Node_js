// import http from "http";
// import fs from "fs";

import express from 'express'
import bodyParser from 'body-parser'


//traditional way

// const server = http.createServer((req, response) => {
//   let url = req.url;

//   fs.readFile("home.html", function (err, data) {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(data);
//     return response.end();
//   });
// });

// server.listen(process.env.PORT || 9090);


//express way...
const app= express()
app.use(bodyParser.json)
app.listen(process.env.PORT || 9090, ()=>{
    console.log("Server is up and running");
})

