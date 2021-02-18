import {Schema,model} from 'mongoose'

const newSchema = new Schema ({
    
    day: Date,
    new : String,
    persons: [{
        ref: "Person",
        type: Schema.Types.ObjectId
    }],
    },{
    timestamps: true,
    versionKey: false,
    collection: 'news'
})

export default model('New', newSchema)