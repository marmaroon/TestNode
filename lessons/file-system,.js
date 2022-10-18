const fs = require('fs')
const path = require('path')

console.log('START')

fs.mkdir(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), (err) => {
    if(err) {
        console.log(err)
    }
    console.log('Папка создана')
})

console.log('END')