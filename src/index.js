import app from './app.js'
import './db'

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'),() =>{
    console.log('Server on port', app.get('port'))
})