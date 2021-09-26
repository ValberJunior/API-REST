# Um API-REST com criptografia para login usando JWT

## Tecnologias aplicadas:
- JWT;
- Mongo DB;
- Javascript;
- Node.js

## Código Estruturado em:

- Folder: Controllers > authController.js ( Validar o Token de Acesso);  userController.js (Receber os dados e trata-los , para um eventual Registro ou Login); validate.js( Validar se os dados recebidos do Front estão de acordo com os pré requisitos - Usando o módulo @hapi/joi).
- Folder: Moldes > User.js > (Com o auxílio do Mongoose, definir o Schema e molde do usuário a ser criado);
- Folder: Routes > Definir e proteger as rotas.

### Através do recurso dotenv, conseguimos utilizar variáveis de ambiente para auxilio no desenvolvimento.

### Obs Finais:
- Para a criptografia dos dados foi utilizado o módulo bcrypt;
- Para criação do token e manipulação do mesmo, foi utilizado o módulo JWT.
- Utilizei para o projeto o mongoDB Atlas, serviço de nuvem do MongoDB, com apoio do Mongo Compose.
