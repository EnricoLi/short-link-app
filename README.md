# short-link-app

<h1 align="center">
      <a href="https://shlz.herokuapp.com/" alt="site do short link"> Short Link APP </a>
</h1>

<h3 align="center">
      Aplicativo para encurtar os links. Feito como projeto didático, para demonstrar conhecimento.
</h3>

<h4 align="center">
	🚧  Em Construção 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
     * [WebSite](#user-content-website--react----typescript)
     * [Server](#user-content-server--nodejs----typescript)
   * [Contribuidores](#-contribuidores)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

  Short Link APP - é uma aplicação para encurtar links gratuitamente. 


Projeto desenvolvido do zero, com uma interface simples focando mais nas funcionalidades do back-end.

---

## ⚙️ Funcionalidades

- [x] Inserir o link original para obter um novo link encurtado.

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta server) 
2. Frontend (pasta client)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
Também irá precisar de uma conexão com o banco de dados em nuvem, MongoDB que vai gerar uma chave de conexão que deve ser atribuida a variavel de ambiente DB no código.

#### 🎲 Rodando a aplicação (Frontend e Backend)

```bash

# Clone este repositório
$ git clone https://github.com/EnricoLi/short-link-app.git

# Acesse a pasta do projeto no terminal/cmd
$ cd short-link-app

# Execute o comando build
$ npm run build

# Execute o comando start
$ npm start

# O servidor inciará na porta:4000 - acesse http://localhost:4000 

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/))

> Veja o arquivo  [package.json](https://github.com/EnricoLi/short-link-app/blob/main/client/package.json)


#### [](https://github.com/EnricoLi/short-link-app#server-nodejs)**Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[mongoose](https://mongoosejs.com/)**

> Veja o arquivo  [package.json](https://github.com/EnricoLi/short-link-app/blob/main/server/package.json)

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🦸 Autor

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87574717?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Thiago Marinho</b></sub>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Enrico-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/enricolima/)](https://www.linkedin.com/in/enricolima/) 
[![Gmail Badge](https://img.shields.io/badge/-enricolima.eng@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:enricolima.eng@gmail.com)](mailto:enricolima.eng@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Enrico Lima 👋🏽 [Entre em contato!](https://www.linkedin.com/in/enricolima/)

