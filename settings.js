const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['6285273104129']
global.premium = ['6285273104129']
global.youtube = 'tiktok.com/@khorildoang4'
global.ownername = 'Khoril'
global.botname ='KhorilDoang4-BoT'
global.donasi = {
    saweria: 'https://saweria.co/NelBotMD',
    nomor: '085273104129'
}
global.packname = 'KhorilDoang4-BoT'
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '```「▰▰▰▱▱▱▱▱▱▱」𝗟𝗼𝗮𝗱𝗶𝗻𝗴...```'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
