# Projeto API de Blogs! :memo:
Projeto desenvolvido por mim durante o curso de Desenvolvimento Web na Trybe. Divulgado aqui como portfólio de aprendizado.

<details>
<summary><strong>Objetivos do projeto:</strong></summary>

  * Desenvolver uma API e um banco de dados para a produção de conteúdo para um blog.
  * Desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um CRUD de posts
  * Verificar se eu era capaz de:
    * Desenvolver a API utilizando a arquitetura MSC `model-service-controller`.
    * Desenvolver uma API `RESTful`.
    * Utilizar o banco de dados `MySQL` para a gestão de dados.    
</details>
<details>
<summary><strong> Requisitos do projeto:</strong></summary>

  * Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`.
  * Crie o modelo `User` em `src/models/User.js` com as propriedades corretas.
  * Sua aplicação deve ter o endpoint POST `/login`.
  * Sua aplicação deve ter o endpoint POST `/user`.
  * Sua aplicação deve ter o endpoint GET `/user`.
  * Sua aplicação deve ter o endpoint GET `/user/:id`.
  * Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas.
  * Sua aplicação deve ter o endpoint POST `/categories`.
  * Sua aplicação deve ter o endpoint GET `/categories`.
  * Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas.
  * Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas.
  * Sua aplicação deve ter o endpoint POST `/post`.
  * Sua aplicação deve ter o endpoint GET `/post`.
  * Sua aplicação deve ter o endpoint GET `/post/:id`.
  * Sua aplicação deve ter o endpoint PUT `/post/:id`.
  * Requisitos Bônus:
    * Sua aplicação deve ter o endpoint DELETE `/post/:id`.
    * Sua aplicação deve ter o endpoint DELETE `/user/me`.
    * Sua aplicação deve ter o endpoint GET `/post/search?q=:searchTerm`.
</details>
  
## Rodando o projeto localmente

Para rodar o projeto em sua máquina, abra seu terminal, crie um diretório no local de sua preferência com o comando `mkdir` e acesse o diretório criado com o comando `cd`:

```bash
mkdir meu-diretorio &&
cd meu-diretorio
```

Clone o projeto com o comando `git clone`:

```bash
git clone git@github.com:marcosadrianoti/tb-store-manager.git
```

Acesse o diretório do projeto com o comando `cd`:

```bash
cd tb-store-manager
```

Instale as dependências executando:

```bash
npm install
```

Com o Docker instalado em sua máquina, execute:

```bash
docker-compose up -d
```

Execute a aplicação:

```bash
npm run start
```

Para exercutar os teste:


```bash
npm run test:mocha
```
