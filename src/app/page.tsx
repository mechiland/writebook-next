import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-xl mx-auto h-96 py-20">
      <Link href="/session/new">Login</Link>
    </div>
  );
}
