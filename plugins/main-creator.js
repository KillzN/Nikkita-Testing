let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:KILLBOT;;\nFN:KILLBOT\nORG:KILLBOT\nTITLE:\nitem1.TEL;waid=51947248937:51947248937\nitem1.X-ABLabel:KILLBOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:KILLBOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'KILLBOT⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
