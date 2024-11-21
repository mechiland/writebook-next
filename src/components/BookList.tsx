'use client';

import { useQuery } from '@tanstack/react-query';
import BookCover from './BookCover';

export default function BookList() {
  const { isPending, data: books } = useQuery({
    queryKey: ['books'],
    queryFn: () =>
      fetch('/api/books.json', {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCover key={book.id} book={book} />
      ))}
    </div>
  );
}
