let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m

let badwordRegex = /kontol|memek|pepek|asu|bajingan|kntl|mmk|tempek|dancok|Cok|pussy|idiot|shit|fuck|koncol|asuw/i // tambahin sendiri

handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.badword && !chat.isBanned && isBadword) {
        user.warning += 1
        this.send2Button(m.chat, `*Badword terdeteksi!*
Warning: ${user.warning} / 5
Jika warning mencapai 5 kamu akan dibanned

✨ketik *#on antibadword* untuk menyalakan antibadword
✨ketik *#astagfirullah* atau *#maaf* untuk mengurangi warning

“🦋 Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`, 'Nyalakan Antibadword', ',1 antibadword', 'Astaghfirullah', ',maaf', m)
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                    // this.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
                }
            }
        }
    }
    return !0
}
module.exports = handler
