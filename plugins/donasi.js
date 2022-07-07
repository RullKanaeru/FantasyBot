let handler = async m => m.reply(`
            .✨.Donasi Buat Bot.🔖.

            Dana : ?
            Pulsa : ?
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
