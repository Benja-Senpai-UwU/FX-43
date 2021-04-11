const wibu = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerBot}
◪ *SOBRE*
  │
  ├─ ❏ ${prefix}info (Info Del Bot)
  ├─ ❏ ${prefix}blocklist (Lista De Usuarios Bloqueados)
  ├─ ❏ ${prefix}chatlist (Lista De Chat)
  ├─ ❏ ${prefix}ping (Velocidad Del Bot)
  └─ ❏ ${prefix}bugreport (Reportar Bug)
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime
  ├─ ❏ ${prefix}pokemon
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}waifu
  ├─ ❏ ${prefix}randomanime
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}husbu2
  ├─ ❏ ${prefix}wait
  └─ ❏ ${prefix}nekonime`
}
exports.wibu = wibu
