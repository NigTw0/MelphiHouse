const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

app.set('port', process.env.PORT || 2310)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(morgan('dev'))
app.use(require('./routes/index'))
app.use(express.static(path.join(__dirname, '/public/')))
app.use(function(req, res, next) {
    res.status(404).redirect('/ups...')
})

app.listen(app.get('port'), function(error) {
    if(error) return console.error(error)
    console.log(`La casa de Melphi, esta siendo movida por unos ratones galacticos hacia el puerto ${app.get('port')}.`)  
})