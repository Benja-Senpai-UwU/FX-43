const help = (prefix, ownerBot, botName) => {
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
◪ *MENU*
  │
  ├─ ❏ ${prefix}logomakermenu
  ├─ ❏ ${prefix}imagemakermenu
  ├─ ❏ ${prefix}stickermakermenu
  ├─ ❏ ${prefix}searchmenu
  ├─ ❏ ${prefix}educationmenu
  ├─ ❏ ${prefix}kerangmenu
  ├─ ❏ ${prefix}downloadermenu
  ├─ ❏ ${prefix}mememenu
  ├─ ❏ ${prefix}groupmenu
  ├─ ❏ ${prefix}soundmenu
  ├─ ❏ ${prefix}musicmenu
  ├─ ❏ ${prefix}islammenu
  ├─ ❏ ${prefix}stalkmenu
  ├─ ❏ ${prefix}wibumenu
  ├─ ❏ ${prefix}18+menu
  ├─ ❏ ${prefix}funmenu
  ├─ ❏ ${prefix}todmenu
  ├─ ❏ ${prefix}informationmenu
  ├─ ❏ ${prefix}stayonscreenmenu
  ├─ ❏ ${prefix}ownermenu
  └─ ❏ ${prefix}othermenu
◪ *OTHER*
  │
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}virtex
  ├─ ❏ ${prefix}qrcode
  ├─ ❏ ${prefix}timer
  ├─ ❏ ${prefix}fml
  └─ ❏ ${prefix}fml2`
}
exports.help = help
