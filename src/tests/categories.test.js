const request = require('supertest');
const express = require('express');
const shell = require('shelljs');
const categoriesService = require('../services/categoriesService');
const categoriesRoute = require('../routes/categoriesRoute');
const message = require('./config/errorMessages');
const db = require('../models');

const app = express();
app.use(express.json());
app.use(categoriesRoute);

const emptyCategory = { name: '' };
const nameString = { name: 1, id: 1 };
const noName = {};
const nameTooBig = {
  name: `teste.teste.teste.teste.teste.testeteste.teste
  teste.teste.teste.testeteste.teste.teste.teste.teste.teste
  teste.teste.teste.teste.teste.testeteste.teste.teste.teste.teste.teste`,
};

beforeAll(async () => {
  shell.exec('npm run drop');
  shell.exec('npm run create');
  shell.exec('npm run seed');
});


it('Não é possível não ter o campo nome.', (done) => {
  request(app)
    .post('/category')
    .send(noName)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.nameRequired, done);
});

it('O nome deve ser uma string.', (done) => {
  request(app)
    .post('/category')
    .send(nameString)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.nameIsString, done);
});

it('Não é possível o nome da categoria estar vazio.', (done) => {
  request(app)
    .post('/category')
    .send(emptyCategory)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.emptyCategoryName, done);
});

it('Não é possível o nome da categoria ser maior que 128 caracteres.', (done) => {
  request(app)
    .post('/category')
    .send(nameTooBig)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.invalidName, done);
});

afterAll(async () => {
  await db.sequelize.close();
});
