#!/usr/bin/env node

require('axios').get('https://twitter.com/dril').then(({ data }) => { console.log(require('cheerio').load(data)('.tweet[data-screen-name="dril"]').eq(1).find('.tweet-text').html().replace(/&quot;/g, '"')); });
