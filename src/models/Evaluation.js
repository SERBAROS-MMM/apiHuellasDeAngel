import {Schema,model} from 'mongoose'

const evaluationSchema = new Schema ({
    nameEvaluation: String,
    Steps: [
        { 
            nameStep : String,
            orderStep: Number,
            Fields : [
                {
                    nameField: String,
                    typeField: String,
                    orderField: Number,
                }
            ]
        }
    ],
    },{
    timestamps: true,
    versionKey: false,
    collection: 'evaluations'
})

export default model('Evaluation', evaluationSchema)