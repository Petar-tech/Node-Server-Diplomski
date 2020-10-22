import 'dotenv/config'
import express from 'express'
import { connect } from "mongoose"

import router from './routes/router'

const port = process.env.PORT || 8000

const server = express()

connect(process.env.MONGO_URI as string,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true
    },
    () => console.log("Connected to database.")
)

server.get('/',(req,resp) => resp.send("<h1>Nothing.</h1>"))

server.use('/data',router)

server.listen(port,() => console.log(`Listening on PORT: ${port}`))