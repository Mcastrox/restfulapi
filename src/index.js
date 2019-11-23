const express = require("express");
const app=express();
const morgan =require("morgan");

// configuracion del puerto
app.set('port',process.env.PORT || 3000);

// middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// rutas
app.use(require('./routes/index'));

// iniciando el server 
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});