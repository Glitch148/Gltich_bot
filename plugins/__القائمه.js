import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*~『𝐍𝐈𝐍𝐉𝐀🍃』~*
*Asta*🪽👑
Glitch👑
*القاب الرتب العليا🪽*
*1-مادارا (الامبراطور)*
*2-استا (نائب الامبراطور)*
*3-غيتو (نائب الامبراطور)*
*4-ساسكي (اللورد)*
*5-ابيتوا (نائب اللورد)*
*6-ارثر (نائب اللورد)*
*7-يوزوها (الملكة)* 
*-----------------------------------------------*

*࿋᠁–𖥶  ༺🪽༻  𖥶–᠁࿋*
*اوامر الجروب* *🍃Asta*
*│ضيف* 
*│طرد*
*│ترقية*
*│اعفاء*
*│تحذير*
*│حذف_تحذير*
*│حذف*
*│منشن*
*│مخفي*
*│المشرفين*
*│لمنشن*
*│بروفايل*
*│الجرو*
*│دعوه*
*│تغيير_اللينك*
*│لفل*
*│جروب*
*│الترحيب*
*│المغادره*
*│ايات*
*│جروب قفل  فتح*
*│خط*
*│توب*
*│لينك*
*│يومي*
*│الماس*
*│ترتيب_البنك*
*│شراء*
*│هجوم*

*࿋᠁–𖥶  ༺🪽༻  𖥶–᠁࿋*
*اوامر دينية* *🍃Asta*
*│سورة*
*│حديث*
*│قران*
*│الله*

*࿋᠁–𖥶  ༺🪽༻  𖥶–᠁࿋*
*اوامر المطور* *🍃Asta*
*│ضيف_بريميام*
*│حذف_بريميام*
*│بان*
*│الغاء_البان*
*│اطفاء*
*│تفعيل*
*│المبندين*
*│إعادة*
*│اعادةتشغيل*
*│أدخل*
*│ضيف_اكس_بي*
*│ضيف_جواهر*

*࿋᠁–𖥶  ༺🪽༻  𖥶–᠁࿋*
*اوامر التنزيل* *🍃Asta*
*│انستغرام*
*│انستا*
*│شغل*
*│تيكتوك*
*│تويتر*
*│اغنية*
*│بحث*
*│فيديو*
*│تطبيق*
*│صوره*


*࿋᠁–𖥶  ༺🪽༻  𖥶–᠁࿋*

*اوامر الترفيه* *🍃Asta*
*│اكس او*
*│كت*
*│صراحه*
*│لو*
*│هل*
*│ترجم*
*│احزر*
*│زواج*
*│انطق*
*│تاج*
*│حكمه*
*│ميمز*
*│سوال*

*࿋᠁–𖥶  ༺🪽༻  𖥶–᠁࿋*
*اوامر التحويل* *🍃Asta*
*│ملصق*
*│سرقة*
*│لفيديو*
*│لصورة*
*│لانمي*
*│تخيل*
*│مكس*
*│لجواهر*
*│ستك*
*│تلجراف*
*│لكرتون*
*│باركود*

*࿋᠁–𖥶  ༺🪽༻  𖥶–᠁࿋*
*اوامر الاصوات* *🍃Asta*
*│عميق*
*│منفوخ*
*│تخين*
*│صاخب*
*│سريع*
*│تخين*
*│رفيع*
*│روبوت*
*│بطيء*
*│ناعم*
*│سنجاب*

*🫅🏻━━━حـقـوق Asta━━━┍🪽*
*⇆ رقـم الـمطـور  ↯*

 https://wa.me/+201021008985

*⇆ رابط النقابة  ↯*

https://chat.whatsapp.com/IT8PVHMLccL1M76pWuqzp7

*⇆ رابط الصحيفة ↯*

 https://chat.whatsapp.com/C1AKqtFvGpFGILwh939A89

*⇆ رابط الاعلانات ↯*

