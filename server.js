const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const chalk = require('chalk');
const port = process.env.PORT || 3000;

const app = express();

//mount middleware    "test": "echo \"Error: no test specified\" && exit 1"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('Welcome to the library');
})  

app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`);
});