const http = require("http");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

// Change target directory to 'downloads'
const downloadDir = path.join(__dirname, "downloads");
// This is the specific file we will view/download in this example
const targetFile = path.join(downloadDir, "file1.txt");

// Ensure the 'downloads' folder exists
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const server = http.createServer((req, res) => {

    // 1. Serve HTML page
    if (req.url === "/" && req.method === "GET") {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading HTML");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    // 2. Upload File (Saving into downloads folder)
    else if (req.url === "/upload" && req.method === "POST") {
        const form = new formidable.IncomingForm({
            uploadDir: downloadDir, // Temp files go here first
            keepExtensions: true
        });

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500);
                return res.end("Upload Error");
            }

            const uploadedFile = files.fileToUpload[0];
            const oldPath = uploadedFile.filepath;
            
            // We rename it specifically to file1.txt so your 'view' link stays valid
            const newPath = path.join(downloadDir, "file1.txt");

            fs.rename(oldPath, newPath, (renameErr) => {
                if (renameErr) {
                    res.writeHead(500);
                    return res.end("Error moving file to downloads folder");
                }
                // Redirect back home to see the update
                res.writeHead(302, { 'Location': '/' });
                res.end();
            });
        });
    }

    // 3. View File (Looking in downloads folder)
    else if (req.url === "/view-file") {
        if (fs.existsSync(targetFile)) {
            res.writeHead(200, { "Content-Type": "text/plain" });
            fs.createReadStream(targetFile).pipe(res);
        } else {
            res.writeHead(404);
            res.end("No file found in downloads folder.");
        }
    }

    // 4. Download File (From downloads folder)
    else if (req.url === "/download-file") {
        if (fs.existsSync(targetFile)) {
            res.writeHead(200, {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": 'attachment; filename="file1.txt"'
            });
            fs.createReadStream(targetFile).pipe(res);
        } else {
            res.writeHead(404);
            res.end("File not found");
        }
    }

    else {
        res.writeHead(404);
        res.end("Route Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
    console.log(`Files will be stored in: ${downloadDir}`);
});