console.log("hello word baby !");

const express = require('express')
const http = require('http');
const app = express();

http.Server(app).listen(80, () => {
    console.log("Tétris en localhost !")
});

app.use("/", express.static(__dirname + "/../client"))

// app.use(express.static('client'));

// app.get('/', function (req, res) {
//   res.send('../client/index.html')
// })

// app.listen(80, function () {
//   console.log('Tétris en localhost baby !')
// })