const http = require('http');
const fs = require('fs');

let fileText = fs.readFileSync('./text.txt');

const server = http.createServer(function (req, res) {
    if (req.url == "/readfile") {
        res.write(fileText);
    } else if (req.url == "/writefile") {
        fs.writeFileSync('./text.txt',"some dummy text");
        fileText = fs.readFileSync('./text.txt');
        res.write(fileText);
    }else if (req.url == "/process-info") {
        res.write("Current Node Version: " + process.version);
        res.write("\nNode Release Information " + process.release);
        res.write("\nCurrent Process ID: " + process.pid);
        res.write("\nMemory Usage: " +process.memoryUsage);
        res.write("\nUptime Detail: " + process.uptime);
    }
    res.end();
  });

  let port = 3000;
  server.listen(port);
  console.log("Server is listing on port: " + port);