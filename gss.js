require("dotenv").config();  
require('./config')
const Func = ('./lib/function.js');
const fonts = require('./lib/font.js');
const menufont = require('./lib/menufont.js');
const DB = require('./lib/scraper')
const uploadImage = require('./lib/uploadImage.js');
const languages = require('./lib/language');
const got = require('got');
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const SpottyDL = require('spottydl');
const { youtubedl } = require('@bochilteam/scraper-sosmed');
const availableStyles = Object.keys(fonts);
const availableFontStyles = Object.keys(menufont);
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser,getAggregateVotesInPollMessage, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const fsx = require('fs-extra')
const yts = require('yt-search');
const ytsr = require('ytsr');
const ytdl = require('@distube/ytdl-core');
const util = require('util')
const truecallerjs = require("truecallerjs");
const ffmpeg = require('fluent-ffmpeg');
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const openai = require('openai');
const path = require('path')
const fg = require('api-dylux');
const cheerio = require('cheerio');
const os = require('os')
const googleTTS = require('google-tts-api');
const search = require('aptoide-scraper').search;
const download = require('aptoide-scraper').download;
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);
const imageSize = require('image-size');
const { PDFDocument, rgb } = require('pdf-lib');
const speed = require('performance-now')
const acrcloud = require ('acrcloud');
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const osu = require("node-os-utils");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const translate = require('translate-google-api');
  const { cpus, totalmem, freemem } = require("os");
  const {  sizeFormatter } = require("human-readable");
 const pingSt = new Date();
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, reSize, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: 'c33c767d683f78bd17d4bd4991955d81',
    access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
});
const apiKey = "AIzaSyAFKLsFovEAwKkjScCZMdJwn4V6Ns2VJzA";
const genAI = new GoogleGenerativeAI(apiKey);
const tempMailAddresses = {};
const defaultLang = 'en'
const { addPremiumUser, getPremiumExpired, getPremiumPosition,  expiredPremiumCheck, checkPremiumUser, getAllPremiumUser,} = require('./lib/premiun');

// read database
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/premium.json'))

// Initialize default values
let autoread = false;
let available = false;
let autoTyping = false;
let autoRecord = false;

const mongoDBUrl = process.env.MONGO_DB || 'mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority';

let currentPollIndex = 0;
let ytsOptionIndex = 1;
const ytsSearchResults = new Map();
let props;
const audioSearchResults = new Map();
let optionIndex = 1;
let index = 1;
const reportedMessages = {};
const videoSearchResults = new Map();
let titleUrlMap = {}; 
const userContextMap = new Map();
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))

const warnUsers = []; 
let warnedUsers = [];
const userWarnings = {};

module.exports = gss = async (gss, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd = body.startsWith(prefix)
    const notCmd = body.startsWith('')
    const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)



//prefix v2
const pric = /^#|\^/.test(body) ? body.match(/^#|\^/gi) : '.';
const isAsu = body.startsWith(global.prefa[0]) || body.startsWith(global.prefa[1]);
const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : '';


        const pushname = m.pushName || "No Name"
        const botNumber = await gss.decodeJid(gss.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
const isViewOnce = ["viewOnceMessageV2","viewOnceMessage"].includes(m.type)
	const botname = "EKUSHI ☆";
	const devlopernumber = "6283878300449";
        // Group
        const groupMetadata = m.isGroup ? await gss.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const Badgss = JSON.parse(fs.readFileSync('./database/bad.json'))
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(m.from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(m.from) : false
          const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
 
	
let format = sizeFormatter({ 
     std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC' 
     decimalPlaces: 2, 
     keepTrailingZeroes: false, 
     render: (literal, symbol) => `${literal} ${symbol}B`, 
 })
 
//  Bot Prosess Time
  const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds
//Uptime
  const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
  
  const runMessage = `*☀️ ${day} Hari*\n *🕐 ${hours} Jam*\n *⏰ ${minutes} Menit*\n *⏱️ ${seconds} Detik*\n`;
  
async function doReact(emoji) {
      let react = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await gss.sendMessage(m.chat, react);
    }


async function sendTypingEffect(gss, m, message, typingSpeed) {
  if (!message) {
    console.error('Error: Message is undefined or empty.');
    return;
  }

  const gptthink = await gss.sendMessage(m.chat, { text: 'Thinking...' });

  const words = message.split(' ');

  let i = 0;
  const typewriterInterval = setInterval(() => {
    if (i < words.length) {
      const typedText = words.slice(0, i + 1).join(' ');
      gss.relayMessage(m.chat, {
        protocolMessage: {
          key: gptthink.key,
          type: 14,
          editedMessage: {
            conversation: typedText,
          },
        },
      }, {});
      i++;
    } else {
      clearInterval(typewriterInterval); // Stop the typewriter effect
    }
  }, typingSpeed);
}





function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

// Helper function to format upload date
function formatUploadDate(uploadDate) {
  const formattedDate = new Date(uploadDate);
  if (isNaN(formattedDate.getTime())) {
    // If the date is invalid, return a message
    return 'Invalid Date';
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return formattedDate.toLocaleDateString(undefined, options);
}

	
	
async function getIPInfo() {
  try {
    const response = await axios.get('https://api.myip.com');
    const data = response.data;
    
    let ip = data.ip || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cr = data.country || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cc = data.cc || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';

    return { ip, cr, cc };
  } catch (error) {
    console.error('Error:', error);
    return { ip: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cr: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cc: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' };
  }
}

async function mainSys() {

  let NotDetect = 'Not Detect';
  let cpux = osu.cpu;
  let cpuCore = cpux.count();
  let drive = osu.drive;
  let mem = osu.mem;
  let netstat = osu.netstat;
  let HostN = osu.os.hostname();
  let OS = osu.os.platform();
  let ipx = osu.os.ip();


     const used = process.memoryUsage() 
     const _cpus = cpus().map(cpu => { 
         cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0) 
         return cpu 
     }) 
     const cpu = _cpus.reduce((last, cpu, _, { 
         length 
     }) => { 
         last.total += cpu.total 
         last.speed += cpu.speed / length 
         last.times.user += cpu.times.user 
         last.times.nice += cpu.times.nice 
         last.times.sys += cpu.times.sys 
         last.times.idle += cpu.times.idle 
         last.times.irq += cpu.times.irq 
         return last 
     }, { 
         speed: 0, 
         total: 0, 
         times: { 
             user: 0, 
             nice: 0, 
             sys: 0, 
             idle: 0, 
             irq: 0 
         } 
     })

 

let cpuPer 
     let p1 = cpux.usage().then(cpuPercentage => { 
         cpuPer = cpuPercentage 
     }).catch(() => { 
         cpuPer = NotDetect 
     }) 
     let driveTotal, driveUsed, drivePer 
     let p2 = drive.info().then(info => { 
         driveTotal = (info.totalGb + ' GB'), 
             driveUsed = info.usedGb, 
             drivePer = (info.usedPercentage + '%') 
     }).catch(() => { 
         driveTotal = NotDetect, 
             driveUsed = NotDetect, 
             drivePer = NotDetect 
     }) 
     let ramTotal, ramUsed 
     let p3 = mem.info().then(info => { 
         ramTotal = info.totalMemMb, 
             ramUsed = info.usedMemMb 
     }).catch(() => { 
         ramTotal = NotDetect, 
             ramUsed = NotDetect 
     }) 
     let netsIn, netsOut 
     let p4 = netstat.inOut().then(info => { 
         netsIn = (info.total.inputMb + ' MB'), 
             netsOut = (info.total.outputMb + ' MB') 
     }).catch(() => { 
         netsIn = NotDetect, 
             netsOut = NotDetect 
     }) 
     await Promise.all([p1, p2, p3, p4]) 
     let _ramTotal = (ramTotal + ' MB') 

  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let weeks = d.toLocaleDateString(locale, {
    weekday: 'long',
  });
  let dates = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  let times = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  // Call the getIPInfo function to retrieve IP, Country, and Country Code
  const { ip, cr, cc } = await getIPInfo();
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "💻",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, successReactionMessage); 
 
 m.reply(`
  - *ᴘ ɪ ɴ ɢ* - 
  ${new Date() - pingSt} ms 
  
  - *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* - 
  ${runMessage}
  
  - *s ᴇ ʀ ᴠ ᴇ ʀ* - 
  *🛑 Rᴀᴍ:* ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect}) 
  *🔵 FʀᴇᴇRᴀᴍ:* ${format(freemem())}
 
  *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()} 
  *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()} 
  *💻 ᴏs:* ${OS} 
  *🌎 ᴄᴏᴜɴᴛʀʏ:* ${cr} 
  *💬 ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ:* ${cc} 

  *🔮 ᴄᴘᴜ ᴄᴏʀᴇ:* ${cpuCore} Core 
  *🎛️ ᴄᴘᴜ:* ${cpuPer}% 
  *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times} 
   
    - *ᴏ ᴛ ʜ ᴇ ʀ* - 
  *📅 Wᴇᴇᴋꜱ:* ${weeks} 
  *📆 Dᴀᴛᴇꜱ:* ${dates} 
 
  *乂 ɴᴏᴅᴇJS ᴍᴇᴍᴏʀʏ ᴜsᴀɢᴇ* 
   ${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```' }
  `);
}


try {
  const textLower = m.text.toLowerCase();

  if (textLower === 'send' || textLower === 'statusdown' || textLower === 'take') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;

    if (quotedMessage) {
      // Check if it's an image
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        gss.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        m.reply('*Status Download Successful: by EKUSHI ☆*');
      }

      // Check if it's a video
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        gss.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        m.reply('*Status Download Successful: by EKUSHI ☆*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}




	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    

/*
let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
              if (!('antiviewonce' in chats)) chats.antiviewonce = false
              if (!('antibot' in chats)) chats.antibot = true
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                antiviewonce: false,
                antibot: true,
                mute: false,
                antilink: false,
            }

*/


let chats = db.data.chats[m.chat];
if (typeof chats !== 'object') db.data.chats[m.chat] = {};
if (chats) {
    if (!('antiviewonce' in chats)) chats.antiviewonce = true;
    if (!('antibot' in chats)) chats.antibot = true;
    if (!('mute' in chats)) chats.mute = false;
    if (!('antilink' in chats)) chats.antilink = false;
    if (!('antidelete' in chats)) chats.antidelete = true;
    if (!('animeUpdateActive' in chats)) chats.animeUpdateActive = false; // Initialize animeUpdateActive
} else {
    global.db.data.chats[m.chat] = {
        antiviewonce: false,
        antibot: true,
        mute: false,
        antilink: false,
        antidelete: true,
        animeUpdateActive: false, // Add animeUpdateActive by default
    };
}

	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = false
		if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: false,
		status: 0,
		autobio: false
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!gss.public) {
            if (!m.key.fromMe) return
        }

        
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/kolkata"
        })


        /*antiviewonce*/
    if ( db.data.chats[m.chat].antiviewonce && m.mtype == 'viewOnceMessageV2') {
    	if (m.isBaileys && m.fromMe) return
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await gss.sendMessage(m.chat, { forward: val }, { quoted: m })
    }


/*AUTOBIO*/
async function setBio() {
    setInterval(async () => {
        if (db.data.settings[botNumber].autobio) {
            const date = new Date();
            const options = {
                timeZone: 'Asia/Kolkata',
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            const timeString = moment(date).tz('Asia/Kolkata').format('MM/DD/YYYY ⌚ hh:mm:ss A');
            const status = `📆 ${timeString} EKUSHI ☆ ⚡`;
            await gss.updateProfileStatus(status).catch(_ => _);
        }
    }, 60000);
}

setBio();


if (command) {
            
if (!m.isGroup && !isCreator && global.onlygroup) {
    return m.reply("Hello, because we want to reduce spam, please use the bot in a group!\n\nIf there are joint interests, please type .owner to contact the owner.")
}
// Private Only
if (!isCreator && global.onlypc && m.isGroup) {
    return m.reply("Hello, if you want to use this bot, please chat privately with the bot.")
}



        if (global.autoTyping) {
    if (m.chat) {
        gss.sendPresenceUpdate("composing", m.chat);
    }
}

if (global.autoRecord) {
    if (m.chat) {
        gss.sendPresenceUpdate("recording", m.chat);
    }
}

if (global.available) {
  gss.sendPresenceUpdate('available', m.chat);
} else {
  gss.sendPresenceUpdate('unavailable', m.chat);
}

if (global.autoread) {
  
  gss.readMessages([m.key]);
}

if (global.autoBlock && m.sender.startsWith('212')) {
  
    gss.updateBlockStatus(m.sender, 'block');
}
}



   
	    
moment.tz.setDefault("Asia/Jakarta").locale("id");

const today = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY');
const wibTime = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const currentTime = moment().tz('Asia/Jakarta').format('HH:mm:ss');

let greetingTime;

if (currentTime < "04:00:00") {
  greetingTime = 'Selamat Malam 🏙️';
} else if (currentTime < "07:00:00") {
  greetingTime = 'Selamat Subuh 🌆';
} else if (currentTime < "12:00:00") {
  greetingTime = 'Selamat Pagi 🌄';
} else if (currentTime < "15:00:00") {
  greetingTime = 'Selamat Siang 🌤️';
} else if (currentTime < "19:00:00") {
  greetingTime = 'Selamat Sore 🌇';
} else {
  greetingTime = 'Selamat Malam 🌆';
}

	    
if (antiToxic) {
    if (Badgss.includes(messagesD)) {
        if (m.text) {
            const bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using a bad word, but as an admin/owner, you won't be kicked 😇`;
            
            if (isAdmins || m.key.fromMe || isCreator) {
                return m.reply(bvl);
            } else {
                await gss.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
                
                await gss.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                
                await gss.sendMessage(m.from, {
                    text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: m });
            }
        }
    }
}

	    
const handleMessageFunctions = {};

function addHandleMessageFunction(word, userNumber, responseText) {
  handleMessageFunctions[word] = async function (m) {
    if (m.text && m.text.toLowerCase().includes(word.toLowerCase())) {
      if (isBan) return m.reply(mess.banned);
      if (isBanChat) return m.reply(mess.bangc);
      if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');

      let hiddenTeks = responseText + '\u200B'.repeat(400); 

      gss.sendMessage(m.chat, { text: hiddenTeks, mentions: [userNumber] }, { quoted: m });
    }
  };
}

addHandleMessageFunction('weka', '6281291025867@s.whatsapp.net', '    𝕎𝔼𝕂𝔸 𝕁𝕆𝕄𝕆𝕂    ');
addHandleMessageFunction('oji', '6285724223680@s.whatsapp.net', '    𝕆𝕁𝕀 ℕ𝕀𝔾𝔾𝔼ℝ𝕊    ');
addHandleMessageFunction('Horee', '6283878300449@s.whatsapp.net', 'Yeeeeeeaaaaaaayy');

async function handleMessage(m) {
  for (let word in handleMessageFunctions) {
    await handleMessageFunctions[word](m);
  }
}

handleMessage(m);


	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nYou were detected sending a group link, sorry, you will be kicked !`)
        if (!isBotAdmins) return m.reply(`Eh, the bot is not an admin `)
        let gclink = (`https://chat.whatsapp.com/`+await gss.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh, sorry it didn't happen, because you sent the link to this group`)
        if (isAdmins) return m.reply(`Ehh, sorry you are admin`)
        if (isCreator) return m.reply(`Hey, sorry, you're the owner of my bot`)
        gss.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }


        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: gss.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, gss.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        gss.ev.emit('messages.upsert', msg)
        }
  	    

        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	'-3': 'Game telah selesai', 
	'-2': 'Salah Posisi', 
	'-1': 'Salah Posisi',
	 0: 'Salah Posisi',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} 𝐌𝐄𝐍𝐀𝐍𝐆!` : isTie ? `𝐒𝐄𝐑𝐈!` : `𝗚𝗶𝗹𝗶𝗿𝗮𝗻 ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *surrender* untuk menyerah dan terima kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await gss.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await gss.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
	    
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            gss.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} stop AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
during ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        
        const cmdAi = ["Ai", "Bug", "Report", "Gpt", "Dalle"];
const cmdTool = ["Tempmail", "Checkmail", "Info", "ssweb", "Trt", "Tts"];
const cmdGrup = ["LinkGroup", "Setppgc", "Setname", "Setdesc", "Group", "Gcsetting", "Welcome", "Left", "SetWelcome", "SetLeft", "Editinfo", "Add", "Kick", "HideTag", "Nsfw", "Tagall", "Totag", "Tagadmin", "AntiLink", "AntiToxic", "Mute", "Promote", "Demote", "Revoke", "Poll", "Getbio"];
const cmdDown = ["Apk", "Facebook", "Mediafire", "Nhentai", "Pinterestdl", "Gitclone", "Gdrive", "Twitter", "Instagram", "Ytmp3", "Ytmp4", "Play", "Song", "Video", "Ytmp3doc", "Tiktok", "TiktokHD"];
const cmdSearch = ["Play", "Yts", "Imdb", "Anime", "Google", "Pinterest", "Wikimedia", "Ytsearch", "Ringtone", "Lyrics", "Neko"];
const cmdNsfw = ["NNeko", "NWaifu", "Blowjob"];
const cmdFun = ["Delttt", "Tictactoe"];
const cmdConv = ["Removebg", "Sticker", "Emojimix", "Tovn", "Tomp3", "Toaudio", "Ebinary", "Dbinary", "Styletext", "Fontchange", "Fancy", "hd", "qc"];
const cmdMain = ["Ping", "Alive", "Owner", "Menu", "Infochat", "Listgc", "Listonline", "Infobot"];
const cmdOwner = ["React", "Chat", "Join", "Leave", "Block", "Unblock", "Bcgroup", "Bcall", "Setppbot", "Setexif", "Anticall", "Setstatus", "Setnamebot", "Sleep", "AutoTyping", "AlwaysOnline", "AutoRead", "autosview", "ban", "unban", "warn", "unwarn", "banchat"];
const cmdStalk = ["Nowa", "GithubStalk"];



