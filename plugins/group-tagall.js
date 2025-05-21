const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = ` ── 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎: * ${pesan}`;
  let teks = `*𝘽𝙪𝙚𝙣𝙤𝙨 𝙙𝙞𝙖𝙨, 𝙩𝙖𝙧𝙙𝙚𝙨,𝙣𝙤𝙘𝙝𝙚𝙨 𝙡𝙞𝙙𝙚𝙧𝙚𝙨 𝙙𝙚 𝙚𝙦𝙪𝙞𝙥𝙤𝙨, 𝙙𝙚𝙨𝙥𝙞𝙚𝙧𝙩𝙚𝙣🌤*\n\n *${oi}\n`;
  for (const mem of participants) {
    teks += `*🩶🎙 * @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└𝙄𝙜:𝙣𝙞𝙠𝙠𝙞𝟯𝟬.𝙛*`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;