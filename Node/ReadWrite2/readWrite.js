// Use fs.promises to Read & Write Task: 
// Using fs.promises, read input.txt, convert to uppercase, and write to output.txt. 
// Ensure the directory ./out exists (create if missing). 
// Requirements: Use fs.promises.mkdir with { recursive: true } 
// Use try/catch for error handling Don’t swallow errors log with context

const fs = require("fs").promises;

const { log } = require("console");

fs.readFile("file1.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
function callback(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}
// fs.copyFile("file1.txt", "file2.txt", callback);
fs.appendFile("file2.txt", " world...", "utf8", callback );