function generateMenu(cmdList, title) {
    if (!Array.isArray(cmdList)) {
        console.error('Invalid cmdList. It should be an array.');
        return '';
    }

    const formattedCmdList = cmdList
    .sort((a, b) => a.localeCompare(b))
    .map((v) => `│${v}`).join('\n');

    return `
╭───═❮ ${title} ❯═───❖
│ ╭─────────────···▸
${formattedCmdList.split('\n').map(item => `│${item ? ' ' + item.trim() : ''}`).join('\n')}
│ ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;
}

const introTextConvert = generateMenu(cmdConv, '𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥');
const introTextAdmin = generateMenu(cmdGrup, '𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨');
const introTextOwner = generateMenu(cmdOwner, '𝗢𝗪𝗡𝗘𝗥');
const introTextMain = generateMenu(cmdMain, '𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨');
const introTextDownload = generateMenu(cmdDown, '𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥');
const introTextStalk = generateMenu(cmdStalk, '𝗦𝗧𝗔𝗟𝗞');
const introTextSearch = generateMenu(cmdSearch, '𝗦𝗘𝗔𝗥𝗖𝗛');
const introTextFun = generateMenu(cmdFun, '𝗙𝗨𝗡 𝗠𝗘𝗡𝗨');
const introTextNsfw = generateMenu(cmdNsfw, '𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨');
const introTextTool = generateMenu(cmdTool, '𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨');
const introTextAi = generateMenu(cmdAi, '𝗔𝗜 𝗠𝗘𝗡𝗨');

const menuText = `*🔢 TYPE BELOW NUMBER*
1. ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
2. ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ
3. ɢʀᴏᴜᴘ ᴍᴇɴᴜ
4. sᴛᴀʟᴋ ᴍᴇɴᴜ
5. sᴇᴀʀᴄʜ ᴍᴇɴᴜ
6. ᴛᴏᴏʟ ᴍᴇɴᴜ
7. ғᴜɴ ᴍᴇɴᴜ
8. ɴsғᴡ ᴍᴇɴᴜ
9. ᴀɪ ᴍᴇɴᴜ
10. ᴍᴀɪɴ ᴍᴇɴᴜ`;

const menuMessage = `
👨‍💻 EKUSHI ☆ 
╭─────────────·
│📍 ᴠᴇʀꜱɪᴏɴ: ᴠ1
│👨‍💻 ᴏᴡɴᴇʀ : Ekushi      
│👤 ɴᴜᴍʙᴇʀ: 6283878300449
╰─────────────

╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───❖
│╭─────────────···▸
${menuText.split('\n').map(item => `││▸ ${item.trim()}`).join('\n')}
│╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;
const subMenus = {
    '1': introTextConvert,
    '2': introTextDownload,
    '3': introTextAdmin,
    '4': introTextStalk,
    '5': introTextSearch,
    '6': introTextTool,
    '7': introTextFun,
    '8': introTextNsfw,
    '9': introTextAi,
    '10': introTextMain,
};


const lowerText = m.text.toLowerCase();

if (command === 'menu2') {
        await gss.sendMessage(m.chat, {
            image: { url: 'https://github.com/ExyXyz/ExyXy/blob/main/Exy.jpg?raw=true' },
            caption: menuMessage,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    title: botname,
                    sourceUrl: global.link,
                    body: `Bot Created By ${global.owner}`
                }
            }
        }, { quoted: m });
    } else if (/^\d+$/.test(lowerText) && m.quoted) {
        const quotedText = m.quoted.text.toLowerCase();

        if (quotedText.includes(menuMessage.toLowerCase())) {
            const selectedNumber = lowerText;
            const subMenu = subMenus[selectedNumber];

            if (subMenu !== undefined) {
                await gss.sendMessage(m.chat, {
                    image: { url: 'https://github.com/ExyXyz/ExyXy/blob/main/Exy.jpg?raw=true' },
                    caption: subMenu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: botname,
                            sourceUrl: global.link,
                            body: `Bot Created By ${global.owner}`
                        }
                    }
                }, { quoted: m });
            } else {
                await gss.sendMessage(m.chat, { text: 'Invalid menu number. Please select a number from the menu.' }, { quoted: m });
            }
        }
    }


	    
        switch(command) {
	    case 'afk': {
	      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Sedang AFK${text ? ': ' + text : ''}`)
            }
            break	

            
case 'imdb': case 'movie':
    try {
        if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!text) return m.reply(`Give Me a Series or movie Name`);

        m.reply(mess.wait);

        let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);
        let imdbData = fids.data;
        
        if (!imdbData.Title) return m.reply(`Movie not found`);

        // Translate plot to Indonesian
        let translationRes = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=${encodeURIComponent(imdbData.Plot)}`);
        if (!translationRes.ok) throw await translationRes.text();
        let translationJson = await translationRes.json();
        let translatedPlot = translationJson[0].map(sentence => sentence[0]).join(' ');

        let imdbt = "";
        imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        imdbt += "🎬Title      : " + imdbData.Title + "\n";
        imdbt += "📅Year       : " + imdbData.Year + "\n";
        imdbt += "⭐Rated      : " + imdbData.Rated + "\n";
        imdbt += "📆Released   : " + imdbData.Released + "\n";
        imdbt += "⏳Runtime    : " + imdbData.Runtime + "\n";
        imdbt += "🌀Genre      : " + imdbData.Genre + "\n";
        imdbt += "👨🏻‍💻Director   : " + imdbData.Director + "\n";
        imdbt += "✍Writer     : " + imdbData.Writer + "\n";
        imdbt += "👨Actors     : " + imdbData.Actors + "\n";
        imdbt += "📃Plot       : " + translatedPlot + "\n";
        imdbt += "🌐Language   : " + imdbData.Language + "\n";
        imdbt += "🌍Country    : " + imdbData.Country + "\n";
        imdbt += "🎖️Awards     : " + imdbData.Awards + "\n";
        imdbt += "📦BoxOffice  : " + imdbData.BoxOffice + "\n";
        imdbt += "🏙️Production : " + imdbData.Production + "\n";
        imdbt += "🌟imdbRating : " + imdbData.imdbRating + "\n";
        imdbt += "✅imdbVotes  : " + imdbData.imdbVotes + "";

        await gss.sendMessage(m.chat, {
            image: { url: imdbData.Poster },
            caption: imdbt,
        }, { quoted: m });
    } catch (err) {
        return m.reply("```Error```");
    }
    break;

            
        case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih berada di dalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('`Lawan ditemukan!`')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]} Ketik *surrender* untuk menyerah dan terima kekalahan`
            if (room.x !== room.o) await gss.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await gss.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('`Menunggu Lawan.....`' + (text ? ` typing the command below${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu tidak berada di sesi permainan!`
            delete this.game[roomnya.id]
            m.reply(`Sukses meng-hapus sesi permainan!`)
            }
            break
      
            case 'join': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw 'Masukin link group!';
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link nya invalid!';
  m.reply(mess.wait);
  let result = args[0].split('https://chat.whatsapp.com/')[1];
  await gss.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'leave': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  await gss.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setexif': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `Example: ${prefix + command} packname|author`;
  global.packname = text.split("|")[0];
  global.author = text.split("|")[1];
  m.reply(`Exif successfully changed to\n\n⭔ Packname: ${global.packname}\n⭔ Author: ${global.author}`);
}
break;
case 'promote': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  try {
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'promote')
      .then(() => {
        let promotedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Users ${promotedUsernames} promoted successfully in the group ${metadata.subject}.`);
      })
      .catch(() => m.reply('Failed to promote user(s) in the group.'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;



case 'kick': {
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'remove')
      .then(() => {
        let kickedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Users ${kickedUsernames} kicked successfully from the group ${metadata.subject}.`);
      })
      .catch(() => m.reply('Failed to kick user(s) from the group.'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;


case 'demote': {
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'demote')
      .then(() => {
        let demotedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Users ${demotedUsernames} demoted successfully in the group ${metadata.subject}.`);
      })
      .catch(() => m.reply('Failed to demote user(s) in the group.'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;


 case 'welcome':
            case 'left': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  m.reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  m.reply(`${command} is disabled`)
               }
            }
            break

case 'block': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'unblock': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setname': case 'setsubject': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setdesc': case 'setdesk': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

          case 'setppbot': {
            if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!/image/.test(mime)) throw `Send/Reply with an Image and Caption ${prefix + command}`;
  if (/webp/.test(mime)) throw `Send/Reply with an Image and Caption ${prefix + command}`;
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  await gss.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media));
  m.reply(mess.success);
}
break;
    
case 'toqr': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!q) return m.reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await gss.sendMessage(m.chat, {
                    image: medi,
                    caption: mess.success
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            
case "readqr": {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
try {
mee = await gss.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
m.reply(util.format(data[0].symbol))
} catch (err) {
m.reply(`Reply Image That Has Qr`)
}
}
break

case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await gss.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await gss.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.success)
                } else {
                    var memeg = await gss.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.success)
                }
                break

case 'sc':
case 'script':
case 'scriptbot':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    const githubRepoUrl = 'https://github.com/ExyXyz/Ekusi';

    fetch(githubRepoUrl)
        .then(response => response.json())
        .then(data => {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login
            };

            // Format the date
            const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString('en-GB');

            const uy = `*GitHub Repository:* ${data.html_url}
⭐ *Stars:* ${repoInfo.stars}
♈ *Forks:* ${repoInfo.forks}
📅 *Release Date:* ${releaseDate}
🕐 *Last Update:* ${lastUpdateDate}
👨‍💻 *Owner:* ${repoInfo.owner}`;

            gss.sendPoll(m.chat, uy, ['.menu', '.ping'], {
                quoted: m
            });
        })
        .catch(error => console.error('Error fetching GitHub repository info:', error));
    break;




 case 'setimgmenu':
            {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!isCreator) return m.reply(mess.owner)
                let delb = await gss.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './menuimage/allmenu.jpg')
                fs.unlinkSync(delb)
                m.reply(mess.success)
            }
            break
            

case 'hidetag': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  gss.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;

case 'totag': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!m.quoted) throw `Reply to a message with the command ${prefix + command}`;
  gss.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) });
}
break;

	    case 'style': case 'styletext': {
	      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit);
  db.data.users[m.sender].limit -= 1;
  let { styletext } = require('./lib/scraper');
  if (!text) throw 'Masukan text nya juga dong!';
  let anu = await styletext(text);
  let teks = `Style Text From ${text}\n\n`;
  for (let i of anu) {
    teks += `⭔ *${i.name}* : ${i.result}\n\n`;
  }
  m.reply(teks);
}
break;

case 'group':
case 'grup': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Group Setting:", [`${prefix}group close`, `${prefix}group open`]);
  } else {
    const groupSetting = args[0].toLowerCase();
    if (groupSetting === 'close') {
      await gss.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Group Successfully Closed`)).catch((err) => m.reply(jsonformat(err)));
    } else if (groupSetting === 'open') {
      await gss.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Group Successfully Opened`)).catch((err) => m.reply(jsonformat(err)));
    } else {
      gss.sendPoll(m.chat, "Choose Group Setting:", [`${prefix}group close`, `${prefix}group open`]);
    }
  }
}
break;


case 'editinfo': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Edit Info Setting:", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
  } else {
    const editInfoSetting = args[0].toLowerCase();
    if (editInfoSetting === 'open') {
      await gss.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Group Edit Info Successfully Opened`)).catch((err) => m.reply(jsonformat(err)));
    } else if (editInfoSetting === 'close') {
      await gss.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Group Edit Info Successfully Closed`)).catch((err) => m.reply(jsonformat(err)));
    } else {
      gss.sendPoll(m.chat, "Choose Edit Info Setting:", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
    }
  }
}
break;
            
            case 'antilink': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Antilink Setting:", [`${prefix}antilink on`, `${prefix}antilink off`]);
  } else {
    const antilinkSetting = args[0].toLowerCase();
    if (antilinkSetting === "on") {
      if (db.data.chats[m.chat]?.antilink) return m.reply(`Antilink Already Active`);
      db.data.chats[m.chat].antilink = true;
      m.reply(`Antilink Activated!`);
    } else if (antilinkSetting === "off") {
      if (!db.data.chats[m.chat]?.antilink) return m.reply(`Antilink Already Inactive`);
      db.data.chats[m.chat].antilink = false;
      m.reply(`Antilink Deactivated!`);
    } else {
      gss.sendPoll(m.chat, "Choose Antilink Setting:", [`${prefix}antilink on`, `${prefix}antilink off`]);
    }
  }
}
break;

case 'antiviewonce': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!isCreator) throw mess.owner;
    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Choose Antiviewonce Setting:", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
    } else {
        const antiviewonceSetting = args[0].toLowerCase();
        if (antiviewonceSetting === "on") {
            if (db.data.chats[m.chat]?.antiviewonce) return m.reply(`Antiviewonce Already Active`);
            db.data.chats[m.chat].antiviewonce = true
            m.reply(`Antiviewonce Activated!`);
        } else if (antiviewonceSetting === "off") {
            if (!db.data.chats[m.chat]?.antiviewonce) return m.reply(`Antiviewonce Already Inactive`);
            db.data.chats[m.chat].antiviewonce = false
            m.reply(`Antiviewonce Deactivated!`);
        } else {
            gss.sendPoll(m.chat, "Choose Antiviewonce Setting:", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
        }
    }
}
break;


case "forward":
case "fwd":
  if (!args.length) {
    await doReact("❌");
    return m.reply(`Please tag a user or provide a phone number along with the message to forward.\nExample: !forward @username This is the forwarded message.`);
  }

  let forwardTo = ''; // Initialize the variable to store the user ID or phone number

  // Check if the first argument is a tagged user
  if (args[0].startsWith('@')) {
    forwardTo = args[0]; // Store the tagged user ID
    args.shift(); // Remove the tagged user from the arguments list
  } else if (/^\+\d{11,}$/.test(args[0])) {
    forwardTo = args[0]; // Store the phone number
    args.shift(); // Remove the phone number from the arguments list
  } else {
    await doReact("❌");
    return m.reply(`Invalid format. Please tag a user (@username) or provide a phone number (+countrycodephonenumber) along with the message to forward.`);
  }

  const forwardedMessage = args.join(' '); // Combine the remaining arguments as the message to forward

  if (!forwardedMessage) {
    await doReact("❌");
    return m.reply(`Please provide a message to forward after tagging the user or providing the phone number.`);
  }

  try {
    // Check if the forwardTo is a user ID (tagged user) or a phone number
    if (forwardTo.startsWith('@')) {
      // Forward the message to the tagged user
      await gss.sendMessage(forwardTo, forwardedMessage);
    } else {
      // Forward the message to the phone number
      await gss.sendMessage(forwardTo, forwardedMessage, MessageType.text, { quoted: m });
    }

    await doReact("✅");
  } catch (error) {
    console.error(error);
    await doReact("❌");
    return m.reply(`An error occurred while forwarding the message: ${error.message}`);
  }
  break;


case "cricketscore":
case "score":
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    await doReact("❌");
    return m.reply(`*Provide a match ID for cricket score.*\nExample: !cricketscore 12345`);
  }

  const matchId = encodeURIComponent(text);

  try {
    const apiUrl = `https://iol.apinepdev.workers.dev/${matchId}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      await doReact("❌");
      return m.reply(`Invalid response from the cricket score API. Status code: ${response.status}`);
    }

    const result = await response.json();

    let formattedResult = `╭══════════════•∞•══╮\n`;
    formattedResult += `│⿻   *EKUSHI ☆* \n`;
    formattedResult += `│⿻   *LIVE MATCH INFO* \n`;
    formattedResult += `│⿻\n`;

    if (result.code === 200) {
      formattedResult += `│⿻   *${result.data.title}*\n`;
      formattedResult += `│⿻   *${result.data.update}*\n`;
      formattedResult += `│⿻ \n`;
    } else {
      await m.reply(`*Update:* Data not found for the specified match ID.`);
      await doReact("❌");
      return;
    }

    if (result.data.liveScore && result.data.liveScore.toLowerCase() !== "data not found") {
      formattedResult += `│⿻   *Live Score:* ${result.data.liveScore}\n`;
      formattedResult += `│⿻   *Run Rate:* ${result.data.runRate}\n`;
      formattedResult += `│⿻\n`;
      formattedResult += `│⿻   *Batter 1:* ${result.data.batsmanOne}\n`;
      formattedResult += `│⿻   *${result.data.batsmanOneRun} (${result.data.batsmanOneBall})* SR: ${result.data.batsmanOneSR}\n`;
      formattedResult += `│⿻\n`;
      formattedResult += `│⿻   *Batter 2:* ${result.data.batsmanTwo}\n`;
      formattedResult += `│⿻   *${result.data.batsmanTwoRun} (${result.data.batsmanTwoBall})* SR: ${result.data.batsmanTwoSR}\n`;
      formattedResult += `│⿻\n`;
      formattedResult += `│⿻   *Bowler 1:* ${result.data.bowlerOne}\n`;
      formattedResult += `│⿻   *${result.data.bowlerOneOver} overs, ${result.data.bowlerOneRun}/${result.data.bowlerOneWickets}, Econ:* ${result.data.bowlerOneEconomy}\n`;
      formattedResult += `│⿻\n`;
      formattedResult += `│⿻   *Bowler 2:* ${result.data.bowlerTwo}\n`;
      formattedResult += `│⿻   *${result.data.bowlerTwoOver} overs, ${result.data.bowlerTwoRun}/${result.data.bowlerTwoWicket}, Econ:* ${result.data.bowlerTwoEconomy}\n`;
    }

    formattedResult += `╰══•∞•═══════════════╯ `;

    await m.reply(formattedResult);
    await doReact("✅");
  } catch (error) {
    console.error(error);
    await doReact("❌");
    return m.reply(`An error occurred while processing the cricket score request. ${error.message}`);
  }
  break;




case 'ban': {
  if (!isCreator) return m.reply(mess.owner);

  let orgnye;

  if (m.quoted && m.quoted.sender) {
    orgnye = m.quoted.sender;
  } else {
    return m.reply('Mention or reply to the user you want to ban.');
  }

  const isBanned = banUser.includes(orgnye);

  if (isBanned) {
    return m.reply('User is already banned.');
  }

  banUser.push(orgnye);
  return m.reply(`Successfully banned the user.`);
  break;
}



case 'unban': {
   
  if (!isCreator) return m.reply(mess.owner)

  if (m.quoted && m.quoted.sender) {
    const orgnye = m.quoted.sender;
    const isBane = banUser.includes(orgnye);

    if (!isBane) return m.reply('User is not banned.');

    let delbans = banUser.indexOf(orgnye);
    banUser.splice(delbans, 1);
    return m.reply(`Successfully Unbanned the user.`);
  }

  return m.reply("Invalid option. Reply to a message to ban/unban the user.");
}
break;



case 'diam': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;

  // Placeholder for bot's name
  const botName = 'Ekushi'; // Replace this with the actual way to get the bot's name

  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Mute Setting:", [`${prefix}mute on`, `${prefix}mute off`]);
  } else {
    const muteSetting = args[0].toLowerCase();
    if (muteSetting === "on") {
      if (db.data.chats[m.chat]?.mute) return m.reply(`${botName} is already muted in this group`);
      db.data.chats[m.chat].mute = true;
      m.reply(`${botName} has been muted in this group!`);
    } else if (muteSetting === "off") {
      if (!db.data.chats[m.chat]?.mute) return m.reply(`${botName} is already unmuted in this group`);
      db.data.chats[m.chat].mute = false;
      m.reply(`${botName} has been unmuted in this group!`);
    } else {
      gss.sendPoll(m.chat, "Choose Mute Setting:", [`${prefix}mute on`, `${prefix}mute off`]);
    }
  }
}
break;


case "logomaker":
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
        await doReact("❌");
        return m.reply(`*Provide a logo name for the logo maker.*\nExample: !logomaker MyLogo`);
    }

    const logoName = encodeURIComponent(text);

    try {
        const apiUrl = `https://logomaker.apinepdev.workers.dev/?logoname=${logoName}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            await doReact("❌");
            return m.reply(`Invalid response from the logo maker API. Status code: ${response.status}`);
        }

        const result = await response.json();

        if (result.logo) {
            await gss.sendMessage(m.chat, {
                image: {
                    url: result.logo,
                },
                mimetype: 'image/jpeg', // Adjust based on the actual image format
                caption: 'Generated Logo',
            }, {
                quoted: m,
            });

            await doReact("✅");
        } else {
            await doReact("❌");
            return m.reply(`Invalid or unexpected API response. Logo not found.`);
        }
    } catch (error) {
        console.error(error);
        await doReact("❌");
        return m.reply(`An error occurred while processing the logo maker request. ${error.message}`);
    }
    break;



