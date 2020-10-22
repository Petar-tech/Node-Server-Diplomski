import { Router } from 'express'
import cors from 'cors'
import * as Units from '../schemas/schema'

const router = Router()
const { temp, press, humid } = Units.default

router
    .get('/:unit',cors(),async (req,resp) => {
        const unit = req.params?.unit
        let result;

        switch(unit){
            case 'temp':
                result = await temp.find()
                resp.status(200)
                resp.send(result)
                break
            case 'press':
                result = await press.find()
                resp.status(200)
                resp.send(result)
                break
            case 'humid':
                result = await humid.find()
                resp.status(200)
                resp.send(result)
                break
            default:
                resp.status(404)
                resp.send("<h1>404</h1>")
                break
        }
    })

export default router