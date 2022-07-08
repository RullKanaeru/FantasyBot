let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format anda salah! Contoh :*

  *➜ #group close*
  *➜ #group open*

⭐ #group close Tidak akan work jika
grub dalam kondisi tertutup, harus menulis format #group open

⭐ #group open Tidak akan work jika
Grub masih terbuka, harus menulis format #group close

║▌│█║▌│ █║▌│█│║▌║
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group|grub|open|close)$/i

handler.admin = true
handler.botAdmin = true

module.exports = handler
