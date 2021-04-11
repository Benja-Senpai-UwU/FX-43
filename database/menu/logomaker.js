const logomaker = (prefix, botName, ownerName) => {
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
◪ *LOGO MAKER*
  │
  ├─ ❏ ${prefix}marvellogo
  ├─ ❏ ${prefix}ninjalogo
  ├─ ❏ ${prefix}logowolf
  ├─ ❏ ${prefix}logowolf2
  ├─ ❏ ${prefix}phlogo
  ├─ ❏ ${prefix}neonlogo
  ├─ ❏ ${prefix}neonlogo2
  ├─ ❏ ${prefix}lionlogo
  ├─ ❏ ${prefix}pubglogo
  └─ ❏ ${prefix}jokerlogo`
}
exports.logomaker = logomaker
