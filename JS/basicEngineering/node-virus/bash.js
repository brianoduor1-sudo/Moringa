function createAndWriteFile() {
    let fileData = "";
    const fileName = `${new Date().toISOString()}.txt`;
    const cb = (error) => {};

    for (let i = 0; i < 500000; i++) {
        fileData = fileData + `\nGot you ${i}\n`;
        // fs.appendFile(fileName, `Got you ${i}`, cb);
    }

    // appendFile, writeFile
    fs.writeFile(fileName, fileData, cb);
    // writeFile ->
}

function main() {
    // careful // endless
    for (let i = 0; i < 200; i++) {
        createAndWriteFile();
    }
}

main()