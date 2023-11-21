 const express = require("express");
 const mongoose = require("mongoose");
 const routes = require("./routes");

 const app = express()

 mongoose.connect(
   "mongodb+srv://stack:stack@cluster0.bov2zyi.mongodb.net/semana09?retryWrites=true&w=majority"
 )

 //req.query= acessar query params (para filtros)
 //req.params= acessar route params (edição e delete)
 //req.body= acessar corpo da requisição(para criação, edição )

 app.use(express.json());
 app.use(routes);

 app.listen(3333)
