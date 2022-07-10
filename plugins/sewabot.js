let handler = async m => m.reply(`
Sewa FantasyBot

💬Price List
1 Bulan: 25K
Permanent: 50K

📦 Via:
Dana
Gopay
Role/rank gtps
Rank Server mcpe
Pulsa (kalau owner nya mau)
`.trim()) // FantasyBot
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^sewa(bot)$/i

module.exports = handler
