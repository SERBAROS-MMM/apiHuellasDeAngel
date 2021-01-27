import {Schema,model} from 'mongoose'

const temperatureSchema = new Schema ({
    
    day: Date,
    temperature : String,
    person: {
        ref: "Person",
        type: Schema.Types.ObjectId
    },
    },{
    timestamps: true,
    versionKey: false,
    collection: 'temperatures'
})

export default model('Temperature', temperatureSchema)