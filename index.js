const express = require('express');

const route = require('./routes/route');


const app = express();

  

const port = process.env.PORT || 5000;


app.use(express.urlencoded({extended: false}));

app.use(express.json());



app.get('/', (req, res)=>{
    res.sendFile(__dirname + "//client/html/login.html");
});

app.get('/signup', (req, res)=>{
    res.sendFile(__dirname + "//client/html/signup.html");
});

app.get('/home', (req, res)=>{
    res.sendFile(__dirname + "//client/html/home.html");
});

app.use('/api', route);


app.listen(port, ()=>{
    console.log('Express server runing at port :' + port);
});