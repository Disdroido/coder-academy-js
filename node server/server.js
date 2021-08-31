const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;
var validator = require('validator');

console.log(validator.isEmail('foobar@bar.com'));

let students = ["bob", "ethan", 'alaw', "jim", "coom"];

const server = http.createServer((req, res) => {
    let {method, url} = req;
    if (method === "GET" && url === "/") {
        console.log("matching students");
    } else if(method === "GET" && url === "/students") {
        console.log("getting students");
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(students));
    } else if(method === 'POST' && url === '/students') {
        console.log('create students');
    } else {
        try {
            throw "Route not found";
        } catch (error) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.write(`error message ${error}`);
        }
    }
    res.end();
})

server.listen(port, hostname, () => {
    console.log(`Server running at: ${hostname} on port: ${port}`);
})