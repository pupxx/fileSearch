var http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    fs.readFile('./test.php', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
        //  If your using express, I think res.send replaces res.write + res.end()
    })
}).listen(3030)