case 'linkgroup': case 'linkgc': {
 if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  let response = await gss.groupInviteCode(m.chat);
  gss.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link: ${groupMetadata.subject}`, m, { detectLink: true });
}
break;



case 'setstatus': case 'setbiobot': case 'setbotbio': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `This is a WhatsApp Bot named EKUSHI ☆`;
  let name = await gss.updateProfileStatus(text);
  m.reply(`Successfully changed bot bio status to ${name}`);
}
break;

case 'anticall': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) throw mess.owner;

    let ciko = db.data.settings[botNumber]?.anticall;

    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Choose AntiCall Setting:", [`${prefix}anticall off`, `${prefix}anticall on`]);
    } else {
        if (args[0].toLowerCase() === "on") {
            if (ciko) return m.reply(`Already Active Before`);
            db.data.settings[botNumber].anticall = true;
            m.reply(`AntiCall Active!`);
        } else if (args[0].toLowerCase() === "off") {
            if (!ciko) return m.reply(`Already Inactive Before`);
            db.data.settings[botNumber].anticall = false;
            m.reply(`AntiCall Deactivated!`);
        } else {
            gss.sendPoll(m.chat, "Choose AntiCall Setting:", [`${prefix}anticall off`, `${prefix}anticall on`]);
        }
    }
}
break;




case 'delete':
case 'del': 
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    
        if (!m.quoted) return m.reply('Rᴇᴩʟy ᴄʜᴀᴛ yᴀɴɢ ᴍᴀᴜ ᴅɪ ᴅᴇʟᴇᴛᴇ');
        let { chat, id } = m.quoted;

        const key = {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender
        };

        await gss.sendMessage(m.chat, { delete: key });
    break;

case 'bcgc': case 'bcgroup': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `Mana text nya?\n\nContoh: ${prefix + command} Ekushi-kun`;
  let getGroups = await gss.groupFetchAllParticipating();
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
  let anu = groups.map(v => v.id);
  m.reply(`Sukses mengirim pengumuman ke ${anu.length} Group Chat, Perkiraan waktu ${anu.length * 1.5} detik`);
  for (let i of anu) {
    await sleep(1500);
    let txt = `「 Pengumuman BOT 」\n\n${text}`;
    gss.sendText(i, txt);
  }
  m.reply(`Sukses mengirim pengumuman ke ${anu.length} Group`);
}
break;
  
case 'bc': case 'broadcast': case 'bcall': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `Mana text nya?\n\nContoh: ${prefix + command} Ekushi-kun`;
  let anu = await store.chats.all().map(v => v.id);
  m.reply(`Mengirim pengumuman ke ${anu.length} Chat\nPerkiraan waktu ${anu.length * 1.5} detik`);
  for (let yoi of anu) {
    await sleep(1500);
    gss.sendText(yoi, text);
  }
  m.reply('Pengumuman sukses');
}
break;



case 'infochat': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.quoted) m.reply('Reply to a message');
  let msg = await m.getQuotedObj();
  if (!m.quoted.isBaileys) throw 'The message is not sent by the bot!';
  let teks = '';
  for (let i of msg.userReceipt) {
    let read = i.readTimestamp;
    let unread = i.receiptTimestamp;
    let Time = read ? read : unread;
    teks += `⭔ @${i.userJid.split('@')[0]}\n`;
    teks += ` ┗━⭔ *Time:* ${moment(Time * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status:* ${read ? 'Read' : 'Sent'}\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'autosview':
    case 'autostatusview':{
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!isCreator) throw mess.owner;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  m.reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  m.reply(`${command} is disabled`)
               }
            }
            break
            
            case 'autoreact':
    case 'react':{
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!isCreator) throw mess.owner;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  autoreact = true
                  m.reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoreact = false
                  m.reply(`${command} is disabled`)
               }
            }
            break
            
      
    case 'autorecording':{
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!isCreator) throw mess.owner;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  global.autoRecord = true
                  m.reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  global.autoRecord = false
                  m.reply(`${command} is disabled`)
               }
            }
            break


case 'listgc': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
  let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Groups: ${anu.length} Groups\n\n`;
  for (let i of anu) {
    let metadata = await gss.groupMetadata(i);
    teks += `⬡ *Name:* ${metadata.subject}\n⬡ *Owner:* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n⬡ *ID:* ${metadata.id}\n⬡ *Created:* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Members:* ${metadata.participants.length}\n\n────────────────────────\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'listonline': case 'liston': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
  let online = [...Object.keys(store.presences[id]), botNumber];
  gss.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online });
}
break;


case 'remini': case 'upscale': case 'enhance': case 'hd': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!quoted) return m.reply(`Mana gambar nya?`);
  if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto pakai ${prefix + command}`);
  
  m.reply(mess.wait);
  
  const { remini } = require('./lib/remini');
  
  // Helper function to format size
  const formatSize = (bytes) => {
    const kb = bytes / 1024;
    if (kb < 1024) {
      return `\`${kb.toFixed(2)}KB\``;
    } else {
      const mb = kb / 1024;
      return `\`${mb.toFixed(2)}MB\``;
    }
  };
  
  // Download the quoted image
  let media = await quoted.download();
  let beforeSize = formatSize(Buffer.byteLength(media)); // Get the size of the original media
  
  try {
    let proses = await remini(media, "enhance");
    let afterSize = formatSize(Buffer.byteLength(proses)); // Get the size of the enhanced media
    
    // Send the enhanced image with the new caption
    gss.sendMessage(m.chat, { 
      image: proses, 
      caption: `${mess.success} HD by EKUSHI ☆\n\n  ☆ Before Size: ${beforeSize}\n  ☆ After Size: ${afterSize}` 
    }, { quoted: m });
    
  } catch (error) {
    console.error('Error in Remini enhancement:', error);
    m.reply(`Ada error: ${error.message}`);
  }
  break;
}

case 'dehaze': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!quoted) return m.reply(`Mana gambar nya?`);
  if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto pakai ${prefix + command}`);
  
  m.reply(mess.wait);
  
  const { remini } = require('./lib/remini');
  
  // Helper function to format size
  const formatSize = (bytes) => {
    const kb = bytes / 1024;
    if (kb < 1024) {
      return `\`${kb.toFixed(2)}KB\``;
    } else {
      const mb = kb / 1024;
      return `\`${mb.toFixed(2)}MB\``;
    }
  };
  
  // Download the quoted image
  let media = await quoted.download();
  let beforeSize = formatSize(Buffer.byteLength(media)); // Get the size of the original media
  
  try {
    let proses = await remini(media, "dehaze");
    let afterSize = formatSize(Buffer.byteLength(proses)); // Get the size of the enhanced media
    
    // Send the enhanced image with the new caption
    gss.sendMessage(m.chat, { 
      image: proses, 
      caption: `${mess.success} Dehaze by EKUSHI ☆\n\n  ☆ Before Size: ${beforeSize}\n  ☆ After Size: ${afterSize}` 
    }, { quoted: m });
    
  } catch (error) {
    console.error('Error in Remini enhancement:', error);
    m.reply(`Ada error: ${error.message}`);
  }
  break;
}

case 'recolor': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!quoted) return m.reply(`Mana gambar nya?`);
  if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto pakai ${prefix + command}`);
  
  m.reply(mess.wait);
  
  const { remini } = require('./lib/remini');
  
  // Helper function to format size
  const formatSize = (bytes) => {
    const kb = bytes / 1024;
    if (kb < 1024) {
      return `\`${kb.toFixed(2)}KB\``;
    } else {
      const mb = kb / 1024;
      return `\`${mb.toFixed(2)}MB\``;
    }
  };
  
  // Download the quoted image
  let media = await quoted.download();
  let beforeSize = formatSize(Buffer.byteLength(media)); // Get the size of the original media
  
  try {
    let proses = await remini(media, "recolor");
    let afterSize = formatSize(Buffer.byteLength(proses)); // Get the size of the enhanced media
    
    // Send the enhanced image with the new caption
    gss.sendMessage(m.chat, { 
      image: proses, 
      caption: `${mess.success} Recolor by EKUSHI ☆\n\n  ☆ Before Size: ${beforeSize}\n  ☆ After Size: ${afterSize}` 
    }, { quoted: m });
    
  } catch (error) {
    console.error('Error in Remini enhancement:', error);
    m.reply(`Ada error: ${error.message}`);
  }
  break;
}


        case 'gemini':
case 'vision': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!quoted) return m.reply(`Where is the picture?`);
    if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`);
    
    m.reply(mess.wait);

    try {
        const prompt = `${text}`;
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const media = await quoted.download();

        const imagePart = {
            inlineData: {
                data: Buffer.from(media).toString("base64"),
                mimeType: mime
            },
        };

        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const textt = response.text(); // Fix the typo here

        // Send the generated text as the reply
        m.reply(`${textt}`);
    } catch (error) {
        console.error('Error in Gemini Pro Vision:', error);
        m.reply(`An error occurred: ${error.message}`);
        await doReact("❌");
    }
    break;
}




case 'lyrics': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!text) return m.reply(`Comand usage: ${prefix}lyrics Thunder`)
m.reply(mess.wait);
await doReact("🔎");
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
m.reply(`
*✍️ Title:* ${result.title}
*👨‍🎤 Author:* ${result.author}
*🔗 Url:* ${result.link}

*📝 Lyrics:*\n\n ${result.lyrics}
`.trim())
await doReact("🗨");
}
break;



case 'whatmusic': case 'find': case 'shazame':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!m.quoted) {
        m.reply('You asked about music. Please provide a quoted audio or video message for identification.');
    } else if (/audio|video/.test(mime)) {
        try {
            let media = await m.quoted.download();
            const ext = mime.split('/')[1];
            fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
            
            m.reply(mess.wait);

            const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
            const { code, msg } = res.status;

            if (code !== 0) {
                throw msg;
            }

            const { title, artists, album, genres, release_date } = res.metadata.music[0];
            const txt = `
                        𝚁𝙴𝚂𝚄𝙻𝚃
                • 📌 *TITLE*: ${title}
                • 👨‍🎤 𝙰𝚁𝚀𝚃𝙸𝚂𝚃: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
                • 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'NOT FOUND'}
                • 🌐 𝙶𝙴𝙽𝙴𝚁𝙾: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
                • 📆 RELEASE DATE: ${release_date || 'NOT FOUND'}
            `.trim();

            fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
            m.reply(txt);
        } catch (error) {
            console.error(error);
            m.reply('An error occurred during music identification.');
        }
    }
    break;




case 'fetch':
case 'get':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/^https?:\/\//.test(text)) throw 'Start the *URL* with http:// or https://';
  const _url = new URL(text);
  const url = `${_url.origin}${_url.pathname}?${_url.searchParams.toString()}`;
  const res = await fetch(url);

  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    throw `Content-Length exceeds the limit: ${res.headers.get('content-length')}`;
  }

  if (!/text|json/.test(res.headers.get('content-type'))) {
    return gss.sendMedia(m.chat, url, 'file', 'API FETCHED FROM EKUSHI', m);
  }

  let content = Buffer.from(await res.arrayBuffer());

  try {
    console.log('Parsed JSON:', JSON.parse(content));
    content = JSON.stringify(JSON.parse(content));
  } catch (e) {
    console.error('Error parsing JSON:', e);
    content = content + '';
  } finally {
    m.reply(content.slice(0, 65536) + '');
  }
  break;
  
case 'remini': 
case 'upscale': 
case 'enhance': 
case 'hd': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  
  if (!quoted) {
    if (command === 'hd') {
      return m.reply("HD Option - Enhance - Dehaze - Recolor\n\nContoh reply/kirim gambar pakai .enhance, .dehaze, atau .recolor");
    } else {
      return m.reply(`Mana gambar nya?`);
    }
  }
  
  if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto pakai ${prefix + command}`);
  
  m.reply(mess.wait);
  
  const { remini } = require('./lib/remini');
  
  // Helper function to format size
  const formatSize = (bytes) => {
    const kb = bytes / 1024;
    if (kb < 1024) {
      return `\`${kb.toFixed(2)}KB\``;
    } else {
      const mb = kb / 1024;
      return `\`${mb.toFixed(2)}MB\``;
    }
  };
  
  // Download the quoted image
  let media = await quoted.download();
  let beforeSize = formatSize(Buffer.byteLength(media)); // Get the size of the original media
  
  try {
    let proses = await remini(media, command); // Use the actual command for processing
    let afterSize = formatSize(Buffer.byteLength(proses)); // Get the size of the enhanced media
    
    // Send the enhanced image with the new caption
    gss.sendMessage(m.chat, { 
      image: proses, 
      caption: `${mess.success} HD by EKUSHI ☆\n\n  ☆ Before Size: ${beforeSize}\n  ☆ After Size: ${afterSize}` 
    }, { quoted: m });
    
  } catch (error) {
    console.error('Error in Remini enhancement:', error);
    m.reply(`Ada error: ${error.message}`);
  }
  break;
}


case 'ebinary': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) throw `Example: ${prefix + command} text`;
  let { eBinary } = require('./lib/binary');
  let eb = await eBinary(text);
  m.reply(eb);
}
break;

case 'dbinary': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) throw `Example: ${prefix + command} text`;
  let { dBinary } = require('./lib/binary');
  let db = await dBinary(text);
  m.reply(db);
}
break;

case 'toaud': case 'toaudio': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply with Video/Audio to convert into Audio with caption ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toAudio } = require('./lib/converter');
  let audio = await toAudio(media, 'mp4');
  gss.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m });
}
break;

            case 'tomp3': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply with Video/Audio to convert into MP3 with caption ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toAudio } = require('./lib/converter');
  let audio = await toAudio(media, 'mp4');
  gss.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Converted.mp3` }, { quoted: m });
}
break;

case 'tovn': case 'toptt': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply with Video/Audio to convert into VN with caption ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toPTT } = require('./lib/converter');
  let audio = await toPTT(media, 'mp4');
  gss.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;

case 'imagenobg':
case 'removebg':
case 'remove-bg': {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!/image/.test(mime)) throw `Send/Reply with Image with caption ${prefix + command}`;
    if (/webp/.test(mime)) throw `Send/Reply Image with caption ${prefix + command}`;

    const remobg = require('remove.bg');
    const fs = require('fs');
    const path = require('path');

    const apirnobg = [
        '4FmiMGKnozGUgptCYT4UTziQ', '4FmiMGKnozGUgptCYT4UTziQ',
        '4FmiMGKnozGUgptCYT4UTziQ', '4FmiMGKnozGUgptCYT4UTziQ',
        '4FmiMGKnozGUgptCYT4UTziQ', '4FmiMGKnozGUgptCYT4UTziQ',
        '4FmiMGKnozGUgptCYT4UTziQ', '4FmiMGKnozGUgptCYT4UTziQ',
        '4FmiMGKnozGUgptCYT4UTziQ'
    ];
    const apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)];
    const hmm = path.join(__dirname, `./src/remobg-${getRandom('')}`);
    const outputFile = path.join(__dirname, `./src/hremo-${getRandom('.png')}`);

    try {
        const localFile = await gss.downloadAndSaveMediaMessage(qmsg, hmm);
        m.reply(mess.wait);

        await remobg.removeBackgroundFromImageFile({
            path: localFile,
            apiKey: apinobg,
            size: "regular",
            type: "auto",
            scale: "100%",
            outputFile
        });

        const randomNumber = Math.floor(Math.random() * 10000);
        const fileName = `𝑬𝒌𝒖𝒔𝒉𝒊 - NBG${randomNumber}.png`;

        // Send the processed image as a document in PNG format
        await gss.sendMessage(m.chat, { 
          document: fs.readFileSync(outputFile), 
          mimetype: 'image/png', 
          fileName: fileName, 
          caption: mess.success 
        }, { quoted: m });

        fs.unlinkSync(localFile);
        fs.unlinkSync(outputFile);
    } catch (error) {
        console.error('Error:', error);
        m.reply('An error occurred while processing the image.');
    }
}
break;

// Helper function to generate a random string
function getRandom(ext = '') {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}


case'tagadmins': case 'admins': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!text) return m.reply(`*give me message for admin*`)
let teks = `*「 Tag Admins 」*

