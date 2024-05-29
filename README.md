Recayd Cars

Este projeto é uma vitrine de carros onde os usuários podem visualizar carros cadastrados e os administradores podem realizar operações de cadastro, edição e exclusão de carros.

Link para o vídeo mostrando o projeto: https://youtu.be/fyr_dDAZor8

Link para a documentação do software: https://drive.google.com/file/d/1nHQ4MPFnRGOdPJL3Eaq-QBlYvHZOyzCc/view?usp=sharing

Para cadastrar um novo admin, você pode acessar http://localhost:3000/cadastro

Rota para documentação da API: /api-docs

Tecnologias Utilizadas

    Frontend:
        React.js
        HTML
        CSS (Tailwind CSS)

    Backend:
        Node.js
        Express.js

    Banco de Dados:
        PostgreSQL

    Gerenciamento:
        Git e Github

    Armazenamento de Imagens:
        AWS S3 (Bucket S3 para armazenar as imagens dos carros)

Funcionalidades

    Para cadastrar um novo admin, você pode acessar http://localhost:3000/cadastro

    Usuários:
        Visualizar carros cadastrados na vitrine.
        Pesquisar carros por nome, marca, modelo ou faixa de preço.

    Administradores:
        Realizar login para acessar o painel de administração.
        Cadastrar novos carros na vitrine.
        Editar informações de carros existentes.
        Excluir carros da vitrine.

Configuração do Projeto
Frontend

    Clone o repositório do frontend para sua máquina local: https://github.com/Nikooooh/testeverzel
    Navegue até a pasta do frontend: cd testeverzel
    Instale as dependências do projeto: npm install
    Inicie o servidor de desenvolvimento: npm start

Backend

    Clone o repositório do backend para sua máquina local: https://github.com/Nikooooh/api_testeverzel
    Navegue até a pasta do backend: cd api_testeverzel
    Instale as dependências do projeto: npm install
    Configure as variáveis de ambiente no arquivo .env
    Inicie o servidor: npm start.

Documentação da API

    Para explorar a documentação completa da API, acesse localhost:8000/api-docs

Configuração do Banco de Dados

    Pré-requisitos

    - Node.js instalado (https://nodejs.org/)
    - PostgreSQL instalado (https://www.postgresql.org/download/)
    - pgAdmin 4 instalado (opcional, mas recomendado para administração do banco de dados) (https://www.pgadmin.org/download/)

    1. Instale o PostgreSQL
       - Baixe e instale o PostgreSQL a partir do (https://www.postgresql.org/download/).
       - Durante a instalação, defina uma senha para o usuário 'postgres'.

    2. Crie um Banco de Dados e um Usuário
       - Abra o pgAdmin 4 e conecte-se ao servidor PostgreSQL local.
       - Clique com o botão direito em "Databases" e selecione "Create" > "Database...".
       - Nomeie o banco de dados como (escolha seu nome de DB).
       - Clique com o botão direito em "Login/Group Roles" e selecione "Create" > "Login/Group Role...".
       - Defina o nome do usuário e a senha.

    3. Configurar Permissões
       - Na aba "Privileges" do usuário, configure as permissões necessárias (CONNECT, CREATE, TEMPORARY, etc.).
       - Assegure-se de que o usuário tenha permissões no seu banco de dados.

    4. Configuração do Arquivo .env
    
       - Crie um arquivo '.env' na raiz do projeto com o seguinte conteúdo:
         '''
         DB_HOST=localhost (TAMBÉM É PADRÃO, MAS PODE SER DIFERENTE)
         DB_PORT=PORTA (PADRÃO DO POSTGRES É 5432)
         DB_USER=DB_USER
         DB_PASSWORD=PASSWORD_DO_DB
         DB_NAME=NOME_DO_DB
         SESSION_SECRET=CHAVE_SECRETA
         '''
         
         Tem um arquivo .env de exemplo no meu projeto!
         
    ## Problemas Comuns

    - Erro de conexão: Verifique se o PostgreSQL está em execução e se as credenciais no arquivo '.env' estão corretas.
    - Permissões negadas: Assegure-se de que o usuário tem as permissões adequadas no banco de dados.

    Configure as variáveis de ambiente no backend para se conectar ao banco de dados.
    Banco de dados utilizado: Postgresql - PgAdmin4

    Adicionar um Novo Servidor:
    Abra o pgAdmin 4.
    No painel esquerdo, clique com o botão direito em "Servers" e selecione "Create" > "Server...".

    Configurar a Conexão:
    Na aba "General", forneça um nome para o servidor.
    Na aba "Connection", insira os detalhes do seu servidor PostgreSQL:
    Host name/address: O endereço IP público ou o nome de domínio do seu servidor.
    Port: 5432 (ou a porta que você configurou).
    Maintenance database: postgres (ou o nome do seu banco de dados).
    Username: Seu nome de usuário do PostgreSQL.
    Password: Sua senha do PostgreSQL.

    Salvar a Configuração:
    Clique em "Save" para salvar as configurações e conectar-se ao servidor.

    DEIXEI UM .ENV DE EXEMPLO DO MEU SERVIDOR PARA VOCÊ CONFIGURAR NA SUA MÁQUINA.

Contribuição

    Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença

    Este projeto foi desenvolvido por Nicolas Trevisan.
