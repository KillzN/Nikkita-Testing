let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:NIKKITA BOT;;\nFN:NIKKITA BOT\nORG:NIKKITA BOT\nTITLE:\nitem1.TEL;waid=51947248937:51947248937\nitem1.X-ABLabel:NIKKITA BOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:NIKKITA BOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'NIKKITA BOT⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
