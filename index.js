const request = require('request');
const cheerio = require('cheerio');

request('https://www.apple.com/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    let getPhoneNum = $('.nowrap').text().split(' ');
  
    getPhoneNum = getPhoneNum[3];
    
    let phoneNum = getPhoneNum.substring(0, getPhoneNum.length - 1);
    
    console.log(phoneNum);
  }
});