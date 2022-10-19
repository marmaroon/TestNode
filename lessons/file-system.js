const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
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

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwerty 7 9 10 цуцку', (err) => {
//     if(err) {
//         throw err;
//     }
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ADD SOME TEXT', (err) => {
//         if(err) {
//             throw err;
//         }
//         console.log('Файл записан')
//     })
// })


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject)  => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()

    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject)  => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject)  => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '578'))
    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
    .then(data => console.log(data))
    .catch(err => console.log(err))