*Message : ${text}*\n\n`
for (let mem of groupAdmins) {
teks += ` @${mem.split('@')[0]}\n`
}
gss.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
}
break;

  

  case 'spotify':
case 'stify':
case 'sfy':
  try {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      m.reply('Masukkan link Spotify-nya!');
      doReact("❌");
      return;
    }

    // Check if the provided text is a valid Spotify URL
    const spotifyUrlPattern = /https?:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9?&=_-]+/;
    if (!spotifyUrlPattern.test(text)) {
      m.reply('Ini bukan link Spotify!');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    const apiUrl = `https://itzpire.com/download/spotify?url=${encodeURIComponent(text)}`;
    console.log(`Requesting API URL: ${apiUrl}`); // Log the API URL

    // Fetch data from the API
    const response = await fetch(apiUrl);
    console.log(`API Response Status: ${response.status}`); // Log the response status
    const data = await response.json();
    console.log(`API Response Data: ${JSON.stringify(data)}`); // Log the response data

    if (data.code === 200 && data.status === 'success' && data.data && !data.data.error) {
      const audioUrl = data.data.download;

      if (audioUrl) {
        const audioBuffer = await fetch(audioUrl).then(res => res.arrayBuffer());

        // Function to convert milliseconds to MM:SS format
        const formatDuration = (milliseconds) => {
          const totalSeconds = Math.floor(milliseconds / 1000);
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        };

        const thumbnailMessage = {
          image: { url: data.data.image },
          caption: `
╭═════════•∞•══╮
│⿻ *EKUSHI ☆*
│  *Spotify Player* 
│⿻ *Artist:* ${data.data.artist}
│⿻ *Title:* ${data.data.title}
│⿻ *Duration:* ${formatDuration(data.data.duration)}
╰══•∞•═════════╯
          `
        };

        await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
        await gss.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg' }, { quoted: m });
        await gss.sendMessage(m.chat, { 
          document: Buffer.from(audioBuffer), 
          mimetype: 'audio/mpeg', 
          fileName: `${data.data.title}.mp3` 
        }, { quoted: m });
        await doReact("✅");
      } else {
        m.reply('Gagal mengambil URL audio dari API.');
        await doReact("❌");
      }
    } else {
      m.reply('Gagal mengambil data dari API.');
      await doReact("❌");
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('Ada yang error.');
    await doReact("❌");
  }
  break;

    


  case 'yta':
case 'song':
case 'ytmp3':
  try {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      m.reply('Masukan link video YouTube nya!');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);

    const formatUploadDate = (dateString) => {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    };

    const formatDuration = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    if (isUrl) {
      // If it's a URL, directly use ytdl-core
      const audioStream = ytdl(text, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);
          const videoInfo = await ytdl.getInfo(text);

          const title = videoInfo.videoDetails.title || 'N/A';
          const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A';
          const formattedDuration = formatDuration(videoInfo.videoDetails.lengthSeconds);

          const thumbnailMessage = {
            image: { url: videoInfo.videoDetails.thumbnails[0].url },
            caption: `
╭═════════•∞•══╮
│⿻ *EKUSHI ☆*
│  *Youtube Player* 
│⿻ *Title:* ${title}
│⿻ *Duration:* ${formattedDuration}
│⿻ *Uploader:* ${videoInfo.videoDetails.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
            `
          };

          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { audio: finalAudioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
          await gss.sendMessage(m.chat, { 
            document: finalAudioBuffer, 
            mimetype: 'audio/mpeg', 
            fileName: `${title}.mp3` 
          }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('Error saat mengirim audio.');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];

      if (!firstVideo) {
        m.reply('Gak nemu audio nya.');
        await doReact("❌");
        return;
      }

      const audioStream = ytdl(firstVideo.url, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);
          const videoInfo = await ytdl.getInfo(firstVideo.url);

          const title = videoInfo.videoDetails.title || 'N/A';
          const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A';
          const formattedDuration = formatDuration(videoInfo.videoDetails.lengthSeconds);

          const thumbnailMessage = {
            image: { url: videoInfo.videoDetails.thumbnails[0].url },
            caption: `
╭═════════•∞•══╮
│⿻ *EKUSHI ☆*
│  *Youtube Player* 
│⿻ *Title:* ${title}
│⿻ *Duration:* ${formattedDuration}
│⿻ *Uploader:* ${videoInfo.videoDetails.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
            `
          };

          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { audio: finalAudioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
          await gss.sendMessage(m.chat, { 
            document: finalAudioBuffer, 
            mimetype: 'audio/mpeg', 
            fileName: `${title}.mp3` 
          }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('Error saat mengirim audio.');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('Ada yang error.');
    await doReact("❌");
  }
  break;

    




case 'ytadoc':
case 'songdoc':
case 'ytmp3doc':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      m.reply('Masukan link video YouTube nya!');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);

    if (isUrl) {
      // If it's a URL, directly use ytdl-core
      const audioStream = ytdl(text, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
          const thumbnailMessage = {
  image: {
    url: videoInfo.thumbnail,
  },
  caption: `
╭═════════•∞•══╮
│⿻ *EKUSHI ☆*
│  *Youtube Player* ✨
│⿻ *Title:* ${videoInfo.title}
│⿻ *Duration:* ${videoInfo.timestamp}
│⿻ *Uploader:* ${videoInfo.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Upload Date:* ${formatUploadDate(videoInfo.uploadDate)}
╰══•∞•═════════╯
`, 
};


          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { document: finalAudioBuffer, mimetype: 'audio/mpeg', fileName: `${videoInfo.title}.mp3` }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('Error saat mengirim audio.');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];

      if (!firstVideo) {
        m.reply('Gak nemu audio nya nih....');
        await doReact("❌");
        return;
      }

      const audioStream = ytdl(firstVideo.url, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const thumbnailMessage = {
  image: {
    url: firstVideo.thumbnail,
  },
  caption: `
╭═════════•∞•══╮
│⿻ *EKUSHI ☆*
│  *Youtube Mp3 Player* ✨
│⿻ *Title:* ${firstVideo.title}
│⿻ *Duration:* ${firstVideo.timestamp}
│⿻ *Uploader:* ${firstVideo.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Upload Date:* ${formatUploadDate(firstVideo.uploadDate)}
╰══•∞•═════════╯
`,
};
          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { document: finalAudioBuffer, mimetype: 'audio/mpeg', fileName: `${firstVideo.title}.mp3` }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('Error saat mengirim audio.');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('Ada yang error.');
    await doReact("❌");
  }
  break;




case 'yts': case 'ytsearch': case 'play': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('Masukan link video YouTube nya!');
  }
  await doReact("🕘");

  try {
    const results = await yts(text);

    if (results.videos.length > 0) {
      let pollOptions = [];

      const uniqueKey = `yts_${optionIndex}`;
      const urlObject = {};

      for (let i = 0; i < Math.min(5, results.videos.length); i++) {
        const result = results.videos[i];
        const videoUrl = result.url;
        const title = result.title;

        urlObject[`${optionIndex}.${i + 1}`] = videoUrl;
        pollOptions.push(`.𝐩𝐥𝐚𝐲 ${optionIndex}.${i + 1} ${title}`);
      }

      if (!videoSearchResults.has(uniqueKey)) {
        videoSearchResults.set(uniqueKey, {});
      }

      videoSearchResults.set(uniqueKey, Object.assign(videoSearchResults.get(uniqueKey), urlObject));

      await gss.sendPoll(m.chat, 'Choose a video to download:', [...pollOptions]);
      await doReact("✅");

      optionIndex += 1;
    } else {
      return m.reply('Gak nemu apa apa coba cari pake judul lain.');
    }
  } catch (error) {
    console.error('Error during yts:', error);
    return m.reply('Ada yang error.');
  }
  break;
}





function formatUploadDate(uploadDate) {
  const date = new Date(uploadDate);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

case '𝐩𝐥𝐚𝐲': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    m.reply('Please specify the video you want to play. Use the format: play [unique-key]');
    return doReact("❌");
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
    return doReact("❌");
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        const videoInfo = await ytdl.getInfo(selectedUrl);

        const formatDuration = (seconds) => {
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        };

        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
        const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A';
        const formattedDuration = formatDuration(videoInfo.videoDetails.lengthSeconds);

        const pollMessage = `
╭═════════•∞•══╮
│⿻ *EKUSHI ☆*
│  *Youtube Player* 
│⿻ *Title:* ${title}
│⿻ *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
│⿻ *Duration:* ${formattedDuration}
│⿻ *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
`;

        await gss.sendPoll(m.chat, pollMessage, [
          `.𝐀𝐮𝐝𝐢𝐨 ${optionIndex}.${subOption}`,
          `.𝐕𝐢𝐝𝐞𝐨 ${optionIndex}.${subOption}`,
          `.𝐀𝐮𝐝𝐢𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 ${optionIndex}.${subOption}`,
          `.𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 ${optionIndex}.${subOption}`
        ]);
        return doReact("✅");
      } catch (error) {
        console.error('Error during poll creation:', error);
        m.reply('Unexpected error occurred during poll creation.');
        return doReact("❌");
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}

async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

case '𝐀𝐮𝐝𝐢𝐨': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    m.reply('Please specify the unique key for audio playback. Use the format: audio [unique-key]');
    return doReact("❌");
  }

  m.reply(mess.wait);

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
    return doReact("❌");
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        const videoInfo = await ytdl.getInfo(selectedUrl);

        const formatDuration = (seconds) => {
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        };

        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
        const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A';
        const formattedDuration = formatDuration(videoInfo.videoDetails.lengthSeconds);

        const caption = `
╭═════════•∞•══╮
│⿻ *EKUSHI ☆*
│  *Youtube Player* 
│⿻ *Title:* ${title}
│⿻ *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
│⿻ *Duration:* ${formattedDuration}
│⿻ *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
`;

        const audioStream = ytdl(selectedUrl, { quality: 'highestaudio', filter: 'audioonly' });
        const audioBuffer = await streamToBuffer(audioStream);

        await gss.sendMessage(m.chat, {
          image: { url: videoInfo.videoDetails.thumbnails[0].url },
          caption: caption,
        }, { quoted: m });

        await gss.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg' });
        return doReact("✅");
      } catch (error) {
        console.error('Error during audio playback:', error);
        m.reply('Unexpected error occurred during audio playback.');
        return doReact("❌");
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}

case '𝐀𝐮𝐝𝐢𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('Please specify the unique key for audio playback. Use the format: audio [unique-key]');
  }

  m.reply(mess.wait);

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        const videoInfo = await ytdl.getInfo(selectedUrl);

        const formatDuration = (seconds) => {
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        };

        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
        const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A';
        const formattedDuration = formatDuration(videoInfo.videoDetails.lengthSeconds);

        const caption = `
╭═════════•∞•══╮
│⿻ *EKUSHI ☆*
│  *Youtube Player* 
│⿻ *Title:* ${title}
│⿻ *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
│⿻ *Duration:* ${formattedDuration}
│⿻ *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
`;

        const audioStream = ytdl(selectedUrl, { quality: 'highestaudio', filter: 'audioonly' });
        const audioBuffer = await streamToBuffer(audioStream);

        await gss.sendMessage(m.chat, {
          image: { url: videoInfo.videoDetails.thumbnails[0].url },
          caption: caption,
        }, { quoted: m });

        await gss.sendMessage(m.chat, {
          document: audioBuffer,
          mimetype: 'audio/mpeg',
          fileName: `${title}.mp3`,
        }, { quoted: m });

        return doReact("✅");
      } catch (error) {
        console.error('Error during audio playback:', error);
        m.reply('Unexpected error occurred during audio playback.');
        return doReact("❌");
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}

case '𝐕𝐢𝐝𝐞𝐨': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('Please specify the unique key for video playback. Use the format: video [unique-key]');
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

        // Construct caption with video details
        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
        const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 

const captionText = `
╭═════════•∞•══╮
│⿻ *GSS BOTWA*
│  *Youtube Mp4 Player* ✨
│⿻ *Title:* ${title}
│⿻ *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
│⿻ *Duration:* ${videoInfo.videoDetails.lengthSeconds}s
│⿻ *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
`;


        // Download audio and video together using 'videoandaudio' filter
        const videoAndAudioStream = ytdl(selectedUrl, { quality: 'highest', filter: 'audioandvideo' });

        // Convert the stream to buffer
        const videoAndAudioBuffer = await streamToBuffer(videoAndAudioStream);

        // Send the video and audio as a media message with caption
        await gss.sendMessage(m.chat, {
          video: videoAndAudioBuffer,
          mimetype: 'video/mp4',
          caption: captionText,
        }, { quoted: m });
        
      } catch (error) {
        console.error('Error during video playback:', error);
        return m.reply('Unexpected error occurred during video playback.');
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}

case '𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('Please specify the unique key for video playback. Use the format: video [unique-key]');
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

        // Construct caption with video details
        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
        const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 

const captionText = `
 *Video In Document* ✨
 *Title:* ${title}
 *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
 *Duration:* ${videoInfo.videoDetails.lengthSeconds}s
 *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
*Upload Date:* ${uploadDate}
`;


        // Download audio and video together using 'videoandaudio' filter
        const videoAndAudioStream = ytdl(selectedUrl, { quality: 'highest', filter: 'audioandvideo' });

        // Convert the stream to buffer
        const videoAndAudioBuffer = await streamToBuffer(videoAndAudioStream);

        // Send the video and audio as a media message with caption
        await gss.sendMessage(m.chat, {
  document: videoAndAudioBuffer,
  mimetype: 'video/mp4',
  fileName: `${title}.mp4`,
  caption: captionText,
}, { quoted: m });
      } catch (error) {
        console.error('Error during video playback:', error);
        return m.reply('Unexpected error occurred during video playback.');
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}





  case 'restart':
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!isCreator) return m.reply(mess.owner)
                m.reply('Proses....')
                exec('pm2 restart all')
            break



            async function instaDownload(url) {
              try {
                  const apiUrl = `https://api.agatz.xyz/api/instagram?url=${encodeURIComponent(url)}`;
                  const response = await fetch(apiUrl);
          
                  if (!response.ok) {
                      const errorMessage = await response.text();
                      throw new Error(`API Error (${response.status}): ${errorMessage}`);
                  }
          
                  const result = await response.json();
                  return result;
              } catch (error) {
                  console.error(`Error with API: ${error.message}`);
                  throw error;
              }
          }
          
          async function downloadInstagramMedia(url) {
              try {
                  const result = await instaDownload(url);
          
                  console.log('API Response:', result);
          
                  if (result.status === 200 && result.data && result.data.length > 0) {
                      const mediaUrls = result.data;
                      console.log('Media URLs:', mediaUrls);
          
                      const mediaItems = [];
                      for (const media of mediaUrls) {
                          const mediaUrl = media.link;
                          const mediaResponse = await fetch(mediaUrl);
                          if (!mediaResponse.ok) {
                              throw new Error('Error fetching media content for type inspection');
                          }
                          const contentType = mediaResponse.headers.get('content-type');
                          console.log('Content Type:', contentType);
          
                          const mediaType = contentType.includes('video') ? 'video' : 'image';
                          mediaItems.push({ type: mediaType, url: mediaUrl });
                      }
          
                      return mediaItems;
                  } else {
                      throw new Error('Invalid or unexpected API response');
                  }
              } catch (error) {
                  console.error('Error downloading Instagram media:', error.message);
                  throw error;
              }
          }
          
          async function downloadAndSendMedia(m, text, isDocument) {
              const url = text;
          
              if (!url) {
                  return m.reply(`Link nya manah?\n\nContoh: ${prefix + command} https://www.instagram.com/p/CK0tLXyAzEI`);
              }
          
              m.reply(mess.wait);
          
              try {
                  const mediaItems = await downloadInstagramMedia(url);
                  const imageItems = mediaItems.filter(media => media.type === 'image');
                  const videoItems = mediaItems.filter(media => media.type === 'video');
          
                  if (imageItems.length > 0) {
                      if (imageItems.length === 1) {
                          const imageUrl = imageItems[0].url;
                          const response = await fetch(imageUrl);
                          const bufferArray = await response.arrayBuffer();
                          const fileBuffer = Buffer.from(bufferArray);
                          await gss.sendMessage(m.chat, { image: fileBuffer, mimetype: 'image/jpeg', caption: '' }, { quoted: m });
                      } else {
                          const createImage = async (url) => {
                              const { imageMessage } = await generateWAMessageContent({ image: { url }, jpegThumbnail: "" }, { upload: gss.waUploadToServer });
                              return imageMessage;
                          }
          
                          const cards = [];
                          for (const imageUrl of imageItems) {
                              const imageMessage = await createImage(imageUrl.url);
                              cards.push({
                                  header: { hasMediaAttachment: true, imageMessage },
                                  nativeFlowMessage: {}
                              });
                          }
          
                          const { message, key } = generateWAMessageFromContent(m.chat, {
                              interactiveMessage: {
                                  body: { text: `𝐒𝐞𝐥𝐞𝐬𝐚𝐢 𝐧𝐢𝐡.....` },
                                  footer: { text: "Instagram Download EKUSHI ☆" },
                                  carouselMessage: { cards }
                              }
                          }, { quoted: m });
          
                          await gss.relayMessage(m.chat, { viewOnceMessage: { message } }, { messageId: key.id });
                      }
                  }
          
                  if (videoItems.length > 0) {
                      for (const media of videoItems) {
                          const response = await fetch(media.url);
                          if (!response.ok) {
                              throw new Error('Error fetching media content');
                          }
                          const bufferArray = await response.arrayBuffer();
                          const fileBuffer = Buffer.from(bufferArray);
          
                          const fileName = `instagram_media.mp4`;
                          const mimeType = 'video/mp4';
          
                          console.log('Sending media with MIME type:', mimeType);
          
                          if (isDocument) {
                              await gss.sendMessage(m.chat, { document: fileBuffer, mimetype: mimeType, fileName }, { quoted: m });
                          } else {
                              await gss.sendMessage(m.chat, { video: fileBuffer, mimetype: mimeType, fileName, caption: 'Instagram Download EKUSHI ☆' }, { quoted: m });
                          }
                      }
                  }
              } catch (error) {
                  console.error('Error while processing Instagram media:', error);
                  return m.reply(`An error occurred: ${error.message}`);
              }
          }
          
          // Example command handling
          case 'igdl':
          case 'insta':
          case 'ig':
          case 'instagram':
              if (isBan) return m.reply(mess.banned);
              if (isBanChat) return m.reply(mess.bangc);
              await downloadAndSendMedia(m, text, false);
              break;
          
          
          


