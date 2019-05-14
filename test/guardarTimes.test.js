const puppeteer = require('puppeteer');

jest.setTimeout(120000);

let page;
let browser;

beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80
    });
    page = await browser.newPage();
    await page.setViewport({ width:1280, height:800 });
    await page.goto('https://scrapethissite.com/');

  });
    
describe('Verificar o nome do site', () => {

    test("verifica se o título do site está correto", async () => {
        const title = await page.title();
        expect(title).toBe("Scrape This Site | A public sandbox for learning web scraping")

    })

    test("verifica se o nome do primeiro time é Boston Bruins", async () => {
      const button = '#hero > div > div > div > a.btn.btn-lg.btn-default';
      await page.click(button)

      const pagina = '#pages > section > div > div > div > div:nth-child(4) > h3 > a';
      await page.click(pagina)

      await page.type('#q', 'Boston')
      await page.click('#hockey > div > div.row.search-area > div > form > input.btn.btn-primary')
      const primeiro = await page.$('#hockey > div > table > tbody > tr:nth-child(2)')

      const teams = await page.evaluate(() => {
        const grabFirstRow = document.getElementsByClassName("name")[0].innerText 
        return grabFirstRow


      })

      expect(teams).toBe("Boston Bruins")
      expect(primeiro).toBeTruthy()



  })

});

afterAll(() => {
  browser.close();
});