import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/huellasdeangeldb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    findOneAndUpdate: false,
    findOneAndDelete: false,
    useFindAndModify: false
})
    .then(db => console.log("DB is connected"))
    .catch(error => console.log(error))

