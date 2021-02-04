const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const buscaCep = require('./src/functions/buscaCep')
const buscaGithub = require('./src/functions/buscaGithub')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/envia-cep', async(req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)
      
    res.render('resultado',{dado:resultado})
})

app.post('/meugit', async (req,res) => {
    const { github } = req.body
    const resultado = await buscaGithub(github)
    res.render('github', {dado:resultado})
  })
  

  
app.listen(3333)