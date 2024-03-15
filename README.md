 ## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- Nodemon
- Express
- Cors
- Mongodb e Mongoose
- Socket.io
- Git e Github

## 💻 Projeto

O Back end do site Airbnb Tech foi desenvolvido com o objetivo de criar uma api para ser consumida no front- end, fazendo todas as chamadas necessárias para o site rodar como em um projeto em produção.

## 🔖 Como executar em sua máquina
- Baixe o código
- Execute yarn dev
  Para criar sua própria credencial no banco de dados você deve:
- Acesse o site do banco de dados https://www.mongodb.com/cloud/atlas/register
- Se registre e crie uma conta
- Crie um Cluster no modo free e nomeie ele
- Acesse Database Access e crie um novo usuario clicando em "Read and write to any database" e coloque uma senha e um nome de usuario, clica em add user
- Acesse Network Accsess e clique em add e clique em "Allow access from anywhere" e confirma
- Vai na tela home clica em Cluster e clica no botão connect e depois clique em Drivers, você precisa preencher a linguagem Node.js no campo especificado
- E copie a Url que está no campo "Add your connection string into your application code" que o site do Mongo mostrar para você
- Cole a Url no código acessando a pasta server-> dentro da estrutura mongoose.connect("link que o site do Mongo lhe mostrou")
- Você vai editar nessa Url o username o e a password, com o usuario e senha que você criou no passo Database Access "mongodb+srv://<username>:<password>" retirando os <> e deixando o texto que você colocou
- 
