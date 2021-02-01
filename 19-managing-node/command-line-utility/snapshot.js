#!/usr/bin/env node
const program = require('commander');
const puppeteer = require('puppeteer');

program
  .version('0.0.1')
  .option('-s, --source [website]', 'Source website')
  .option('-f, --file [filename]', 'Filename')
  .parse(process.argv);

(async () => {
  console.log('capturing screenshot...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(program.source);
  await page.screenshot({ path: program.file });
  await browser.close();
  console.log(`captured screenshot at ${program.file}`);
})();
