import { Schema,model } from 'mongoose';

const SchemaFactory = (name:string,collection:string) => {
    const UnitSchema = new Schema({
        value:{
            type:Number,
            required:true
        },
        createdAt:{
            type:String,
            required:true,
        }
    },{ collection })

    return model(name,UnitSchema)
}

const temp = SchemaFactory("Temperature","temp")
const humid = SchemaFactory("Humidity","humid")
const press = SchemaFactory("Pressure", "press")

export default {
    temp,
    humid,
    press,
}