case 'toanime':
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!quoted) return m.reply(`Where is the picture?`);
  if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`);

  m.reply(mess.wait);
  try {
    // Download the image
    const dataaa = await quoted.download();
    if (!dataaa) {
      console.error('No files passed during download');
      throw new Error('No files passed');
    }

    // Upload the image
    try {
      const image = await uploadImage(dataaa);
      console.log('Image uploaded successfully:', image);

      // Generate anime version using Lolhuman API or Caliph API as a fallback
      try {
        const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=GataDiosV2&img=${image}`;
        await gss.sendMedia(m.chat, anime, 'error.jpg', null, m);
      } catch (i) {
        // If Lolhuman API fails, try Caliph API as a fallback
        try {
          const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
          await gss.sendMedia(m.chat, anime3, 'error.jpg', null, m);
        } catch (e) {
          // If both APIs fail, throw an error
          console.error('Error generating anime version:', e);
          throw '*[❗] Error occurred. Unable to generate anime version of the image.*';
        }
      }
    } catch (uploadError) {
      console.error('Error uploading image:', uploadError);
      throw `*[❗] Error uploading image: ${uploadError.message || uploadError}.*`;
    }
  } catch (downloadError) {
    console.error('Error downloading image:', downloadError);
    throw `*[❗] Error downloading image: ${downloadError.message || downloadError}.*`;
  }
  break;




case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'handhold': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
axios.get(`https://api.waifu.pics/sfw/${isCommand}`)
.then(({data}) => {
gss.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break

case 'qc':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    try {
        if (!text) {
            return m.reply('Please provide text for the quote.');
        }

        if (text.length > 30) {
            return m.reply('Please provide text with a maximum of 30 characters.');
        }

        const settings = global.db.setting;
        let profilePicture;

        try {
            profilePicture = await gss.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image');
        } catch {
            profilePicture = 'https://srv.neoxr.tk/files/z8hI5T.jpg';
        }

        const quoteObject = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": m.quoted ? global.db.users.find(v => v.jid == m.quoted.sender).name : m.pushName,
                    "photo": {
                        "url": profilePicture
                    }
                },
                "text": text,
                "replyMessage": {}
            }]
        };

        try {
            const response = await axios.post('https://bot.lyo.su/quote/generate', quoteObject, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const buffer = Buffer.from(response.data.result.image, 'base64');

            gss.sendImageAsSticker(m.chat, buffer, m, {
                packname: global.packname,
                author: global.author
            });
        } catch (error) {
            console.error('Error during HTTP request:', error);
            return m.reply('Error generating sticker. Please try again later.');
        }

    } catch (error) {
        console.error('Unexpected error in sticker case:', error);
        // Handle any other unexpected errors
    }
    break;




case 'apk': case 'app': case 'apkdl': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) throw `I need an apk name for download`;

  const getRandomName = (ext) => `${Math.floor(Math.random() * 10000)}${ext}`;
  const randomName = getRandomName(".apk");
  const filePath = `./${randomName}`;

  let searchResults = await search(text);

  if (!searchResults.length) return m.reply("App not found!");

  const data = await download(searchResults[0].id);

  // No need to check file size, proceed with download

  const url = data.dllink;
  const iconUrl = data.icon;

  let info = `╭───〈 *${data.name}* 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *App Name:* ${data.name}
▮➣ *App Id:* ${data.package}
▮➣ *Last Update:* ${data.lastup}
▮➣ *App Size:* ${data.size}
▮➣ *App Version:* ${data.version}
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

  // Download icon
  const iconPath = `./${getRandomName(".png")}`;
  await axios.get(iconUrl, { responseType: 'stream' })
    .then(response => {
      const writer = fs.createWriteStream(iconPath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    });

  const iconMessage = {
    image: fs.readFileSync(iconPath),
    caption: info
  };

  // Send icon with info
  await gss.sendMessage(m.chat, iconMessage, { quoted: m });

  // Delete temporary icon file
  fs.unlink(iconPath, (err) => {
    if (err) {
      console.error('Error deleting icon file:', err);
    } else {
      console.log('Icon file deleted successfully');
    }
  });

  // Download and send APK
  axios.get(url, { responseType: 'stream' })
    .then(response => {
      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    }).then(() => {
      const apkMessage = {
        document: fs.readFileSync(filePath),
        mimetype: 'application/vnd.android.package-archive',
        fileName: `${data.name}.apk`
      };

      gss.sendMessage(m.chat, apkMessage, { quoted: m });

      // Delete temporary APK file
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting APK file:', err);
        } else {
          console.log('APK file deleted successfully');
        }
      });
    }).catch(error => {
      fs.unlink(filePath);
      return m.reply('*Apk not Found, Sorry, try with apk2 cmd*');
    });

  break;
}


case 'banchat': case 'bangroup': case 'banmode': {
  if (isBan) return m.reply(mess.banned);
        if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs')
        if (args[0] === "on") {
          if (isBanChat) return m.reply('This Group is Already Banned from using me!');
          banchat.push(m.from);
          m.reply('This Group has been banned from using me!');

          var groupe = await gss.groupMetadata(m.from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
        } else if (args[0] === "off") {
          if (!isBanChat) return m.reply('This Group is Already Banned from using me!');
          let off = banchat.indexOf(m.from);
          banchat.splice(off, 1);
          m.reply('This Group has been *unbanned* from using me!');
        } else {
          m.reply('Please choose either *"on"* or *"off"* to ban or unban the group from using the bot.');
        }
      }
        break;


case "tts": case "say":
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
        await doReact("❌");
        return m.reply(`*Provide language code and text for text-to-speech.*\nExample: !tts en Hello, how are you?`);
    }

    const [langCode, ...textToSpeakArray] = text.split(" ");
    const textToSpeak = textToSpeakArray.join(" ");

    try {
        const apiUrl = `https://texttospeech.apinepdev.workers.dev/?lang=${encodeURIComponent(langCode)}&text=${encodeURIComponent(textToSpeak)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            await doReact("❌");
            return m.reply(`*Provide language code and text for text-to-speech.*\nExample: !tts en Hello, how are you?`);
        }

        // Directly send the audio stream
        await gss.sendMessage(m.chat, {
            audio: {
                url: response.url, // Use the direct stream link from the API response
            },
            mimetype: 'audio/mp4',
            ptt: true,
            fileName: 'tts_audio.mp3',
        }, {
            quoted: m,
        });

        await doReact("✅");
    } catch (error) {
        console.error(error);
        await doReact("❌");
        return m.reply(`An error occurred while processing the text-to-speech request. ${error.message}`);
    }
    break;



    

case 'surah': case 'quran':
    let surahInput = m.text.split(' ')[1];

    if (!surahInput) {
        throw (`Please specify the surah number or name`);
    }

    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran');
    let surahList = await surahListRes.json();

    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    );

    if (!surahData) {
        throw (`Couldn't find surah with number or name "${surahInput}"`);
    }

    let ress = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`);
    
    if (!ress.ok) {
        let error = await ress.json(); 
        throw (`API request failed with status ${ress.status} and message ${error.message}`);
    }

    let json = await ress.json();

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = '';
    try {
        translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur' });
    } catch (error) {
        console.error('Error translating to Urdu:', error);
        translatedTafsirUrdu = 'Translation not available';
    }

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = '';
    try {
        translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'id' });
    } catch (error) {
        console.error('Error translating to Indonesia:', error);
        translatedTafsirEnglish = 'Translation not available';
    }

    let quranSurah = `
    🕌 *Quran*\n
    📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
    🔮 *Bacaan (Urdu):*\n
    ${translatedTafsirUrdu}\n
    🔮 *Artinya (Indonesia):*\n
    ${translatedTafsirEnglish}`;

    m.reply(quranSurah);

    if (json.data.recitation.full) {
       gss.sendMedia(m.chat, json.data.recitation.full, 'recitation.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    }
    break;



case 'mediafire': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    // Check if the command has rguments
    if (args.length === 0) {
        return m.reply(`Link nya manah? \n\nContoh: ${prefix + command} https://www.mediafire.com/file/96mscj81p92na3r/images+(35).jpeg/file`);
    }

    // Check if the argument is a valid MediaFire link
    if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) {
        return m.reply(`Link yang kamu kasih salah/rusak`);
    }

    // Import the mediafireDl function from the mediafire.js file
    const { mediafireDl } = require('./lib/mediafire.js');

    // Reply with a "Please wait..." message
    await m.reply(mess.wait);

    try {
        // Call the mediafireDl function to get details about the file
        const fileInfo = await mediafireDl(text);

        // Check if the file size is too big
        if (fileInfo[0].size.split('MB')[0] >= 100) {
            return m.reply('Walah, file nya terlalu gede maximum nya cuman 100MB');
        }

        // Send the file to the user with a caption
        gss.sendMessage(
            m.chat,
            {
                document: {
                    url: fileInfo[0].link,
                },
                fileName: fileInfo[0].nama,
                mimetype: fileInfo[0].mime,
                caption: `Downloaded by EKUSHI ☆: ${fileInfo[0].nama}`,  // Add your desired caption
            },
            { quoted: m }
        );
    } catch (error) {
        // Handle any errors that may occur during the process
        console.error('Error in mediafire download:', error);
        m.reply(`An error occurred: ${error.message}`);
    }

    break;
}



case 'invite': case 'add': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
if (!text) return m.reply(`*Enter the number you want to invite to the group*\n\nExample :\n*${prefix + command}* 919142294671`)
if (text.includes('+')) return m.reply(`Enter the number together without *+*`)
if (isNaN(text)) return m.reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await gss.groupInviteCode(group)
      await gss.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        m.reply(` An invite link is sent to the user`) 
}
break


    


case 'fb': case 'fbdl': case 'facebook': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!args[0]) {
        throw `Mana link nya?\n\nContoh:\n *${prefix + command}* https://fb.watch/7B5KBCgdO3`;
    }

    const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    if (!urlRegex.test(args[0])) {
        throw '⚠️ PLEASE KASIH LINK YANG BENER.';
    }
     await m.reply(mess.wait);
    try {
        const result = await fg.fbdl(args[0]);
        const tex = `
*Title*: ${result.title}
`;


        const response = await fetch(result.videoUrl);
        const arrayBuffer = await response.arrayBuffer();
        const videoBuffer = Buffer.from(arrayBuffer);

        // Save the videoBuffer to a temporary file
        const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
        fs.writeFileSync(`./${randomName}`, videoBuffer);

        // Send the video using client.sendMessage
        await gss.sendMessage(
            m.chat,
            {
                video: fs.readFileSync(`./${randomName}`),
                caption: tex,
            },
            { quoted: m }
        );

        fs.unlinkSync(`./${randomName}`);
    } catch (error) {
        console.log(error);
        m.reply('⚠️ An error occurred while processing the request. Please try again later.');
    }

    break;
}
  

 case 'autobio':
                if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!isCreator) throw mess.owner
                if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber]. io = true
                    m.reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    m.reply(`Successfully Changed AutoBio To ${q}`)
                }
            break

 case 'gitclone':
   if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        m.reply(mess.wait);
  if (!args[0]) return m.reply(`Link nya manah?\nContoh :\n${prefix}${command} https://github.com/ExyXyz/ExyGantenk`)
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link nya salah!!`)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  let [, user, repo] = args[0].match(regex1) || []
  repo = repo.replace(/.git$/, '')
  let gitUrl = `https://api.github.com/repos/${user}/${repo}/zipball`
  let filename = (await fetch(gitUrl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  gss.sendMessage(m.chat, { document: { url: gitUrl }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
  break;




case 'google': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) throw `Example : ${prefix + command} exy ganteng`;
  let google = require('google-it');
  google({ 'query': text }).then(res => {
    let teks = `Google Search From : ${text}\n\n`;
    for (let g of res) {
      teks += `⭔ *Title* : ${g.title}\n`;
      teks += `⭔ *Description* : ${g.snippet}\n`;
      teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
    }
    m.reply(teks);
  });
}
break;


case 'shorturl': case 'tiny': case 'tinyurl': {
    if (!args[0]) return m.reply('Please provide a URL to shorten.');

    const apiUrl = `https://tinyurl.com/api-create.php?url=${args[0]}`;

    axios.get(apiUrl)
        .then(response => {
            const shortenedUrl = response.data;
            const messageToSend = `Shortened URL: ${shortenedUrl}`;
            m.reply(messageToSend)
        })
        .catch(error => {
            console.error('Error shortening URL:', error);
            m.reply('Error shortening URL. Please try again later.');
        });
}
break;


case 'sticker': case 's': case 'stickergif': case 'sgif': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (/image/.test(mime)) {
    let media = await gss.downloadMediaMessage(qmsg);
    let encmedia = await gss.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if (qmsg.seconds > 11) return m.reply('Durasi maksimum nya 10 detik');
    let media = await gss.downloadMediaMessage(qmsg);
    let encmedia = await gss.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    m.reply(`Kirim gambar/video atau reply gambar/video pake ${prefix + command}\nVideo/Gif durasi nya 1-9 detik`);
  }
}
break;



case 'pinterest':
  case 'pin': {
  try {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    
    let textParts = text.split('#');
    let query = textParts[0].trim();
    let limit = textParts[1] ? parseInt(textParts[1].trim()) : 1;

    m.reply(mess.wait);
    let { pinterest } = require('./lib/scraper');
    let results = await pinterest(query);

    if (!results || results.length === 0) {
      throw new Error('No results found for the query');
    }

    // Limit the number of results to the specified limit
    results = results.slice(0, limit);

    if (results.length === 1) {
      // Single image case
      let result = results[0];
      await gss.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : ' + result }, { quoted: m });
    } else {
      // Multiple images case, send as carousel
      const cards = [];
      for (const result of results) {
        const { imageMessage } = await generateWAMessageContent({ image: { url: result }, jpegThumbnail: "" }, { upload: gss.waUploadToServer });
        cards.push({
          header: { hasMediaAttachment: true, imageMessage },
          nativeFlowMessage: {}
        });
      }

      const { message, key } = generateWAMessageFromContent(m.chat, {
        interactiveMessage: {
          body: { text: `𝐒𝐞𝐥𝐞𝐬𝐚𝐢 𝐧𝐢𝐡.....` },
          footer: { text: "Pinterest EKUSHI ☆" },
          carouselMessage: { cards }
        }
      }, { quoted: m });

      await gss.relayMessage(m.chat, { viewOnceMessage: { message } }, { messageId: key.id });
    }

    await doReact("✅");
  } catch (error) {
    console.error('Error during:', error);
    m.reply(`Ada yang error: ${error.message}`);
    await doReact("❌");
  }
}
break;





function getUserWarnings(userId) {
  return userWarnings[userId];
}

function setUserWarnings(userId, warnings) {
  userWarnings[userId] = warnings;
}


case 'warn': {
  if (!isCreator) return m.reply(mess.owner)
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  

  let orgnye;

  if (m.quoted) {
    orgnye = m.quoted;
  } else {
    return m.reply('Mention or reply to the user you want to warn.');
  }


  warnedUsers.push(orgnye);

  const currentWarnings = getUserWarnings(orgnye) || 0;
  const newWarnings = currentWarnings + 1;
  setUserWarnings(orgnye, newWarnings);

  m.reply(`User warned (${newWarnings}/3).`);

  if (newWarnings === 3) {
    gss.groupParticipantsUpdate(m.chat, [orgnye], 'remove');
    m.reply('User kicked from the group due to three warnings.');

    setUserWarnings(orgnye, 0);
  } else {
    m.reply(`user warned: ${text}`);
  }
  break;
}




function unwarnUser(userId) {
  
  const currentWarnings = getUserWarnings(userId) || 0;

  if (currentWarnings > 0) {

    const newWarnings = currentWarnings - 1;
    setUserWarnings(userId, newWarnings);

    return newWarnings;
  } else {
    return 0; 
  }
}


case 'unwarn': {
  if (!isCreator) return m.reply(mess.owner)
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  

  let orgnye;

  if (m.quoted ) {
    orgnye = m.quoted;
  } else {
    return m.reply('Mention or reply to the user you want to unwarn.');
  }


  const remainingWarnings = unwarnUser(orgnye);

  if (remainingWarnings > 0) {
    m.reply(`User's warning removed (${remainingWarnings}/3).`);
  } else {
    m.reply('User has no warnings to remove.');
  }

  break;
}



case 'wikimedia': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) throw 'Enter Query Title';
  let { wikimedia } = require('./lib/scraper');
  anu = await wikimedia(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  let Message = {
    image: { url: result.image },
    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
  };
  gss.sendMessage(m.chat, Message, { quoted: m });
}
break;



        case 'ringtone': {
if (isBan) throw mess.banned;
        if (isBanChat) throw mess.bangc;
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		gss.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	    
	    case 'addowner': {
  if (!isCreator) throw mess.owner; // Only allow creator to add owner(s)

  const numbersToAdd = args.map(num => num.trim()); // Assuming args is an array containing phone numbers to add

  if (numbersToAdd.length === 0) {
    return m.reply('Please provide at least one phone number.');
  }

  const addedOwners = [];

  numbersToAdd.forEach(num => {
    if (!global.owner.includes(num)) {
      global.owner.push(num);
      addedOwners.push(num);
    }
  });

  if (addedOwners.length > 0) {
    m.reply(`Added ${addedOwners.length > 1 ? 'owners' : 'owner'} successfully. ${addedOwners.join(', ')} added as owner${addedOwners.length > 1 ? 's' : ''}.`);
  } else {
    m.reply('None of the provided phone numbers were added as owner.');
  }

  break;
}

case 'deleteowner': {
  if (!isCreator) throw mess.owner; // Only allow creator to delete owner(s)

  const numbersToDelete = args.map(num => num.trim()); // Assuming args is an array containing phone numbers to delete

  if (numbersToDelete.length === 0) {
    return m.reply('Please provide at least one phone number to delete.');
  }

  const deletedOwners = [];

  numbersToDelete.forEach(num => {
    const index = global.owner.indexOf(num);
    if (index !== -1) {
      global.owner.splice(index, 1);
      deletedOwners.push(num);
    }
  });

  if (deletedOwners.length > 0) {
    m.reply(`Deleted ${deletedOwners.length > 1 ? 'owners' : 'owner'} successfully. ${deletedOwners.join(', ')} removed as owner${deletedOwners.length > 1 ? 's' : ''}.`);
  } else {
    m.reply('None of the provided phone numbers were found in the owner list.');
  }

  break;
}


	    
	    
		     case 'mode': {
    if (!isCreator) throw mess.owner;
    if (isBan) throw mess.banned;
    if (isBanChat) throw mess.bangc;

    const validModes = ['onlygroup', 'onlypc', 'public', 'self'];

    if (args.length < 1 || !validModes.includes(args[0].toLowerCase())) {
        gss.sendPoll(m.chat, "Choose Bot Mode:", validModes.map(mode => `${prefix}mode ${mode}`));
    } else {
        const selectedMode = args[0].toLowerCase();

        if (selectedMode === 'onlygroup') {
            gss.sendPoll(m.chat, "Choose Mode Status:", ['.onlygroup true', '.onlygroup false']);
        } else if (selectedMode === 'onlypc') {
            gss.sendPoll(m.chat, "Choose Mode Status:", ['.onlypc true', '.onlypc false']).then((msg) => {
                const handler = (votes) => {
                    const modeStatus = votes[0] > votes[1]; // 'on' is selected if votes[0] > votes[1]
                    global[selectedMode] = modeStatus;
                    m.reply(`Bot mode ${selectedMode} ${modeStatus ? 'turned on' : 'turned off'}. ${mess.success}`);
                    msg?.clearReactions();
                    gss.off('poll_update', handler);
                };
                gss.on('poll_update', handler);
            });
        } else {
            gss.public = selectedMode === 'public';
            m.reply(`Successful in Changing To ${selectedMode === 'public' ? 'Public' : 'Self'} Usage.`);
        }
    }
}
break;


            case 'self': {
        if (!isCreator) throw mess.owner;
    if (isBan) throw mess.banned;
    if (isBanChat) throw mess.bangc;
                gss.public = false
                m.reply('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
                if (!isCreator) throw mess.owner;
    if (isBan) throw mess.banned;
    if (isBanChat) throw mess.bangc;
                gss.public = true
                m.reply('*Successful in Changing To Public Usage*')
            }
            break

            
            case 'owner': case 'creator': {
             
                gss.sendContact(m.chat, global.owner, m)
            }
            break




            
            
case 'getbio':  
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
   if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await gss.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) throw `bio is private!`
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await gss.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      throw `bio is private!`
    }
  }
  break; // Don't forget to add the 'break' statement at the end
  
