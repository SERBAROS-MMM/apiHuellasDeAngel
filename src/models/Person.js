import {Schema,model} from 'mongoose'

const personSchema = new Schema ({
    name: String,
    lastName1: String,
    lastName2: String,
    age: Number,
    birthday: Date,
    typeIdent: String,
    ident: String,
    gender:String,
    imageURL: String,
    fromSite: {
        ref: "FromSite",
        type: Schema.Types.ObjectId
    },
},{
    timestamps: true,
    versionKey: false,
    collection: 'persons'
})

export default model('Person', personSchema)