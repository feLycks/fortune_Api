const express = require('express');
const bodyParser = require('body-parser')
const app = express()

const fortunes = require('./data/fortunes.json')
const port = 3000

app.use(bodyParser.json());

// get all fortunes 
app.get('/fortunes', (req, res) => res.send(fortunes))
    // get fortunes by id 
app.get('/fortunes/:id', (req, res) => {
    res.send(fortunes.find(c => c.id == req.params.id))
})

// add fortunes 
app.post('/fortunes', (req, res) => {

})

app.listen(port, () => console.log(`Server runnig on port ${port}`))