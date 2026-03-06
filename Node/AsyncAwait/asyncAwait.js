// Async/Await Error Handling Task: Implement safeJsonRead(filePath) 
// that: Reads a file Parses JSON On invalid JSON, 
// throws a custom error: new Error("Invalid JSON in: " + filePath) 
// Edge case: File doesn’t exist → throw the original error unchanged.

// const { log } = require("console");
// const fs = require("fs");

// async function Read(path){
//     try{
//         const data = await fs.readFile("file1.txt", "utf8");
//         try{
//             return JSON.parse(data);
//         }catch{
//             throw new Error("Invalid JSON in: " + filePath);
//         }
//     }catch(err){
//         console.log(err);
//     }
// }

// async function Test(){
//     try{
//         const data = await Read("file.json");
//         console.log("Successfully done...", data);
//     }catch(err){
//         console.log(err);
//     }
// }

// Test();

const fs = require("fs").promises;

async function safeJsonRead(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf8");

        try {
            return JSON.parse(data);
        } catch {
            throw new Error("Invalid JSON in: " + filePath);
        }

    } catch (err) {
        throw err;
    }
}

async function test() {
    try {
        const data = await safeJsonRead("file.json");
        console.log("Successfully done...", data);
    } catch (err) {
        console.log("Error: ", err.message);
    }
}

test();