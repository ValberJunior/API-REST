# Um API-REST com criptografia para login usando JWT
<br>
<h2>Tecnologias aplicadas:</h2>
<br>
<div style="display=inline-block margin-top:20px">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node" width="50px" height="50px">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="50px" height="50px" >
  <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="javascript"width="50px" height="50px" >
 <img src="http://jwt.io/img/logo-asset.svg" alt="jwt" width="110px" height="50px" >
</div>

<br><br>

## Código Estruturado em:

- Folder: Controllers > authController.js ( Validar o Token de Acesso);  userController.js (Receber os dados e trata-los , para um eventual Registro ou Login); validate.js( Validar se os dados recebidos do Front estão de acordo com os pré requisitos - Usando o módulo @hapi/joi).
- Folder: Moldes > User.js > (Com o auxílio do Mongoose, definir o Schema e molde do usuário a ser criado);
- Folder: Routes > Definir e proteger as rotas.

### Através do recurso dotenv, conseguimos utilizar variáveis de ambiente para auxilio no desenvolvimento.
<br>

### Obs Finais:
- Para a criptografia dos dados foi utilizado o módulo bcrypt;
- Para criação do token e manipulação do mesmo, foi utilizado o módulo JWT.
- Utilizei para o projeto o mongoDB Atlas, serviço de nuvem do MongoDB, com apoio do Mongo Compose.
