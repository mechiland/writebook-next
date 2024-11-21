import { Book } from '@/types';
import Link from 'next/link';

type Props = {
  book: Book;
};

export default function BookCover({ book }: Props) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="aspect-[160/256] bg-gray-100">
        <img src={book.cover_url} className="w-full" />
      </div>
      <div className="text-center">
        <h2 className="font-bold">{book.title}</h2>
        <div>{book.author}</div>
      </div>
    </Link>
  );
}
