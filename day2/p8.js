//create a file data.json and store data in it so that we can retrieve data anytime
const http = require('http');
const fs = require('fs').promises;
let users = [];

const server = http.createServer(async (req, res) => {
    res.writeHead(200,{"content-type":'application/json'});

    if (req.url === '/setdata' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async () => {
                const user = JSON.parse(body);
                users.push(user);
                await fs.writeFile('./data.json', JSON.stringify(users, null, 2));
                console.log('File updated successfully');
                res.end(JSON.stringify({ message: 'Data received and saved' }));
        });
    } else if (req.url === '/getdata' && req.method === 'GET') {
            const data = await fs.readFile('./data.json', 'utf8');
            res.end(data);

    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Not found' }));
    }
});

server.listen(9000, () => {
    console.log('Server is running on port 9000');
});
