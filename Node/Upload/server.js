const http = require("http");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

const server = http.createServer((req, res) => {
  // 1. Serve the HTML Form
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

  // 2. Handle the File Upload
  else if (req.url === "/upload" && req.method === "POST") {
    const form = new formidable.IncomingForm();

    // Ensure the uploads directory exists
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

    form.uploadDir = uploadDir;
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500);
        return res.end("Upload Error");
      }

      const uploadedFile = files.fileToUpload[0];
      const oldPath = uploadedFile.filepath;
      const newPath = path.join(uploadDir, uploadedFile.originalFilename);

      // Move file to final destination
      fs.rename(oldPath, newPath, (renameErr) => {
        if (renameErr) {
          res.writeHead(500);
          return res.end("Error saving file");
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`File uploaded successfully to: ${newPath}`);
      });
    });
  }

  // 3. 404 Not Found
  else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
