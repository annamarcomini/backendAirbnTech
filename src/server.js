const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const routes = require("./routes")
const socketio = require("socket.io")
const http = require("http")

const app = express()
const server = http.createServer(app)
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  }
  })

mongoose
  .connect(
    "mongodb+srv://stack:stack@cluster0.bov2zyi.mongodb.net/semana09?retryWrites=true&w=majority"
   )

   
  const connectedUsers = {}

  io.on("connection", (socket) => {
    const { user_id } = socket.handshake.query
    connectedUsers[user_id] = socket.id
  })

  app.use( (req,res,next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
  })

app.use(cors())
app.use(express.json())
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")))
app.use(routes)

server.listen(3333)
