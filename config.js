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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348069363347";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_22_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICA2MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDczLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNixcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICA2MyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQwLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpLzI0WGJEcVF1am9MM0IwNmNsQWN0WlN0OUM3REdmbk5HZWNrU3pIaVhVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfenpmMXU3a1NzbUtIVkZUNkRVWFB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzM2Y3NDY0LWY0ZmMtNDFhNC1hNWUzLWNkY2I2NDlkMzE4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDkyLFxuICAgICAgMTQsXG4gICAgICA4MSxcbiAgICAgIDQ1LFxuICAgICAgMTcxLFxuICAgICAgNTksXG4gICAgICAxMzcsXG4gICAgICAxNTgsXG4gICAgICAxODgsXG4gICAgICAyMyxcbiAgICAgIDIxNixcbiAgICAgIDE4OSxcbiAgICAgIDE1LFxuICAgICAgMjI3LFxuICAgICAgMjQzLFxuICAgICAgMTkzLFxuICAgICAgMTk1LFxuICAgICAgMTkwLFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTUzLFxuICAgICAgNDAsXG4gICAgICA3NCxcbiAgICAgIDEwMyxcbiAgICAgIDE0NSxcbiAgICAgIDE3MixcbiAgICAgIDE5LFxuICAgICAgMTAxLFxuICAgICAgMzUsXG4gICAgICAyNDcsXG4gICAgICAxMjAsXG4gICAgICAxNTQsXG4gICAgICAyMjQsXG4gICAgICA3NixcbiAgICAgIDQxLFxuICAgICAgMTQ4LFxuICAgICAgMTcyLFxuICAgICAgMTY2LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNGMVI3NFM1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY5MzYzMzQ3OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzU4NzU2OTQ4MTc0MTI6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS8vdXRVRkVLN0p6TG9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKZW9ZTXh5TGU3bFJoQ3lWRHhxNkZlMWZuV25XVi81UENBUUFmVCt4NUQwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInQ1SVNIY205SStmdWlaMDE2MDgybkFaaEhHMFVLUHphUFppOUVLalFUWDFsa0NyV1Rvcys3WVo3eUZ1SDVFb3poYWtDUmd0N1FrNUt3M1JUNmYwdkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImswKy9CSk80OHdnMnNVUDBZbDF3SzZxYUZqRFkvQWZ5S2k1YkRUZlBtc2cwVW4zRkdHRERFSzVBOUYwbnl0UUhYVTZ6WGpHTjdQN3BDRXlCS09uMkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjkzNjMzNDc6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTAyMTMwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
