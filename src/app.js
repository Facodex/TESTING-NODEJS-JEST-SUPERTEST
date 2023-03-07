import express from 'express';

// AQUI ESTA EL SERVIDOR CON SU CONFIG

// aqui inicializamos y guardamos express 
const app = express();

// nuestras url 
app.get('/ping', (req, res) => {    //cuando se llama a /ping
    res.send('pong');       //se devuelve pong
});

app.get('/tasks', (req, res) => {    //cuando se llama a /ping
    res.json([]);       //se devuelve pong
});

export default app;