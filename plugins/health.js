let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.health >= 200) return m.reply(`
Darahmu Penuh!
`.trim())
    const heal = 50 
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((200 - user.health) / heal)))) * 1
    if (user.potion < count) return m.reply(`
Potion tidak cukup, kamu hanya punya *${user.potion}* 🧃Potion
Ketik *${usedPrefix}buy potion ${count - user.potion}* Untuk membeli 🧃Potion
`.trim())
    user.potion -= count * 1
    user.health += heal * count
    m.reply(`
╔════════════════════════════════╗
 |Berhasil memakai *${count}* 🧃Potion
╚════════════════════════════════╝
`.trim())
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal)$/i
handler.limit = true

module.exports = handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
