import supertest from 'supertest';
import app, { init } from '@/app';
import { cleanDb } from '../helper';
import httpStatus from 'http-status';
import { faker } from '@faker-js/faker';
import { createBook } from '../factories/bookFactories';

const api = supertest(app);

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

describe('BOOK /book/find', () => {
  it('should respond with status 400 when body is not given', async () => {
    const response = await api.post('/book/find');

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it('should respond with status 201 when body valid', async () => {
    const title = {
      title: faker.music.genre(),
    };
    const response = await api.post('/book/find').send(title);

    expect(response.status).toBe(httpStatus.OK);
  });
});

describe('BOOK /book/find/:id', () => {
  it('should respond with status 404 when no book is found', async () => {
    const id = faker.random.numeric(3);
    const response = await api.get(`/book/find${id}`);

    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });

  it('should respond with status 201 when body valid', async () => {
    const book = await createBook();
    const response = await api.get(`/book/find/${book.google_books_id}`);

    expect(response.status).toBe(httpStatus.OK);
  });
});
