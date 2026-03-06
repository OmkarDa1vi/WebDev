const { log } = require("console");
const fs = require("fs");

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