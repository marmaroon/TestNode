const fs = require('fs')
const path = require('path')

// console.log('START')

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err)
//         return;
//     }
//     console.log('Папка создана')
// })

// console.log('END')

// fs.rmdir(path.resolve(__dirname,'dir'), (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('Папка удалена')
// })

fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwerty 7 9 10', (err) => {
    if(err) {
        throw err;
    }
    console.log('Файл записан')
})