import app from "../src/app";
import request from 'supertest';


// Pruebas por GET 
describe('Probando si por GET existe /tasks', () => {

    // testeando que devuelva status 200
    test('should respond with status 200', async () => {
        const response = await request(app).get('/tasks').send();
        expect(response.status).toBe(200);
    });

    // testeando que devuelva un array
    test('should respond with an array', async () => {
        const response = await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array);
    });

});


// Pruebas por POST 
describe('Probando si por POST se guardan datos', () => {

    // comprobando cuando la tarea SI tiene titulo y descripcion 
    describe('given a title and description', () => {

        const newTask = {
            title: 'test tasks',
            description: 'test description'
        }

        //deberia responder con un status 200
        test('should respond with status 200', async () => {
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.statusCode).toBe(200);
        });

        //deberia responder con un content-type of application/json
        test('should have a content-type/json in header', async () => {
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        });

        //deberia responder con un objeto json que contenga una nueva tarea con un ID
        test('should response contain a task with property id', async () => {
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.body.id).toBeDefined();
        });


    });

    // cuando la tarea NO tiene titulo y/o descripcion entonces tendria que recibir statusCode 400
    describe('when the title and description is missing', () => {

        // deberia recibir codigo 400 cuando no se haya recibido titulo o descripcion 
        test('should respond with 400 status code', async() => {

            // comprobando en un test, 3 posibles casos distintos, gracias a un bucle 
            const fields = [
                {},
                {title: 'Task test'},
                {description: 'Description test'}
            ];

            for(const body of fields) {
                const response = await request(app).post('/tasks').send(body);
                expect(response.statusCode).toBe(400)
            }

        });


    });
});