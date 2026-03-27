const fs = require('fs');
const buf = fs.readFileSync('C:/Users/Aspire 5 12450H/OneDrive/Desktop/PROJECTS/Portfolio/client/src/assets/certificates/de2df7a9-4652-48d7-bfc5-caa1cc20cb57.pdf');
const str = buf.toString('binary');
const matches = str.match(/[a-zA-Z0-9\s\.\-]{8,}/g);
console.log(matches.filter(m => m.trim().length > 6).slice(0, 100).join("\n"));
