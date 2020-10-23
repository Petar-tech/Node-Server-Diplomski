import 'dotenv/config'

import  io from 'socket.io'
import express from 'express'
import { connect } from "mongoose"
import { createServer } from 'http'
import configureStream from './routes/router'

const port = process.env.PORT || 8000
const app = express()
const server = createServer(app)
export const socket = io(server)

configureStream()

connect(process.env.MONGO_URI as string,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true
    },
    () => console.log("Connected to database.")
)

app.use(express.static('public'))

server.listen(port,() => console.log(`Listening on PORT: ${port}`))