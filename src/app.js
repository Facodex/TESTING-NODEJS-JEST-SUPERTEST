import express from 'express';
import { v4 } from 'uuid'; 

// AQUI ESTA EL SERVIDOR CON SU CONFIG

// Aqui inicializamos y guardamos express 
const app = express();

// Aqui agregamos un middleware de express para que podamos leer correctamente el json del body de las peticiones
app.use(express.json());

// nuestras url por GET
app.get('/ping', (req, res) => {    //cuando se llama a /ping
    res.send('pong');       //se devuelve pong
});

app.get('/tasks', (req, res) => {    
    res.json([]);
});

// nuestras url por POST
app.post('/tasks', (req, res) => {   
    
    //esto recibimos de la peticion
    const {title, description} = req.body; 

    // comprobando que se haya recibido un titulo y una descripcion
    if(!title || !description) return res.sendStatus(400);
    
    res.json({  //esto lo enviamos de nuevo
        title,
        description,
        id: v4()
    });

});

export default app;