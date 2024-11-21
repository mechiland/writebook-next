import BookDetail from '@/components/BookDetail';
import Link from 'next/link';

type PageParams = {
  params: {
    bookId: string;
  };
};
export default function BookPage({ params }: PageParams) {
  const { bookId } = params;

  return (
    <div>
      <div>
        <Link href="/books"> ← Back to Books</Link>
      </div>
      <BookDetail bookId={Number(bookId)} />
    </div>
  );
}