case 'system': case 'info': case 'ram': case 'usage': case 'ping':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
mainSys();
break;

case 'setmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('setmenu has 5 views');
    typemenu = text;
    m.reply(mess.success);
}
break;

case 'menutype': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('menuType 1 for reply menu\nmenuType 2 for pollmenu');
    menuType = text;
    m.reply(mess.success);
}
break;

case 'onlygroup': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('onlygroup true/false');

    gonlygroup = text === 'true'; 
    m.reply(mess.success);
}
break;

case 'onlypc': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('onlypc true/false');

    onlypc = text === 'true';
    m.reply(mess.success);
}
break;

case 'tiktok':
case 'tt':
case 'tiktoknowm':
  try {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) return m.reply('Enter Query Link!');

    m.reply(mess.wait);

    let anu = await fetchJson(`https://api.agatz.xyz/api/tiktok?url=${encodeURIComponent(text)}`);

    console.log('TikTok API Response:', anu);

    if (anu.status === 200 && anu.data) {
      const result = anu.data;

      // Remove hashtags from the title
      const title = result.title.split(' ').filter(word => !word.startsWith('#')).join(' ');
      const nickname = result.author.nickname;
      const caption = `*${nickname}*\n\n${title}`;

      const videoData = result.data.find(item => item.type === 'nowatermark');
      const photos = result.data.filter(item => item.type === 'photo');

      if (videoData && videoData.url) {
        const response = await axios.get(videoData.url, { responseType: 'arraybuffer' });
        const videoBuffer = Buffer.from(response.data);

        const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
        fs.writeFileSync(`./${randomName}`, videoBuffer);

        const thumbnailPath = './tutu.png';
        const jpegThumbnail = fs.readFileSync(thumbnailPath);

        await gss.sendMessage(m.chat, {
          video: fs.readFileSync(`./${randomName}`),
          mimetype: 'video/mp4',
          caption: caption,
          jpegThumbnail: jpegThumbnail
        }, { quoted: m });

        fs.unlinkSync(`./${randomName}`);
      } else if (photos.length > 0) {
        if (photos.length === 1) {
          // Send a normal image message if there's only one image
          await gss.sendMessage(m.chat, {
            image: { url: photos[0].url },
            caption: caption
          }, { quoted: m });
        } else {
          // Send a carousel if there are multiple images
          const createImage = async (url) => {
            const { imageMessage } = await generateWAMessageContent({ image: { url }, jpegThumbnail: "" }, { upload: gss.waUploadToServer });
            return imageMessage;
          }

          const cards = [];
          for (const photo of photos) {
            const imageMessage = await createImage(photo.url);
            cards.push({
              header: { hasMediaAttachment: true, imageMessage },
              nativeFlowMessage: {}
            });
          }

          const { message, key } = generateWAMessageFromContent(m.chat, {
            interactiveMessage: {
              body: { text: `𝐒𝐞𝐥𝐞𝐬𝐚𝐢 𝐧𝐢𝐡.....` },
              footer: { text: "Tiktok Slide EKUSHI ☆" },
              carouselMessage: { cards }
            }
          }, { quoted: m });

          await gss.relayMessage(m.chat, { viewOnceMessage: { message } }, { messageId: key.id });
        }
      } else {
        console.log('Error: No video or photos found in TikTok media.');
        m.reply('Error: No video or photos found in TikTok media.');
      }

      // Fetch and send the TikTok audio
      if (result.music_info && result.music_info.url) {
        const audioUrl = result.music_info.url;

        const audioRes = await axios.get(audioUrl, { responseType: 'arraybuffer' });
        const audioBuffer = Buffer.from(audioRes.data);

        const randomAudioName = `temp_${Math.floor(Math.random() * 10000)}.mp3`;
        fs.writeFileSync(`./${randomAudioName}`, audioBuffer);

        await gss.sendMessage(m.chat, {
          audio: fs.readFileSync(`./${randomAudioName}`),
          mimetype: 'audio/mp4',
          ptt: false
        }, { quoted: m });

        fs.unlinkSync(`./${randomAudioName}`);
      } else {
        console.log('Error: Unable to fetch TikTok audio.');
        m.reply('Error: Unable to fetch TikTok audio.');
      }

    } else {
      console.log('Error: Unable to fetch TikTok media. Check the console logs for more details.');
      m.reply('Error: Unable to fetch TikTok media. Check the console logs for more details.');
    }
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while processing your request.');
  }
  break;









  case 'tiktokhd':
    case 'tthd':
    case 'tiktoknowmhd':
      try {
        if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!text) return m.reply('Enter Query Link!');
    
        m.reply(mess.wait);
    
        let anu = await fetchJson(`https://api.agatz.xyz/api/tiktok?url=${encodeURIComponent(text)}`);
    
        console.log('TikTok API Response:', anu);
    
        if (anu.status === 200 && anu.data) {
          const result = anu.data;
          const title = result.title;
          const videoData = result.data.find(item => item.type === 'nowatermark_hd');
          const photos = result.data.filter(item => item.type === 'photo');
    
          if (videoData && videoData.url) {
            const response = await axios.get(videoData.url, { responseType: 'arraybuffer' });
            const videoBuffer = Buffer.from(response.data);
    
            const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
            fs.writeFileSync(`./${randomName}`, videoBuffer);
    
            const thumbnailPath = './tutu.png';
            const jpegThumbnail = fs.readFileSync(thumbnailPath);
    
            await gss.sendMessage(m.chat, {
              video: fs.readFileSync(`./${randomName}`),
              mimetype: 'video/mp4',
              caption: `*Title*: ${title}`,
              jpegThumbnail: jpegThumbnail
            }, { quoted: m });
    
            fs.unlinkSync(`./${randomName}`);
          } else if (photos.length > 0) {
            if (photos.length === 1) {
              // Send a normal image message if there's only one image
              await gss.sendMessage(m.chat, {
                image: { url: photos[0].url },
                caption: `*Title*: ${title}`
              }, { quoted: m });
            } else {
              // Send a carousel if there are multiple images
              const createImage = async (url) => {
                const { imageMessage } = await generateWAMessageContent({ image: { url }, jpegThumbnail: "" }, { upload: gss.waUploadToServer });
                return imageMessage;
              }
    
              const cards = [];
              for (const photo of photos) {
                const imageMessage = await createImage(photo.url);
                cards.push({
                  header: { hasMediaAttachment: true, imageMessage },
                  nativeFlowMessage: {}
                });
              }
    
              const { message, key } = generateWAMessageFromContent(m.chat, {
                interactiveMessage: {
                  body: { text: `𝐒𝐞𝐥𝐞𝐬𝐚𝐢 𝐧𝐢𝐡.....` },
                  footer: { text: "Tiktok Slide EKUSHI ☆" },
                  carouselMessage: { cards }
                }
              }, { quoted: m });
    
              await gss.relayMessage(m.chat, { viewOnceMessage: { message } }, { messageId: key.id });
            }
          } else {
            console.log('Error: No video or photos found in TikTok media.');
            m.reply('Error: No video or photos found in TikTok media.');
          }
    
          // Fetch and send the TikTok audio
          if (result.music_info && result.music_info.url) {
            const audioUrl = result.music_info.url;
    
            const audioRes = await axios.get(audioUrl, { responseType: 'arraybuffer' });
            const audioBuffer = Buffer.from(audioRes.data);
    
            const randomAudioName = `temp_${Math.floor(Math.random() * 10000)}.mp3`;
            fs.writeFileSync(`./${randomAudioName}`, audioBuffer);
    
            await gss.sendMessage(m.chat, {
              audio: fs.readFileSync(`./${randomAudioName}`),
              mimetype: 'audio/mp4',
              ptt: false
            }, { quoted: m });
    
            fs.unlinkSync(`./${randomAudioName}`);
          } else {
            console.log('Error: Unable to fetch TikTok audio.');
            m.reply('Error: Unable to fetch TikTok audio.');
          }
    
        } else {
          console.log('Error: Unable to fetch TikTok media. Check the console logs for more details.');
          m.reply('Error: Unable to fetch TikTok media. Check the console logs for more details.');
        }
      } catch (error) {
        console.error(error);
        m.reply('An error occurred while processing your request.');
      }
      break;

  

      case 'twitter':
case 'twit':
case 'twt':
  try {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      m.reply('Masukan link tweet nya!');
      doReact("❌");
      return;
    }

    // Handle x.com URLs by replacing them with twitter.com
    const tweetUrl = text.includes('x.com') ? text.replace('x.com', 'twitter.com') : text;

    m.reply(mess.wait);
    await doReact("🕘");

    const apiUrl = `https://api.bk9.site/download/twitter-2?url=${encodeURIComponent(tweetUrl)}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch tweet');
    }

    const result = await response.json();

    // Log the API response for debugging
    console.log('API response:', result);

    if (!result || !result.BK9 || !result.BK9.found) {
      throw new Error('Invalid response from API');
    }

    const mediaItems = result.BK9.media;
    if (!mediaItems || mediaItems.length === 0) {
      throw new Error('No media found in tweet');
    }

    // Prepare caption text
    const captionText = `*Author:* ${result.BK9.authorName} (@${result.BK9.authorUsername})
*Date:* ${result.BK9.date}
*Likes:* ${result.BK9.likes}
*Replies:* ${result.BK9.replies}
*Retweets:* ${result.BK9.retweets}`;

    if (mediaItems.length === 1 && mediaItems[0].type === 'video') {
      // Single video case
      const videoResponse = await fetch(mediaItems[0].url);
      if (!videoResponse.ok) {
        throw new Error('Failed to download video');
      }
      const arrayBuffer = await videoResponse.arrayBuffer();
      const videoBuffer = Buffer.from(arrayBuffer);
      await gss.sendMessage(m.chat, { video: videoBuffer, mimetype: 'video/mp4', caption: captionText }, { quoted: m });
    } else {
      // Images case, including carousel
      const createImage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({ image: { url }, jpegThumbnail: "" }, { upload: gss.waUploadToServer });
        return imageMessage;
      }

      if (mediaItems.length === 1 && mediaItems[0].type === 'image') {
        const imageMessage = await createImage(mediaItems[0].url);
        await gss.relayMessage(m.chat, { imageMessage }, { quoted: m });
      } else {
        const cards = [];
        for (const media of mediaItems) {
          if (media.type === 'image') {
            const imageMessage = await createImage(media.url);
            cards.push({
              header: { hasMediaAttachment: true, imageMessage },
              nativeFlowMessage: {}
            });
          }
        }

        const { message, key } = generateWAMessageFromContent(m.chat, {
          interactiveMessage: {
            body: { text: `𝐒𝐞𝐥𝐞𝐬𝐚𝐢 𝐧𝐢𝐡.....` },
            footer: { text: "Twitter EKUSHI ☆" },
            carouselMessage: { cards }
          }
        }, { quoted: m });

        await gss.relayMessage(m.chat, { viewOnceMessage: { message } }, { messageId: key.id });
      }
    }

    await doReact("✅");
  } catch (error) {
    console.error('Error during:', error);
    m.reply(`Ada yang error: ${error.message}`);
    await doReact("❌");
  }
  break;

        


  case 'ytv':
    case 'video': 
      case 'ytmp4':
    try {
      if (isBan) return m.reply(mess.banned);
          if (isBanChat) return m.reply(mess.bangc);
      if (!text) {
        m.reply('Enter YouTube Link or Search Query!');
        doReact("❌");
        return;
      }
  
      m.reply(mess.wait);
      await doReact("🕘");
  
      // Check if the input is a valid YouTube URL
      const isUrl = ytdl.validateURL(text);
  await doReact("⬇️");
      if (isUrl) {
        // If it's a URL, directly use ytdl-core for audio and video
        const videoStream = ytdl(text, { filter: 'audioandvideo', quality: 'highest' });
  
        const videoBuffer = [];
  
        videoStream.on('data', (chunk) => {
          videoBuffer.push(chunk);
        });
  
        videoStream.on('end', async () => {
          try {
            const finalVideoBuffer = Buffer.concat(videoBuffer);
  
            const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
            
  
            const captionText = `
  ╭═════════•∞•══╮
  │⿻ *GSS BOTWA*
  │  *Youtube Mp4 Player* ✨
  │⿻ *Title:* ${videoInfo.title}
  │⿻ *Duration:* ${videoInfo.duration}
  │⿻ *Author:* ${videoInfo.author.name}
  │⿻ *Size:* ${formatBytes(finalVideoBuffer.length)}
  │⿻ *Upload Date:* ${formatUploadDate(videoInfo.uploadDate)} 
  ╰══•∞•═════════╯
  `;
  
            await gss.sendMessage(m.chat, { video: finalVideoBuffer, mimetype: 'video/mp4', caption: captionText });
            await doReact("✅");
          } catch (err) {
            console.error('Error sending video:', err);
            m.reply('Error sending video.');
            await doReact("❌");
          }
        });
      } else {
        // If it's a search query, use yt-search for video
        const searchResult = await yts(text);
        const firstVideo = searchResult.videos[0];
  await doReact("⬇️");
        if (!firstVideo) {
          m.reply('Video not found.');
          await doReact("❌");
          return;
        }
  
        const videoStream = ytdl(firstVideo.url, { filter: 'audioandvideo', quality: 'highest' });
  
        const videoBuffer = [];
  
        videoStream.on('data', (chunk) => {
          videoBuffer.push(chunk);
        });
  
        videoStream.on('end', async () => {
          try {
            const finalVideoBuffer = Buffer.concat(videoBuffer);
  
            const captionText = `
  ╭═════════•∞•══╮
  │⿻ *GSS BOTWA*
  │  *Youtube Mp4 Player* ✨
  │⿻ *Title:* ${firstVideo.title}
  │⿻ *Duration:* ${firstVideo.duration}
  │⿻ *Author:* ${firstVideo.author.name}
  │⿻ *Size:* ${formatBytes(finalVideoBuffer.length)}  
  │⿻ *Upload Date:* ${formatUploadDate(firstVideo.uploadDate)}
  ╰══•∞•═════════╯
  `;
  
            await gss.sendMessage(m.chat, { video: finalVideoBuffer, mimetype: 'video/mp4', caption: captionText });
            await doReact("✅");
          } catch (err) {
            console.error('Error sending video:', err);
            m.reply('Error sending video.');
            await doReact("❌");
          }
        });
      }
    } catch (error) {
      console.error('Error during:', error);
      m.reply('Unexpected error occurred.');
      await doReact("❌");
    }
    break;



      
      
    


  

    case "gpt":
case "ai":
case "openai":
case "chatgpt":
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
        await doReact("❌");
        return m.reply(`*Berikan saya pertanyaan,* misalnya, "Siapa yang membuat chat GPT?"`);
    }

    try {
        const apiUrl = `https://api.bk9.site/ai/chatgpt4?q=${encodeURIComponent(text)}`;

        const res = await fetch(apiUrl);

        if (!res.ok) {
            return m.reply(`Respons tidak valid dari API. Kode status: ${res.status}`);
        }

        const data = await res.json();

        if (!data || !data.status || !data.BK9) {
            return m.reply("Format data tidak valid dalam respons API");
        }

        await gss.sendMessage(m.chat, {
            text: data.BK9,
            contextInfo: {
                externalAdReply: {
                    title: "Ekushi - GPT 3.5",
                    body: "",
                    mediaType: 1,
                    thumbnailUrl: "https://raw.githubusercontent.com/ExyXyz/ExyXy/main/Exy.jpg",
                    renderLargerThumbnail: false,
                    mediaUrl: "",
                    sourceUrl: "",
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        return m.reply("Terjadi kesalahan saat memproses permintaan.");
    }
    break;

      

  
case 'snapshot':
  case 'ssweb':
case 'ss':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) return m.reply("```Uhh Please, Give me Url!```");
    m.reply(mess.wait);
    let urll = `https://api.screenshotmachine.com/?key=f98cf1&url=${encodeURIComponent(text)}&dimension=1920x1080`;
    let media = await getBuffer(urll);
    return await gss.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return m.reply("```Error While Fetching Snapshot```");
  }
  break;

  case 'anime':
case 'animeinfo':
case 'af':
  try {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) return m.reply("❰ ❗️ ❱ *Nama anime nya mana?* 🔎");

    m.reply(mess.wait);

    let res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}`);
    if (!res.ok) throw await res.text();
    let json = await res.json();

    if (json.data.length === 0) {
      return m.reply("❰ ❗️ ❱ *Gak nemu anime yang judulnya gitu* 🔍");
    }

    let { title, title_japanese, title_english, episodes, source, duration, genres, studios, rating, score, aired, synopsis, mal_id } = json.data[0];
    let genre_list = genres.map(genre => genre.name).join(', ');
    let studio_list = studios.map(studio => studio.name).join(', ');
    let start_date = aired.from ? new Date(aired.from).toLocaleDateString() : "N/A";
    let end_date = aired.to ? new Date(aired.to).toLocaleDateString() : "N/A";

    // Split the synopsis into paragraphs
    let synopsisParagraphs = synopsis.split('\n').filter(paragraph => paragraph.trim() !== '');

    // Translate each paragraph individually
    let translatedParagraphs = await Promise.all(synopsisParagraphs.map(async paragraph => {
      if (paragraph.includes("[Written by MAL Rewrite]")) {
        return paragraph;
      }
      let translationRes = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=${encodeURIComponent(paragraph)}`);
      if (!translationRes.ok) throw await translationRes.text();
      let translationJson = await translationRes.json();
      return translationJson[0].map(sentence => sentence[0]).join(' ');
    }));

    let translatedSynopsis = translatedParagraphs.join('\n\n');

    let animeinfo = `✨️ *Title*: ${title}
🎌 *Japan*: ${title_japanese}
🏴 *English*: ${title_english || "N/A"}
🎆️ *Episode*: ${episodes} || ${json.data[0].type}
📑 *Source*: ${source}
🔁 *Duration*: ${duration}
🎗️ *Genre*: ${genre_list}
🎬 *Studio*: ${studio_list}
💌️ *Rating*: ${rating}
️❤️ *Score*: ${score}
📆 *Release*: ${start_date} - ${end_date}

*->Synopsis*: ${translatedSynopsis}
*URL*: ${json.data[0].url}`;

    await gss.sendMessage(m.chat, { image: { url: json.data[0].images.jpg.image_url }, caption: animeinfo }, { quoted: m });
  } catch (err) {
    return m.reply("```Error```");
  }
  break;


  
