// const { spreadsheet } = require('./spreadsheet');
module.exports = (on) => {

  on('before:browser:launch', (browser = {}, launchOptions) => {

    if (browser.name === 'chrome') {

      launchOptions.args.push('--auto-open-devtools-for-tabs');

      return launchOptions;
    }

  });

};