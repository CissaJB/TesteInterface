# Trabalho1 do 2°Bimestre (Programação avançada para WEB)

### Alunas: Beatriz Brito e Cecilia Barros 
### Turma: CC5MB

## _Expansão do Aplicativo "Dositio"_


**Contexto:**

**Esse é o foi nosso primeiro projeto, somente a parte do servidor.**

Em nossa disciplina estamos desenvolvendo as API’s de backend utilizando Node.js/Fastify
com bancos de dados não-relacionais (MongoDB). Nosso projeto prático, "Dositio",
atualmente apresenta um CRUD de produto e uma rota de autenticação (`/auth`). Até este
ponto, juntos, implementamos as rotas: GET `/products` e `/products/:id`, POST `/products`,
PUT `/products/:id` e DELETE `/products/ :id`. 

## **Agora para esse novo projeto fizemos a interface para realmente podermos visualizar esses produtos.**

### **Recursos Implementados:**

### Tela Pública (Página Inicial)

- Temos uma página inicial que é acessível publicamente.
- É onde temos uma introdução sobre a aplicação e nossa 'empresa'.
- possui um botão de login que nos direciona para a página de login.

### Página de Login

- Nossa página de login serve para autenticar usuários previamente cadastrados no backend.
- para logins mal-sucessedidos uma mensagem de erro é exibida.

### Página Autenticada (Produtos)

- Após o login, nosso usuário é redirecionado para uma página autenticada que exibe os produtos cadastrados no backend.
- A página deve lista coisas como nome, preço e a categoria que aquele produto pertece.
- Nessa página temos um botão que serve como filtro, se o usuário quiser pesquisar os produtos pela determinada categoria, ele te redireciona para a página de categorias e nela o usuário escolhe a que preferir.

### Página Categoria

- Nessa página o usuário escolhe a categoria de produtos que quer e visualiza os produtos de uma maneira mais fácil.
- Clicando na categoria desejada, o usuário é levado para uma página que contém somente os produtos daquela determinada categoria.

## Para iniciar:
- A pasta baixada provavelmente sera pastabaixada/Testeinterface/Interface
- faça um **cd** para a pasta **dositio** que está localizada dentro de interface
- No terminal faça **npm install** para instalar todas as dependências utilizadas no projeto na parte de backend
- faça um **cd** para a pasta **my-app** que está localizada dentro de interface
- No terminal faça **npm install** para instalar todas as dependências utilizadas no projeto na parte de frontend
- faça um **cd** para a pasta **interface**
- No terminal faça **npm install** para instalar todas as dependências utilizadas para conectar os projetos.

## Para rodar o servidor e o projeto
- Faça um `npm run dev` , se todas as depêndencias foram baixadas corretamente esse comando irá inicializar tanto o frontend como o backend.
- Se por algum motivo quiser inicializa-los separados: npm run frontend ou npm run backend.
  
  