case 'imagine':
case 'dalle':
case 'aiimage':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) throw `*This command generates images from text prompts*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful anime girl*\n*◉ ${prefix + command} Elon Musk in pink output*`;

    try {
        m.reply('*Please wait, generating images...*');

        const endpoint = `https://rest-api.akuari.my.id/ai/bing-ai2?text=${encodeURIComponent(text)}`;
        console.log('Fetching from endpoint:', endpoint); // Add this line for logging
        const response = await fetch(endpoint);

        if (response.ok) {
            const imageBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(imageBuffer);
            await gss.sendMedia(m.chat, buffer, 'image.png', null, m);
        } else {
            console.error('Image generation failed. HTTP Status:', response.status); // Add this line for logging
            throw '*Image generation failed*';
        }
    } catch (error) {
        console.error('Error:', error); // Add this line for logging
        throw '*Oops! Something went wrong while generating images. Please try again later.*';
    }
    break;


  
case 'bug':
case 'request':
case 'report': {

    if (!text) return m.reply(`Example: ${prefix + command} hi dev play command is not working`);

    const messageId = m.key.id;

    if (reportedMessages[messageId]) {
        return m.reply("This report has already been forwarded to the owner. Please wait for a response.");
    }

    reportedMessages[messageId] = true;

    const textt = `*| REQUEST/BUG |*`;
    const teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*Request/Bug*: ${text}`;
    const teks2 = `\n\n*Hi ${pushname}, your request has been forwarded to my Owners.*\n*Please wait...*`;

    // Send the message to the first owner in the `owner` array
    gss.sendMessage(devlopernumber + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [m.sender],
    }, {
        quoted: m,
    });

    // Send a reply to the user
    m.reply("Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.");

    break;
}




case 'autoread':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
    global.autoread = true;
    m.reply('*Auto Read turned on.*');
  } else if (args[0] === 'off') {
    global.autoread = false;
    m.reply('*Auto Read turned off.*');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;

  
case 'alwaysonline':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
   global.available = true;
    m.reply('*Always Online turned on.*');
  } else if (args[0] === 'off') {
    global.available = false;
    m.reply('Always Online turned off.');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;


case 'autotyping':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
    global.autoTyping = true;
    m.reply('*AUTO TYPING turned on.*');
  } else if (args[0] === 'off') {
    global.autoTyping = false;
    m.reply('*AUTO TYPING turned off.*');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;
  


  
  
case 'gcsetting':
if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs')
    const options = ['.group', '.group', '.revoke', '.mute', '.leave', '.editinfo', '.tagall','.antilink', '.linkgc'];
    gss.sendPoll(m.chat, 'Select your preferences:', options);
    break;

case 'tagall':
case 'all': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
  if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs');

  // Message to display
  let teks = '@everyone';
  
  // Append invisible characters to avoid spam detection, if necessary
  let hiddenTeks = teks + '\u200B'.repeat(400); // 400 zero-width spaces

  gss.sendMessage(m.chat, { text: hiddenTeks, mentions: participants.map(a => a.id) }, { quoted: m });
} 
break;


case 'setting':
if (!isCreator) throw mess.owner
  m.reply(`Current Settings:
    Auto Read: ${autoread ? 'On' : 'Off'}
    Always Online: ${available ? 'On' : 'Off'}
    Auto Typing: ${autoTyping ? 'On' : 'Off'}`);

  // Delay for 2 seconds
  setTimeout(() => {
    const options = [
      '.Autoread',
      '.Alwaysonline',
      '.Autotyping',
      '.mode',
      '.Anticall',
    ];

    gss.sendPoll(m.chat, 'Select your preferences:', options);
  }, 2000);
  break;


case 'antitoxic': case 'antibadword': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
if (args[0] === "on") {
if (antiToxic) return m.reply('Already activated')
nttoxic.push(m.from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning on antitoxic in this group')
var groupe = await gss.groupMetadata(m.from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('Already deactivated')
let off = nttoxic.indexOf(m.from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning off antitoxic in this group')
} else {
  await m.reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  
  
case 'addbadword':{
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
if (args.length < 1) return m.reply('Whats the word?')
if (Badgss.includes(q)) return m.reply("The word is already in use")
Badgss.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(Badgss))
m.reply(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
if (args.length < 1) return m.reply('Enter the word')
if (!Badgss.includes(q)) return m.reply("The word does not exist in the database")
let wanu = Badgss.indexOf(q)
Badgss.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(Badgss))
m.reply(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of Badgss) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Badgss.length}*`
m.reply(teks)
}
break



case 'translate': case 'trt': {
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) return m.reply( 'Usage: .trt <language code> <text> or reply message');
    if (text && m.quoted && m.quoted.text) {
      let lang = text.slice(0, 2);
      try {
        let data = m.quoted.text;
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    } else if (text) {
      let lang = text.slice(0, 2);
      try {
        let data = text.substring(2).trim();
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    }
  } catch (error) {
    console.error("Error in 'translate' command:", error);
    m.reply(` An error occurred while translating.`);
  }
  break; // Case break statement
}

case 'readmore': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) return m.reply( 'give me text');

    const continuationMessage = `
    ${readmore}${text}`;

    m.reply(continuationMessage);
    break;
}

  
case 'poll': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
    if (!isAdmins) return m.reply('Tʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ, ᴏᴡɴᴇʀ ᴀɴᴅ ʙᴏᴛᴀᴅᴍɪɴ, ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜsᴇ ɪᴛ.')
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await m.reply(`Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|exy`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await gss.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
        
        
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
    if (!isAdmins) return m.reply('Tʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ, ᴏᴡɴᴇʀ ᴀɴᴅ ʙᴏᴛᴀᴅᴍɪɴ, ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜsᴇ ɪᴛ.')
gss.groupRevokeInvite(m.chat)
await m.reply('group link reset ')
}
break

case 'gdrive':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!args[0]) throw ' Eɴᴛᴇʀ ᴀ Gᴏᴏɢʟᴇ Dʀɪᴠᴇ ʟɪɴᴋ';
  try {
    let res = await fg.GDriveDl(args[0]);
    await m.reply(` *Google Drive DL* ▢ *Number:* ${res.fileName} ▢ *Size:* ${res.fileSize} ▢ *type:* ${res.mimetype}`);
    gss.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m });
  } catch {
    m.reply('Eʀʀᴏʀ: Cʜᴇᴄᴋ ᴛʜᴇ ʟɪɴᴋ ᴏʀ ᴛʀʏ ᴀɴᴏᴛʜᴇʀ ʟɪɴᴋ');
  }
  break;


function convertToFontStyle(text, style) {
    let styledText = '';

    if (fonts[style]) {
        for (const char of text) {
            styledText += fonts[style][char] || char;
        }
    } else {
        styledText = text;
    }

    return styledText;
}

case 'fontchange':
case 'fancy': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (args.length === 0) {
        const availableStylesPreview = availableStyles.map(style => {
            const previewText = convertToFontStyle("EKUSHI ☆", style);
            return `${style}: ${previewText}`;
        }).join('\n');

        m.reply(`Usage:\n${prefix}fontchange <style> <text>\nAvailable font styles with previews:\n${availableStylesPreview}`);
    } else {
        const style = parseInt(args[0]);

        if (isNaN(style) || style < 0 || style > 34) {
            m.reply(`Style number should be between 0 and 34. Please choose a valid style.`);
        } else {
            const inputText = args.slice(1).join(" ");
            const styledText = convertToFontStyle(inputText, style);


            m.reply(`${styledText}`);
        }
    }
}
break;

        

case 'runtime': case 'alive':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                let pinga = ` ${uptimeMessage}`
                gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/alive.jpg'),
        caption: pinga,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, {
      quoted: m
                })
                break

    

case 'addprem':
                if (!isCreator) return m.reply(mess.owner)
                if (args.length < 2)
                    return m.reply(`Usage:\n*#addprem* @tag tag\n*#addprem* tag time\n\nExample: #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    m.reply("Success Premium")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    m.reply("Success Via Number")
                }
            break
            case 'delprem':
                if (!isCreator) return m.reply(mess.owner)
                if (args.length < 1) return m.reply(`Usage :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium));
                    }
                    m.reply("Success Delete")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    m.reply("Success Via Number")
                }
            break
            case 'listprem': {
    if (!isCreator) return m.reply(mess.owner);
    let data = require("./src/data/premium.json");
    let txt = `*------「 LIST PREMIUM 」------*\n\n`;
    
    for (let premiumData of data) {
        txt += `Nomer : ${premiumData.id}\n`;
        txt += `Expired : ${premiumData.expired} Second\n\n`;
    }

    gss.sendMessage(m.chat, { text: txt }, { quoted: m });
}
break;

          

    case 'tempmail': {
        try {
          if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
            const apiEndpoint = 'https://tempmail.apinepdev.workers.dev/api/gen';
            
            // Make a request to the API to generate a temporary email
            const response = await fetch(apiEndpoint);
            const data = await response.json();

            if (!data || !data.email) {
                await doReact("❌");
                return m.reply("Failed to generate temporary email");
            }

            const generatedEmail = data.email;


            return m.reply(`Generated Temporary Email: ${generatedEmail}`);
        } catch (error) {
            console.error('Error during API request:', error);
            await doReact("❌");
            return m.reply('Unexpected error occurred during the request.');
        }
    }
    break;



          
        

case 'infobot':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    const tod = `
╭━──━─◈─━─━╮
│🔖 *Bot Name* : ${botname}
│🔖 *Owner Name* : ${ownername}
│🔖 *Owner Number* : ${owner}
│🔖 *Prefix* :「 . 」
│🔖 *Runtime* : _*${hours}h ${minutes}m ${seconds}s*_
│🔖 *TotalUser* : *${Object.keys(global.db.data.users).length} Users* 
│🔖 *TotalChat* : *${Object.keys(global.db.data.chats).length} Group/Chat*
╰━━─━─◈─━─━╯`;

    const pollOptions = ['.menu', '.ping'];

    gss.sendPoll(m.chat, tod, pollOptions);
    break;


case 'cal':
case 'calc':
case 'calculator':
case 'kalkulator':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    let id = m.chat;
    gss.math = gss.math ? gss.math : {};

    if (id in gss.math) {
      clearTimeout(gss.math[id][3]);
      delete gss.math[id];
      return m.reply('...');
    }

    let val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI.]/g, '') // Allow decimal point '.'
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-');

    let format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×');
    let result = (new Function('return ' + val))();

    if (isNaN(result)) throw new Error('Invalid result');

    m.reply(`*${format}* = _${result}_`);
  } catch (error) {
    // Handle specific error messages
    if (error instanceof SyntaxError) {
      return m.reply('Invalid syntax. Please check your expression.');
    } else if (error instanceof Error) {
      return m.reply(error.message);
    } else {
      // Handle unexpected errors
      return m.reply('An Ada yang error.');
    }
  }
  break;


function formatDate(date) {
}
case 'nowa':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    let regex = /x/g;
    if (!text) throw 'Give a number to search';
    if (!text.match(regex)) throw `*Example: ${prefix + command} 919142294xxx`;
    let random = text.match(regex).length, total = Math.pow(10, random), array = [];
    for (let i = 0; i < total; i++) {
        let list = [...i.toString().padStart(random, '0')];
        let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net';
        if (await gss.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
            let info = await gss.fetchStatus(result).catch(_ => {});
            array.push({ exists: true, jid: result, ...info });
        } else {
            array.push({ exists: false, jid: result });
        }
    }
    let txt = 'Registered\n\n' + array.filter(v => v.exists).map(v => `• Link: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'description'}\n*• set on:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*Not registered*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n');
    m.reply(txt);
    break;
    
case 'githubstalk': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!args[0]) return m.reply('Mention a GitHub username to stalk.');

  const username = args[0];

  try {
    // Fetch GitHub user data using Axios
    const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
    const userData = githubResponse.data;

    if (githubResponse.status !== 200) {
      return m.reply(`❌ GitHub user not found.`);
    }

    // Construct the response message
    let responseMessage = `🌟 *GitHub Profile - @${userData.login}*\n\n`;
    responseMessage += `  ◦  *Name*: ${userData.name || 'N/A'}\n`;
    responseMessage += `  ◦  *Username*: @${userData.login}\n`;
    responseMessage += `  ◦  *Bio*: ${userData.bio || 'N/A'}\n`;
    responseMessage += `  ◦  *ID*: ${userData.id}\n`;
    responseMessage += `  ◦  *Node ID*: ${userData.node_id}\n`;
    responseMessage += `  ◦  *Profile URL*: ${userData.avatar_url}\n`;
    responseMessage += `  ◦  *GitHub URL*: ${userData.html_url}\n`;
    responseMessage += `  ◦  *Type*: ${userData.type}\n`;
    responseMessage += `  ◦  *Admin*: ${userData.site_admin ? 'Yes' : 'No'}\n`;
    responseMessage += `  ◦  *Company*: ${userData.company || 'N/A'}\n`;
    responseMessage += `  ◦  *Blog*: ${userData.blog || 'N/A'}\n`;
    responseMessage += `  ◦  *Location*: ${userData.location || 'N/A'}\n`;
    responseMessage += `  ◦  *Email*: ${userData.email || 'N/A'}\n`;
    responseMessage += `  ◦  *Public Repositories*: ${userData.public_repos}\n`;
    responseMessage += `  ◦  *Public Gists*: ${userData.public_gists}\n`;
    responseMessage += `  ◦  *Followers*: ${userData.followers}\n`;
    responseMessage += `  ◦  *Following*: ${userData.following}\n`;
    responseMessage += `  ◦  *Created At*: ${userData.created_at}\n`;
    responseMessage += `  ◦  *Updated At*: ${userData.updated_at}\n`;

   
 const githubReposData = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=stargazers_count&direction=desc`);
    const reposData = await githubReposData.json();

    if (reposData.length > 0) {
      const topRepos = reposData.slice(0, 5); // Display the top 5 starred repositories

      const reposList = topRepos.map(repo => {
        return `  ◦  *Repository*: [${repo.name}](${repo.html_url})
  ◦  *Description*: ${repo.description || 'N/A'}
  ◦  *Stars*: ${repo.stargazers_count}
  ◦  *Forks*: ${repo.forks}`;
      });

      const reposCaption = `📚 *Top Starred Repositories*\n\n${reposList.join('\n\n')}`;
      responseMessage += `\n\n${reposCaption}`;
    } else {
      responseMessage += `\n\nNo public repositories found.`;
    }

    // Send the message with the updated caption and user's avatar
    await gss.sendMessage(m.chat, { image: { url: userData.avatar_url }, caption: responseMessage }, { quoted: m });

    // Add a success reaction message
    const successReactionMessage = {
      react: {
        text: "✔",
        key: m.key
      }
    };
    await gss.sendMessage(m.chat, successReactionMessage);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    await gss.sendMessage(m.chat, 'An error occurred while fetching GitHub data.', { quoted: m });
  }
  break;
}

    break;
    
