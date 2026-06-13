const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(__dirname, 'index.html'), { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'CV_AssieChrist_updated.pdf',
    format: 'A4',
    printBackground: true,
  });
  await browser.close();
  console.log('PDF généré.');
})();
