const http = require('http');

// client requesting, server responding thats why we use req and res
const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome doge')
    } else if (req.url === '/about') {
        res.end('Here is our short history')
    } else {
    res.end(`
        <h1>Opps!</h1>
        <p>We can't seem to find the page youre looking for</p>
        <a href="/">Backhome</a>
    `)
    }
})

server.listen(5000)
