const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk')

const url = 'https://www.apple.com/';
const log = console.log;


request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    let getPhoneNum = $('.nowrap').text().split(' ');
  
    getPhoneNum = getPhoneNum[4];
    
    let phoneNum = getPhoneNum.substring(0, getPhoneNum.length - 1);
    
    log(chalk.yellow.bold.underline(phoneNum));
  }
});