const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');// render the ejs view for the form
app.get('/', (req,res)=>{res.render('formulario');});// handle the form submission
app.get('/sendForm', (req,res)=>{res.send('Message sent');});
app.listen(port, ()=>{console.log('Server running on port: '+port);});