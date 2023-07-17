import axios from 'axios';

export default async function searchBooks(query: string) {
  try {
    const fields = [
      'items(id',
      'volumeInfo/title',
      'volumeInfo/authors',
      'volumeInfo/publishedDate',
      'volumeInfo/imageLinks',
      'volumeInfo/description',
      'volumeInfo/subtitle',
      'volumeInfo/language)',
    ].join(',');
    const Url = 'https://www.googleapis.com/books/v1/volumes';
    const response = await axios.get(Url, {
      params: {
        q: query,
        fields,
        key: process.env.API_KEY,
        'partial.fieldsets': fields,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error occurred: ${error}`);
  }
}
