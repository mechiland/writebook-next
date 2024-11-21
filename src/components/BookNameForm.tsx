'use client';
import { Book } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { queryClient } from './AppLayout';

type Props = {
  book: Book;
};

type FormData = {
  title: string;
};

export default function BookNameForm({ book }: Props) {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: book.title,
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormData) => {
      return fetch(`/api/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', book.id] });
    },
  });

  const onSubmit = (values: FormData) => {
    mutation.mutate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('title')}
        className="border-none p-0 w-full text-3xl font-semibold"
      />
    </form>
  );
}
