const imagemaker = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
◪ *SOBRE*
  │
  ├─ ❏ ${prefix}info (Info Del Bot)
  ├─ ❏ ${prefix}blocklist (Lista De Usuarios Bloqueados)
  ├─ ❏ ${prefix}chatlist (Lista De Chat)
  ├─ ❏ ${prefix}ping (Velocidad Del Bot)
  └─ ❏ ${prefix}bugreport (Reportar Bug)
◪ *IMAGE MAKER*
  │
  ├─ ❏ ${prefix}bpink
  ├─ ❏ ${prefix}snowwrite
  ├─ ❏ ${prefix}3dtext
  ├─ ❏ ${prefix}firetext
  ├─ ❏ ${prefix}glitch
  ├─ ❏ ${prefix}shadow
  ├─ ❏ ${prefix}burnpaper
  ├─ ❏ ${prefix}coffee
  ├─ ❏ ${prefix}lovepaper
  ├─ ❏ ${prefix}woodblock
  ├─ ❏ ${prefix}qowheart
  ├─ ❏ ${prefix}mutgrass
  ├─ ❏ ${prefix}undergocean
  ├─ ❏ ${prefix}woodenboards
  ├─ ❏ ${prefix}wolfmetal
  ├─ ❏ ${prefix}metalictglow
  ├─ ❏ ${prefix}8bit
  ├─ ❏ ${prefix}herrypotter
  └─ ❏ ${prefix}quotemaker`
}
exports.imagemaker = imagemaker
