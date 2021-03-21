const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minchang0116:qjavl%407338@boilerplate.mk9tw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Conected...')) // 인자 명시해줘야 에러 안뜸
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World22552'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))