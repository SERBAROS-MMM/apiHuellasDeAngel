import {Schema,model} from 'mongoose'

const userSchema = new Schema ({
    username: {
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }],
    },{
    timestamps: true,
    versionKey: false,
    collection: 'users'
})

export default model('User', userSchema)