const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Node\\Upload\\uploads', 'file1.txt');

const server = http.createServer((req, res) => {
    
    // Route 1: Serve the main HTML page
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    // Route 2: Display the file (inline)
    else if (req.url === '/view-file') {
        if (fs.existsSync(filePath)) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            // Streaming the file is better than reading the whole thing into memory
            const readStream = fs.createReadStream(filePath);
            readStream.pipe(res);
        } else {
            res.writeHead(404);
            res.end('File not found. Please upload a file first.');
        }
    }

    // Route 3: Download the file (attachment)
    else if (req.url === '/download-file') {
        if (fs.existsSync(filePath)) {
            res.writeHead(200, {
                'Content-Type': 'text/plain',
                // This header forces the browser to download instead of displaying
                'Content-Disposition': 'attachment; filename="my-downloaded-file.txt"'
            });
            const readStream = fs.createReadStream(filePath);
            readStream.pipe(res);
        } else {
            res.writeHead(404);
            res.end('File not found');
        }
    }
});

server.listen(3000, () => console.log('Server at http://localhost:3000'));