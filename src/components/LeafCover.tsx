import { Leaf } from '../types';

type Props = {
  bookId: number;
  leaf: Leaf;
};
export default function LeafCover({ bookId, leaf }: Props) {
  return (
    <div key={leaf.id}>
      <div className="border border-gray-300 p-4 aspect-[3/4] overflow-hidden">
        <div
          className="text-xs mt-4 [&>p]:mt-4 [&>h1]:text-base [&>h1]:font-bold"
          dangerouslySetInnerHTML={{ __html: leaf.content }}
        ></div>
      </div>
      <h3 className="font-bold text-lg p-4">{leaf.title}</h3>
    </div>
  );
}