https://chat.whatsapp.com/FVxR73Rsk5R4Y2wtFbu2sD
`.trim()
  const _0x3c7cab=_0x5a1d;function _0x5a1d(_0x1b92fa,_0x42ca62){const _0x5a1d39=_0x42ca();_0x5a1d=function(_0x28d0f5,_0x342e36){_0x28d0f5=_0x28d0f5-0x0;let _0x4abc25=_0x5a1d39[_0x28d0f5];return _0x4abc25;};return _0x5a1d(_0x1b92fa,_0x42ca62);}function _0x42ca(){const _0xe1e20e=['\x32\x34\x30\x39\x31\x34\x37\x63\x4d\x54\x74\x76\x56','\x37\x30\x53\x78\x4b\x53\x77\x59','\x74\x72\x69\x6d','\x32\x37\x30\x38\x30\x32\x37\x74\x4f\x6e\x45\x55\x53','\x38\x33\x31\x38\x35\x33\x47\x51\x41\x6a\x79\x75','\x36\x5a\x72\x55\x6a\x56\x46','\ud835\udde9\ud835\uddd8\ud835\udde1\ud835\udde2\ud835\udde0\x20\ud835\udde0\ud835\uddd7\x20\ud83d\udc8c','\x34\x30\x36\x30\x37\x30\x4d\x4c\x59\x61\x65\x42','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x68\x61\x74\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x63\x6f\x6d\x2f\x4a\x58\x5a\x43\x32\x54\x57\x43\x63\x35\x72\x49\x68\x53\x4b\x50\x37\x57\x50\x61\x42\x7a','\x34\x59\x62\x47\x4d\x6b\x5a','\x38\x34\x30\x34\x39\x36\x49\x50\x4a\x65\x58\x50','\x33\x32\x32\x38\x33\x35\x61\x50\x61\x52\x47\x63','\x56\x49\x44\x45\x4f','\x33\x36\x33\x39\x34\x31\x30\x63\x4c\x53\x66\x50\x76','\x73\x65\x6e\x64\x65\x72','\x39\x4c\x74\x55\x79\x43\x46'];_0x42ca=function(){return _0xe1e20e;};return _0x42ca();}(function(_0x2979d9,_0x233f8f){const _0x32315e=_0x5a1d;const _0x3b1890=_0x2979d9();while(!![]){try{const _0x2cc4d6=parseInt(_0x32315e(0x5))/0x1+parseInt(_0x32315e(0x1))/0x2+-parseInt(_0x32315e(0xa))/0x3*(parseInt(_0x32315e(0x3))/0x4)+parseInt(_0x32315e(0x7))/0x5+-parseInt(_0x32315e(0xf))/0x6*(parseInt(_0x32315e(0xd))/0x7)+parseInt(_0x32315e(0x4))/0x8*(-parseInt(_0x32315e(0x9))/0x9)+-parseInt(_0x32315e(0xb))/0xa*(-parseInt(_0x32315e(0xe))/0xb);if(_0x2cc4d6===_0x233f8f){break;}else{_0x3b1890['push'](_0x3b1890['shift']());}}catch(_0x3284ad){_0x3b1890['push'](_0x3b1890['shift']());}}}(_0x42ca,0x772cd));let buttonMessage={'\x69\x6d\x61\x67\x65':pp,'\x63\x61\x70\x74\x69\x6f\x6e':str[_0x3c7cab(0xc)](),'\x6d\x65\x6e\x74\x69\x6f\x6e\x73':[m[_0x3c7cab(0x8)]],'\x66\x6f\x6f\x74\x65\x72':''+wm,'\x68\x65\x61\x64\x65\x72\x54\x79\x70\x65':0x4,'\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f':{'\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64':[m['\x73\x65\x6e\x64\x65\x72']],'\x65\x78\x74\x65\x72\x6e\x61\x6c\x41\x64\x52\x65\x70\x6c\x79':{'\x73\x68\x6f\x77\x41\x64\x41\x74\x74\x72\x69\x62\x75\x74\x69\x6f\x6e':!![],'\x6d\x65\x64\x69\x61\x54\x79\x70\x65':_0x3c7cab(0x6),'\x6d\x65\x64\x69\x61\x55\x72\x6c':null,'\x74\x69\x74\x6c\x65':_0x3c7cab(0x0),'\x62\x6f\x64\x79':null,'\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c':img,'\x73\x6f\x75\x72\x63\x65\x55\x72\x6c':_0x3c7cab(0x2)}}};
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗خطاء❗]', m)
}}
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i
handler.exp = 20
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
