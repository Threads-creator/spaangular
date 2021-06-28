# Spaangular

Projeto utiliza [Angular CLI](https://github.com/angular/angular-cli) versão 8.3.29 e um banco de dados com Json-Server. A aplicação exibe uma tabela com carros cadastrados e permite a visualização e modificação das informações de cada carro. Também é possível remover carros do banco de dados.

![DashBoard](https://github.com/Threads-creator/spaangular/blob/main/spaangular_dash1.png)

![EditarCarro](https://github.com/Threads-creator/spaangular/blob/main/spaangular_dash2.png)

## Json-Server

O arquivo do banco de dados é identificado por **"db.json"** na pasta do projeto .

## Partes do projeto

Inicialmente foi definido um módulo para cada página exibida na interface. Como o projeto possui apenas uma página, existe apenas um módulo principal importado na raiz do projeto. 

## Execução

Para utilizar o projeto, vc deve:
- Instalar as dependências do angular através de **npm install**;
- Iniciar o json-server através do comando **"npx json-server db.json"**;
- Por último inicialise a aplicação com **npm start**;
