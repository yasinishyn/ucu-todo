import supertest from 'supertest';

import { todoFactory, todoData } from '../factories/todos.factory';
import app from '../../app/index.js';

const expect = require('chai').expect;
const request = supertest.agent(app.listen());

describe('Todos Controllers', () => {
  // INDEX
  describe('GET index /api/v1/todos', () => {
    it('should return 200', done => {
      request.get('/api/v1/todos').expect(200, done);
    });
  });

  // SHOW
  describe('GET show /api/v1/todos/:id', () => {
    it('should return 200', async () => {
      const todo = await todoFactory();
      const res = await request.get(`/api/v1/todos/${todo.id}`);
      expect(res.statusCode).to.equal(200);
      expect(res.body.data.id).to.equal(todo.id);
    });
  });

  // UPDATE
  describe('PUT /api/v1/todos/:id', () => {
    it('should return 200', async () => {
      const todo = await todoFactory();
      const res = await request
        .put(`/api/v1/todos/${todo.id}`)
        .send({ todo: { title: 'new title' } });
      expect(res.statusCode).to.equal(200);
      expect(res.body.data.title).to.equal('new title');
    });
  });

  // CREATE
  describe('POST /api/v1/todos', () => {
    it('should return 200', async () => {
      const data = await todoData();
      const res = await request.post('/api/v1/todos').send({ todo: data });
      expect(res.statusCode).to.equal(200);
    });
  });

  // DELETE
  describe('DELETE /api/v1/todos', () => {
    it('should return 200', async () => {
      const todo = await todoFactory();
      const res = await request.delete(`/api/v1/todos/${todo.id}`);
      expect(res.statusCode).to.equal(200);
    });
  });
});
