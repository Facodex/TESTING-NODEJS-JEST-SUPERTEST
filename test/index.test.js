import app from "../src/app";
import request from 'supertest';


// Pruebas por GET 
describe('Probando si por GET existe /tasks', () => {

    // testeando que devuelva status 200
    test('should respond with status 200', async() =>{
        const response = await request(app).get('/tasks').send();
        expect(response.status).toBe(200);
    });

    // testeando que devuelva un array
    test('should respond with an array', async() =>{
        const response = await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array);
    });

});

// Pruebas por POST 
describe('Probando si por POST se guardan datos', () => {

    //deberia responder con un status 200
    test('should respond with status 200', async() => {
        const response = await request(app).post('/tasks').send();
        expect(response.statusCode).toBe(200);
    });

    //deberia responder con un content-type of application/json


    //deberia responder con un objeto json que contenga una nueva tarea con un ID

    
});