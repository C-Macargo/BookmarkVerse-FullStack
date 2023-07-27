import prisma from '@/config/database';
import { faker } from '@faker-js/faker';

export async function createBook() {
  const book = await prisma.book.create({
    data: {
      google_books_id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      authors: faker.name.fullName(),
      description: faker.lorem.paragraph(),
      thumbnail: faker.image.imageUrl(),
      published_date: faker.datatype.string(),
      subtitle: faker.lorem.sentence(),
      language: faker.locale,
    },
  });

  return book;
}
