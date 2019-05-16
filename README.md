# Automação end-to-end com puppeteer e jest

O Puppeteer, criado pelo pessoal do Google, é uma biblioteca do node que fornece uma API de alto nível para controlar o Chrome e Chromium, através do protocolo DevTools. 
Ele é escrito em JavaScript e é super fácil de ser utilizado.
Já o Jest é um framewoork de teste, criado pelo Facebook e escrito também em JavaScript. Ele tem total foco na simplicidade.

## Para utilizar esse projeto

Após clonar o repositório, na pasta do projeto você escreverá o seguinte comando:

'''
npm install

'''

Com isso todas as bibliotecas node que utilizei nesse projeto serão inseridas novamente na pasta do seu.
Obs: Preste atenção, que será necessário criar pastas para guardar os dados da automação, elas serão a pasta: json, pdfs e screenshots.

## Como rodar a automação no puppeteer?

    - Acesse o cmd no seu repositório e escreva:

    '''
    node node_do_projeto.js

    '''

## Como rodar o teste no Jest?

    - Acesse o cmd no seu repositório e escreva:

    '''
    npm run test

    '''

## Caso você queira fazer um projeto do zero

    -Antes de tudo você precisa ter o node instalado na sua máquina. Você encontra ele nesse site:
     [Node](https://nodejs.org/en/).

    -Depois disso, é só seguir os passos abaixo.
 
### Instalar o Puppeteer

    - Na pasta do seu repositório, digite o comando:
    
    '''
    npm i puppeteer

    '''
### Instalar o Jest
    
    Digite o seguinte comando:
    
    '''
    npm install --save-dev jest

    '''
    Gere o package.json:

    '''
    npm init –y

    '''
    Dentro do package.json, insira:

    '''
    "scripts": { "test": "jest" }

    '''

    

