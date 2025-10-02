import authors from '../data/authors.json';

export function getAuthorById(id: string) {
  return authors.find((author) => author.id === id);
}

