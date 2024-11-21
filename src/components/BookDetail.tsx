'use client';

import { useQuery } from '@tanstack/react-query';
import LeafCover from './LeafCover';
import BookNameForm from './BookNameForm';

type Props = {
  bookId: number;
};

export default function BookDetail({ bookId }: Props) {
  const { isPending, data: book } = useQuery({
    queryKey: ['books', bookId],
    queryFn: () =>
      fetch(`/api/books/${bookId}.json`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()),
  });

  if (isPending) {
    return <div>Loading book...</div>;
  }
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="flex gap-4">
        <div className="w-1/4 shrink-0">
          <img src={book.cover_url} />
        </div>
        <div>
          <BookNameForm book={book} />
          <p className="text-lg">{book.author}</p>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {book.leaves.map((leaf) => (
              <LeafCover key={leaf.id} bookId={bookId} leaf={leaf} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
