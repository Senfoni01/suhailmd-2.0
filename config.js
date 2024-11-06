const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50931115284";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_46_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgODEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI4LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXT0lZVWV4OHA0T000TFFIaDBjRHg0MnJjcWhIT0NZR2FWVUdZVXl1c21nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRc3NGaVlJc1JfcUF6emNQcWNHOUV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRkYzVkZGIyLTVjOGMtNDFjZS04ZWFjLTcwY2IzYmQ5OTI3M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAzOSxcbiAgICAgIDE3NixcbiAgICAgIDIxNSxcbiAgICAgIDE2NSxcbiAgICAgIDM2LFxuICAgICAgNTYsXG4gICAgICA1MSxcbiAgICAgIDQxLFxuICAgICAgMTYwLFxuICAgICAgMTYwLFxuICAgICAgODIsXG4gICAgICAzNixcbiAgICAgIDEyLFxuICAgICAgNTIsXG4gICAgICAxNDcsXG4gICAgICAxMyxcbiAgICAgIDE1NCxcbiAgICAgIDMyLFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDM2LFxuICAgICAgOTYsXG4gICAgICAxMzYsXG4gICAgICAyNDYsXG4gICAgICA5LFxuICAgICAgODMsXG4gICAgICA1NixcbiAgICAgIDEwMCxcbiAgICAgIDU5LFxuICAgICAgNyxcbiAgICAgIDE0NCxcbiAgICAgIDYsXG4gICAgICAxODMsXG4gICAgICA3MixcbiAgICAgIDIyNSxcbiAgICAgIDg0LFxuICAgICAgMTczLFxuICAgICAgMTYwLFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEMxQVFZQVBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTMxMTE1Mjg0OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDQ2MTE5MzQ3NDg3Mzg6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnV6MTdNSEVOeXdxN2tHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvWStiZ25ZdlhnK1NRN1VDYnB3WG8zbnFXbTVTSWloaUJQcnRBVWlvWjJFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkE2emtBZk9tSGw5aTFmTHplMzJoSlVWUmhNLzQvSExCdGc0NmY0bUtPc2NvVzc3dHRXMDFSRUVGMEd4dFlNaWhoWmdEZkNKWTluK3FZa1ZMdlRNTEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk83d0Z4aG5nemtPcGZGci9Db2I4YW9pand4cVN6bDU1Z2ZCLys3QW9UYnRZYkkrdm05SHkyVkZJM0x2RWdGK2xXS29xRXBCYmltQy9jVGJZSjZKNWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTMxMTE1Mjg0OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODYxMTUyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "•",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
