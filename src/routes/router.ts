import * as Units from '../schemas/schema'
import { socket as io } from '../index'
import { Model,Document } from 'mongoose'

function setupStream(doc:Model<Document,{}>,name:string){
    const docStream = doc.watch()

    docStream.on('change',next =>
        io.compress(true)
        .emit(`${name}-data`, next)
    )
}
 
export default function configureStream(){
    for(const [key,value] of Object.entries(Units.default)){
        setupStream(value,key)
    }
}