case 'emojimix': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  let [emoji1, emoji2] = text.split`+`;
  if (!emoji1) throw `Contoh: ${prefix + command} 😅+🤔`;
  if (!emoji2) throw `Contoh: ${prefix + command} 😅+🤔`;
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
  for (let res of anu.results) {
    let encmedia = await gss.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags });
    await fs.unlinkSync(encmedia);
  }
}
break;





case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await gss.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                gss.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
                



    case 'getemailmessages': case 'checkmail': {
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!text) {
            await doReact("❌");
            return m.reply(`*Provide me tempmail for view inbox*`);
        }

        const email = encodeURIComponent(text);
        const apiEndpoint = `https://tempmail.apinepdev.workers.dev/api/getmessage?email=${email}`;

        try {
            const response = await fetch(apiEndpoint);

            if (!response.ok) {
                await doReact("❌");
                return m.reply(`Invalid response from the API. Status code: ${response.status}`);
            }

            const data = await response.json();

            if (!data || !data.messages) {
                await doReact("❌");
                return m.reply('Failed to retrieve email messages');
            }

            const messages = data.messages;

            for (const message of messages) {
                const sender = message.sender;
                const subject = message.subject;
                const date = new Date(JSON.parse(message.message).date).toLocaleString();
                const messageBody = JSON.parse(message.message).body;

                const replyMessage = `Sender: ${sender}\nSubject: ${subject}\nDate: ${date}\nMessage: ${messageBody}`;

                await m.reply(replyMessage);
            }
        } catch (error) {
            console.error('Error during API request:', error);
            await doReact("❌");
            return m.reply('Unexpected error occurred during the request.');
        }
    }
    break;

case 'menu':
case 'help':
case 'list':
case 'listmenu':
{
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    gss.sendPoll(m.chat, "List Menu", ['.AllMenu', '.GroupMenu', '.DownloadMenu', '.SearchMenu', '.NsfwMenu', '.FunMenu', '.ToolMenu', '.ConvertMenu', '.AiMenu', '.MainMenu', '.OwnerMenu'], { quoted: m });
}
break;

            

function getRandomSymbol() {
    const symbols = ['◉', '★', '◎', '✯','✯','✰','◬','✵','✦']; // Add more symbols as needed
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}
function getRandomFontStyle() {
  const availableFontStyles = Object.keys(menufont);
  const randomIndex = Math.floor(Math.random() * availableFontStyles.length);
  return availableFontStyles[randomIndex];
}

const randomSymbol = getRandomSymbol();

case 'menuall':
case 'allmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    await doReact("📁");
    let a = db.data.users[m.sender];
    let introText = `
╭──═❮ *EKUSHI ☆* ❯═─┈•
│ Hi \`${pushname}\` ☆  
╰–❖ *${greetingTime}* ☆ 

╭──═❮ *Bot Info* ❯═─┈•
│ *Bot Name* : *${botname}*
│ *Owner Name* : *${ownername}*
│ *Prefix* :  *[ . ]*
│ *Uptime* : *${hours}h ${minutes}m ${seconds}s*
│ *Mode* : *Public*
│ *Total User* : *${Object.keys(global.db.data.users).length} Users* 
│ *Total Chat* : *${Object.keys(global.db.data.chats).length} Group/Chat*
╰────────────────❃ 
╭──═❮ *Users Info* ❯═─┈•
│ *Name* : *${pushname}*
│ *Number* : *${m.sender.split('@')[0]}*
│ *Ganteng | Cantik* : *${isPremium ? '✅' : '❌'}* ${readmore}
╰────────────────❃ `;

    const randomFontStyle = getRandomFontStyle();
    const randomSymbol = getRandomSymbol();

    let cmdList = cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    
    introText += `
╭───〈 𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdTool.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗔𝗜 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗢𝗪𝗡𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪`;

cmdList = cmdNsfw.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
introText += `
╭───〈 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪`;

cmdList = cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗦𝗧𝗔𝗟𝗞 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪`;

    cmdList = cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗦𝗘𝗔𝗥𝗖𝗛 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    if (typemenu === 'v1') {
        gss.sendMessage(m.chat, {
            image: fs.readFileSync('./menuimage/allmenu.jpg'),
            caption: introText,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    title: botname,
                    sourceUrl: global.link,
                    body: `Bot Created By ${global.owner}`
                }
            }
        }, {
            quoted: m
        });
    } else if (typemenu === 'v2') {
        gss.sendMessage(m.chat, {
            text: introText,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    title: botname,
                    sourceUrl: global.link,
                    body: `Bot Created By ${global.owner}`
                }
            }
        }, {
            quoted: m
        });
    } else if (typemenu === 'v3') {
        gss.sendMessage(m.chat, {
            video: fs.readFileSync('./gss.mp4'),
            caption: introText,
            sourceUrl: global.link,
            gifPlayback: true
        }, {
            quoted: m
        });
    } else if (typemenu === 'v4') {
        gss.relayMessage(m.chat, {
            scheduledCallCreationMessage: {
                callType: "AUDIO",
                scheduledTimestampMs: 1200,
                title: introText
            }
        }, {});
    } else if (typemenu === 'v5') {
        gss.relayMessage(m.chat, {
            requestPaymentMessage: {
                currencyCodeIso4217: 'INR', 
                amount1000: '9999999', 
                requestFrom: m.sender,
                noteMessage: {
                    extendedTextMessage: {
                        text: introText,
                        sourceUrl: global.link,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: false
                            }
                        }
                    }
                }
            }
        }, {});
    }
    break;
}




// Modify your gcmenu code
case 'gcmenu':
case 'grupmenu':
case 'groupmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  const randomFontStyle = getRandomFontStyle();
  const randomSymbol = getRandomSymbol();
  
  await doReact("📁");
  
  const cmdList = cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');

  const introText = `
╭───〈 *𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨* 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

  await gss.sendMessage(m.chat, {
    image: fs.readFileSync('./menuimage/menu.jpg'),
    caption: introText,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: botname,
        sourceUrl: global.link,
        body: `Bot Created By ${global.owner}`
      }
    }
  }, { quoted: m });
}
break;




            case 'downloadmenu':
case 'dlmenu':
case 'downmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("⬇️");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥* 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/download.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;


case 'neko':
  try {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);

    let res = await fetch('https://api.waifu.pics/sfw/neko');
    if (!res.ok) throw await res.text();
    let json = await res.json();
    if (!json.url) throw 'Error!';

    await gss.sendMessage(m.chat, { image: { url: json.url }, caption: 'SFW NEKO' }, { quoted: m });
  } catch (err) {
    return m.reply("```Error While Fetching Neko Image```");
  }
  break;


  let nsfwEnabled = true;

// NNeko command
case 'nsfw': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose NSFW Setting:", [`${prefix}nsfw on`, `${prefix}nsfw off`]);
  } else {
    const nsfwSetting = args[0].toLowerCase();
    if (nsfwSetting === "on") {
      if (db.data.chats[m.chat]?.nsfwEnabled) return m.reply(`NSFW commands are already active`);
      db.data.chats[m.chat] = { ...db.data.chats[m.chat], nsfwEnabled: true };
      m.reply(`NSFW commands activated!`);
    } else if (nsfwSetting === "off") {
      if (!db.data.chats[m.chat]?.nsfwEnabled) return m.reply(`NSFW commands are already inactive`);
      db.data.chats[m.chat] = { ...db.data.chats[m.chat], nsfwEnabled: false };
      m.reply(`NSFW commands deactivated!`);
    } else {
      gss.sendPoll(m.chat, "Choose NSFW Setting:", [`${prefix}nsfw on`, `${prefix}nsfw off`]);
    }
  }
}
break;


case 'nhentai':
case 'nh': {
  try {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);

    // Extract query text from the message
    let queryText = text.trim();

    // Check if queryText is empty
    if (!queryText) {
      return m.reply('mana code/link nhentai nya?');
    }

    // Extract the code from the link if it's a URL
    const nhentaiLinkRegex = /https:\/\/nhentai\.net\/g\/(\d{6})\//;
    const match = queryText.match(nhentaiLinkRegex);
    if (match) {
      queryText = match[1]; // Extract the code (6 digits)
            m.reply(mess.wait);
    }

    // Fetch data from the API
    let response = await fetch(`https://api.lolhuman.xyz/api/nhentai/${queryText}?apikey=GataDiosV2`);
    let data = await response.json();

    if (data.status === 200) {
      let anu = data.result.image;

      if (anu.length > 0) {
        const pdfDoc = await PDFDocument.create();
        for (const imageUrl of anu) {
          const imageBytes = await fetch(imageUrl).then(res => res.arrayBuffer());
          const image = await pdfDoc.embedJpg(imageBytes);
          const page = pdfDoc.addPage([image.width, image.height]);
          page.drawImage(image, {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height
          });
        }

        const pdfBytes = await pdfDoc.save();
        const pdfFileName = `${queryText.replace(/\s+/g, '_')}.pdf`;
        const pdfPath = path.join(__dirname, 'pdfs', pdfFileName);
        fs.writeFileSync(pdfPath, pdfBytes);

        const pdfBuffer = fs.readFileSync(pdfPath);
        const pdfMessage = {
          document: pdfBuffer,
          mimetype: 'application/pdf',
          fileName: pdfFileName,
          fileLength: pdfBuffer.length,
        };

        await gss.sendMessage(m.chat, pdfMessage, { quoted: m });

        // Delete the PDF file after sending it
        fs.unlinkSync(pdfPath);
      } else {
        console.log('Error: No images found in nhentai results.');
        m.reply('Error: No images found in nhentai results.');
      }
    } else {
      m.reply('Error: API returned an error.');
    }
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while processing your request.');
  }
  break;
}


case 'nneko':
    case 'nsfwneko':
      try {
        if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!db.data.chats[m.chat]?.nsfwEnabled) return m.reply('NSFW commands are currently disabled.');

        m.reply(mess.wait);
    
        // Extract the number of images from the command
        const numImages = parseInt(text.match(/#(\d+)/)?.[1]) || 1; // Default to 1 if no number is specified
        if (numImages <= 0) return m.reply('Please specify a positive number of images.');
    
        let imageUrls = [];
        
        for (let i = 0; i < numImages; i++) {
          let res = await fetch('https://api.waifu.pics/nsfw/neko');
          if (!res.ok) throw await res.text();
          let json = await res.json();
          if (!json.url) throw 'Error!';
          imageUrls.push(json.url);
        }
    
        if (imageUrls.length > 0) {
          const createImage = async (url) => {
            const { imageMessage } = await generateWAMessageContent({ image: { url }, jpegThumbnail: "" }, { upload: gss.waUploadToServer });
            return imageMessage;
          }
    
          const cards = [];
          for (const imageUrl of imageUrls) {
            const imageMessage = await createImage(imageUrl);
            cards.push({
              header: { hasMediaAttachment: true, imageMessage },
              nativeFlowMessage: {}
            });
          }
    
          const { message, key } = generateWAMessageFromContent(m.chat, {
            interactiveMessage: {
              body: { text: `NSFW WARNING 🔞` },
              footer: { text: "EKUSHI ☆" },
              carouselMessage: { cards }
            }
          }, { quoted: m });
    
          await gss.relayMessage(m.chat, { viewOnceMessage: { message } }, { messageId: key.id });
        }
    
      } catch (err) {
        console.error('Error fetching NSFW NEKO images:', err);
        return m.reply("```Error While Fetching NSFW NEKO Images```");
      }
      break;

  case 'bj':
    case 'blowjob':
      try {
        if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!db.data.chats[m.chat]?.nsfwEnabled) return m.reply('NSFW commands are currently disabled.');

        m.reply(mess.wait);
    
        // Extract the number of images from the command
        const numImages = parseInt(text.match(/#(\d+)/)?.[1]) || 1; // Default to 1 if no number is specified
        if (numImages <= 0) return m.reply('Please specify a positive number of images.');
    
        let imageUrls = [];
        
        for (let i = 0; i < numImages; i++) {
          let res = await fetch('https://api.waifu.pics/nsfw/blowjob');
          if (!res.ok) throw await res.text();
          let json = await res.json();
          if (!json.url) throw 'Error!';
          imageUrls.push(json.url);
        }
    
        if (imageUrls.length > 0) {
          const createImage = async (url) => {
            const { imageMessage } = await generateWAMessageContent({ image: { url }, jpegThumbnail: "" }, { upload: gss.waUploadToServer });
            return imageMessage;
          }
    
          const cards = [];
          for (const imageUrl of imageUrls) {
            const imageMessage = await createImage(imageUrl);
            cards.push({
              header: { hasMediaAttachment: true, imageMessage },
              nativeFlowMessage: {}
            });
          }
    
          const { message, key } = generateWAMessageFromContent(m.chat, {
            interactiveMessage: {
              body: { text: `NSFW WARNING 🔞` },
              footer: { text: "EKUSHI ☆" },
              carouselMessage: { cards }
            }
          }, { quoted: m });
    
          await gss.relayMessage(m.chat, { viewOnceMessage: { message } }, { messageId: key.id });
        }
    
      } catch (err) {
        console.error('Error fetching NSFW BJ images:', err);
        return m.reply("```Error While Fetching NSFW BJ Images```");
      }
      break;
    

      case 'nwaifu':
          try {
            if (isBan) return m.reply(mess.banned);
            if (isBanChat) return m.reply(mess.bangc);
            if (!db.data.chats[m.chat]?.nsfwEnabled) return m.reply('NSFW commands are currently disabled.');
    
            m.reply(mess.wait);
        
            // Extract the number of images from the command
            const numImages = parseInt(text.match(/#(\d+)/)?.[1]) || 1; // Default to 1 if no number is specified
            if (numImages <= 0) return m.reply('Please specify a positive number of images.');
        
            let imageUrls = [];
            
            for (let i = 0; i < numImages; i++) {
              let res = await fetch('https://api.waifu.pics/nsfw/waifu');
              if (!res.ok) throw await res.text();
              let json = await res.json();
              if (!json.url) throw 'Error!';
              imageUrls.push(json.url);
            }
        
            if (imageUrls.length > 0) {
              const createImage = async (url) => {
                const { imageMessage } = await generateWAMessageContent({ image: { url }, jpegThumbnail: "" }, { upload: gss.waUploadToServer });
                return imageMessage;
              }
        
              const cards = [];
              for (const imageUrl of imageUrls) {
                const imageMessage = await createImage(imageUrl);
                cards.push({
                  header: { hasMediaAttachment: true, imageMessage },
                  nativeFlowMessage: {}
                });
              }
        
              const { message, key } = generateWAMessageFromContent(m.chat, {
                interactiveMessage: {
                  body: { text: `NSFW WARNING 🔞` },
                  footer: { text: "EKUSHI ☆" },
                  carouselMessage: { cards }
                }
              }, { quoted: m });
        
              await gss.relayMessage(m.chat, { viewOnceMessage: { message } }, { messageId: key.id });
            }
        
          } catch (err) {
            console.error('Error fetching NSFW WAIFU images:', err);
            return m.reply("```Error While Fetching NSFW WAIFU Images```");
          }
          break;

  
  

case 'searchmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("🔍");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗦𝗘𝗔𝗥𝗖𝗛 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/searchmenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'funmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/fun.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'nsfwmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("🔞");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdNsfw.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/fun.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'convertmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/menu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'mainmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/mainmenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'ownermenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗢𝗪𝗡𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/menu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'aimenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗔𝗜 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/aimenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;



case 'toolmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdTool.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/tool.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;


            
            default:
		
        }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

process.on('unhandledRejection', (error) => {
  if (error.message.includes('rate-overlimit')) {
      console.log('Rate limit error detected. Exiting...');
      process.exit(1);
  } else {
      console.error('Unhandled rejection:', error);
      process.exit(1);
  }
});

// gss.js

// Define your query function here
async function query() {
  // Implementation of your query function
  // This should return a promise
  // Example:
  return new Promise((resolve, reject) => {
      // Simulate a query operation
      setTimeout(() => {
          // Simulate success or failure
          const success = Math.random() > 0.2; // 80% chance of success
          if (success) {
              resolve('Query successful');
          } else {
              reject(new Error('rate-overlimit')); // Simulate rate limit error
          }
      }, 1000);
  });
}

process.on('unhandledRejection', (error) => {
  if (error.message.includes('rate-overlimit')) {
      console.log('Rate limit error detected. Exiting...');
      process.exit(1);
  } else {
      console.error('Unhandled rejection:', error);
      process.exit(1);
  }
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function makeRequestWithRetry(queryFunction, maxRetries = 5, retryDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
          return await queryFunction();
      } catch (error) {
          if (error.message.includes('rate-overlimit') && attempt < maxRetries) {
              console.log(`Rate limit hit. Retrying in ${retryDelay}ms...`);
              await delay(retryDelay);
          } else {
              throw error;
          }
      }
  }
}

async function runApp() {
  try {
      const response = await makeRequestWithRetry(query);
      console.log('Request succeeded:', response);
      // Place your main functionality here
      // For example:
      console.log('Running main functionality...');
      // Your main app logic
  } catch (error) {
      console.error('Request failed:', error);
  }
}

// Start the application by calling runApp
runApp();


