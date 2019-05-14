//carrego o puppeteer
const puppeteer = require('puppeteer');


let team = async () => {   
   
    //cria um instancia do browser
    const browser = await puppeteer.launch();

    //cria uma pagina dentro do browser
    const page = await  browser.newPage();

    //navega para o website
    await page.goto('https://scrapethissite.com/');
    
    //clica no elemento
    await page.click('#hero > div > div > div > a.btn.btn-lg.btn-default');

    const pagina = '#pages > section > div > div > div > div:nth-child(4) > h3 > a';
    
    //acessar a página de nome Hockey Teams
    await page.click(pagina);

    //coletando os dados da tabela
    const teams = await page.evaluate(() => {
        const grabFromRow = (row, classname) => row.querySelector(classname).innerText.trim() 
        
        //guardamos os dados em um array
        const data = []

        //coleto todos os times que estão nas linhas
        const teamRows = document.querySelectorAll('tr.team');

        //crio um loop para criar os objetos dentro do array
        for (const td of teamRows) {
            data.push({
                name: grabFromRow(td, 'td.name'),
                year: grabFromRow(td, 'td.year'),
                wins: grabFromRow(td, 'td.wins'),
                losses: grabFromRow(td, 'td.losses')
            })
        }
        return data    
    })

    //converte os dados para json
    console.log(JSON.stringify(teams, null, 2));

    //salva os dados como um Json
    const fs = require('fs')

    fs.writeFile(
        '../json/teams.json',
       JSON.stringify(teams, null, 2),
       (err) => err ? console.error('Os dados não foram escritos!', err) : console.log('Os dados foram escritos no json!')
      )


    //tira um screenshot e salva na pasta de screenshots
    await page.screenshot({
        path: '../screenshots/test4.png'
    })

    //armazena os dados em  um pdf
    await page.pdf({ 
        path: '../pdfs/teste3.pdf'
    })
    
    //fecha o browser
    await browser.close();

}

team();



