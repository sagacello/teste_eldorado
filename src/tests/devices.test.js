const request = require('supertest');
const express = require('express');
const shell = require('shelljs');
const categoriesService = require('../services/categoriesService');
const devicesRoute = require('../routes/devicesRoute');
const message = require('./config/errorMessages');
const db = require('../models');

const app = express();
app.use(express.json());
app.use(devicesRoute);

const resultGetCategory = { name: 'cell', id: 1, categoryId: 1 };
const noColor = { partNumber: 1, categoryId: 1 };
const noPartNumber = { color: 'red', categoryId: 1 };
const emptyColor = { partNumber: 1, color: '', categoryId: 1 };
const emptyPartNumber = { color: 'red', partNumber: ' ', categoryId: 1 };
const partNumberIntegerPositive = {
  partNumber: -1,
  color: 'red',
  categoryId: 1,
};
const colorString = { partNumber: 1, color: 1, categoryId: 1 }
const colorTooBig = {
  color: `teste.teste.teste.teste.teste.teste`,
  partNumber: 1,
  categoryId: 1,
};

beforeAll(async () => {
  shell.exec('npm run drop');
  shell.exec('npm run create');
  shell.exec('npm run seed');
});


it('Não é possível não ter o campo color.', (done) => {
  request(app)
    .post('/devices')
    .send(noColor)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.colorRequired, done);
});

it('Não é possível não ter o campo partNumber.', (done) => {
  request(app)
    .post('/devices')
    .send(noPartNumber)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.invalidNamePartNumber, done);
});

it('Não é possível o campo color ser vazio.', (done) => {
  request(app)
    .post('/devices')
    .send(emptyColor)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.emptyDeviceColor, done);
});

it('O campo color deve ser uma string.', (done) => {
    request(app)
      .post('/devices')
      .send(colorString)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500, message.colorIsString, done);
  });
  

it('Não é possível o campo partNumber ser vazio.', (done) => {
  request(app)
    .post('/devices')
    .send(emptyPartNumber)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.emptyDevicePartNumber, done);
});

it('Não é possível o nome da cor ser maior que 16 caracteres.', (done) => {
  request(app)
    .post('/devices')
    .send(colorTooBig)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.invalidColor, done);
});

it('O campo partNumber deve ser inteiro positivo.', (done) => {
  request(app)
    .post('/devices')
    .send(partNumberIntegerPositive)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500, message.partNumberMostBeIntegerPositive, done);
});

afterAll(async () => {
  await db.sequelize.close();
});
