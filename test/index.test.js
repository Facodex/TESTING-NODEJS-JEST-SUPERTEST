import app from "../src/app";
import request from 'supertest';

describe('Probando si por GET existe /tasks', () => {

    test('should respond with status 200', async() =>{
        const response = await request(app).get('/tasks').send();
        // console.log(response);
        expect(response.status).toBe(200);
    });
});