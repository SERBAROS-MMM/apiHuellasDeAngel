import mongoose from 'mongoose'

mongoose.connect("mongodb://128.199.3.96/huellasdeangeldb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log("DB is connected"))
    .catch(error => console.log(error))

