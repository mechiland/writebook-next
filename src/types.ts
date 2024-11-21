export type Book = {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  cover_url?: string;
  leaves: Leaf[];
};

export type Leaf = {
  id: number;
  title: string;
  content: string;
};
