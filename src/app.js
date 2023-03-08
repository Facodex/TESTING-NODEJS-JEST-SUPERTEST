import express from 'express';

// AQUI ESTA EL SERVIDOR CON SU CONFIG

// aqui inicializamos y guardamos express 
const app = express();

// nuestras url por GET
app.get('/ping', (req, res) => {    //cuando se llama a /ping
    res.send('pong');       //se devuelve pong
});

app.get('/tasks', (req, res) => {    
    res.json([]);
});

// nuestras url por POST
app.post('/tasks', (req, res) => {    
    res.send('tasks');
});

export default app;