 ## 🚀 Tecnologias/ Technologies

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- Nodemon
- Express
- Cors
- Mongodb e Mongoose
- Socket.io
- Git e Github

This project was developed with the following technologies:

- Node.js
- Nodemon
- Express
- Colors
- Mongodb and Mongoose
- Socket.io
- Git and Github

## 💻 Projeto/ Project

O Back end do site Airbnb Tech foi desenvolvido com o objetivo de criar uma api para ser consumida no front- end, fazendo todas as chamadas necessárias para o site rodar como em um projeto em produção./ The Back end of the Airbnb Tech website was developed with the aim of creating an API to be consumed in the front-end, making all the necessary calls for the website to run as in a production project.

## 🔖 Como roda em sua máquina/ How to run on your machine
- Baixe o código/ Download the code
-  Execute Yarn/ Run Yarn command
- Execute Yarn dev/ Run Yarn dev command
- Para criar sua própria credencial no banco de dados você deve/ To create your own credential in the database you must:
- Acesse o site do banco de dados/ Access the database website: https://www.mongodb.com/cloud/atlas/register
- Se registre e crie uma conta/ Register and create an account
- Crie um Cluster no modo free e nomeie ele/ Create a Cluster in free mode and name it
  ![Captura de tela 2024-03-14 224214](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/15a03e06-2441-441f-afd1-638a2ccee982)
  
- Acesse Database Access e crie um novo usuario clicando em "Read and write to any database" e coloque uma senha e um nome de usuario, clica em add user/ Access Database Access and create a new user by clicking on "Read and write to any database" and enter a password and username, click on add user
  ![Captura de tela 2024-03-14 224321](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/551564c8-48ee-494f-8316-3b91c52d00bb)
![Captura de tela 2024-03-14 224422](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/d5bdb4ed-e9fa-4e03-b92b-525384b2b63f)

- Acesse Network Accsess e clique em add e coloque o IP 0.0.0.0/0 e confirma/ Access Network Accsess and click on add and enter the IP 0.0.0.0/0 and confirm
 ![Captura de tela 2024-03-14 224535](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/35471928-0526-4dca-a324-face9d67cd6a)
![Captura de tela 2024-03-14 224732](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/809dfc27-5637-457a-b664-12401c775b92)

- Vai na tela home clica em Cluster e clica no botão connect e depois clique em Drivers, você precisa preencher a linguagem Node.js no campo especificado/ Go to the home screen, click on Cluster and click on the connect button and then click on Drivers, you need to fill in the Node.js language in the specified field
  ![Captura de tela 2024-03-14 224848](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/23a6236f-b9a8-4d6e-8ef0-b64899644447)
![Captura de tela 2024-03-14 224859](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/6f351751-8d10-4a16-857f-4e268dae41a5)
![Captura de tela 2024-03-14 224909](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/bb0105ea-d68b-45ad-98c8-010bfc739040)

- E copie a Url que está no campo "Add your connection string into your application code" que o site do Mongo mostrar para você/ And copy the Url that is in the "Add your connection string into your application code" field that the Mongo website shows you
  ![Captura de tela 2024-03-14 224939](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/776d3e71-0c7a-420a-921b-6e522c774246)
  
- Cole a Url no código acessando a pasta server-> dentro da estrutura mongoose.connect("link que o site do Mongo lhe mostrou")/ Paste the Url into the code by accessing the server folder-> within the mongoose.connect structure("link that the Mongo website showed you")
  ![Captura de tela 2024-03-14 225110](https://github.com/annamarcomini/backendAirbnTech/assets/116853315/a478207f-f321-4786-9940-eff858b09ee8)
  
- Você vai editar nessa Url o username o e a password, com o usuario e senha que você criou no passo Database Access "mongodb+srv://<username>:<password>" retirando os <> e deixando o texto que você colocou/ You will edit the username and password in this Url, with the username and password you created in the Database Access step "mongodb+srv://<username>:<password>" removing the <> and leaving the text you entered
  
