import {Schema,model} from 'mongoose'

const fromSiteSchema = new Schema ({
    name: {
        type: String,
        unique: true
    }
    },{
    timestamps: true,
    versionKey: false,
    collection: 'fromsites'
})

export default model('FromSite', fromSiteSchema)