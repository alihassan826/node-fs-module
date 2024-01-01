const fs = require('fs');

// writing file

// Synchronouse method

// fs.writeFileSync('./file.txt', 'WELCOME TO 2024')

// Asynchronouse method
// fs.writeFile('./file2.txt', 'WELCOME TO 2024', (err) => {
//     if (err) throw err;
//     console.log('File Created Succesfully')
// })

// Reading file

// Synchronouse method

// const getFileData = fs.readFileSync('./file.txt', 'utf-8');
// console.log(getFileData);

//Asynchronouse method

// fs.readFile('./file.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// Create Directory

// fs.mkdir('./upload', (err) => {
//     if (err) throw err;
//     console.log('Directory is created succesfully')
// })

// Delete Directory

// fs.rmdir('./upload', (err) => {
//     if (err) throw err;
//     console.log('Directory Deleted Succcessfully')
// })

// Delete file

// Synchronouse method

// fs.unlinkSync('./file.txt');

// Asynchronouse method

// fs.unlink('./file2.txt', (err) => {
//     if (err) throw err;
//     console.log('file deleted Successfully')
// })
