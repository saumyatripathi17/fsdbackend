const http = require('http');
const fs = require('fs').promises; // Import fs with promises

const server = http.createServer(async (req, res) => {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const data = await fs.readFile('index.html', 'utf-8');
        res.end(data);
    } catch (error) {
        res.statusCode = 500;
        res.end('<h1>Internal Server Error</h1>');
        console.error('Error reading file:', error);
    }
});

server.listen(9000, () => {
    console.log('Server is running on port 9000');
});
