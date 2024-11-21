'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type FormData = {
  email_address: string;
  password: string;
};

export default function SessionForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email_address: 'hello@write.book',
      password: 'password',
    },
  });

  const onSubmit = async (values: FormData) => {
    const { email_address, password } = values;
    const res = await fetch('/api/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address, password }),
    });
    if (!res.ok) {
      alert('登录失败，请检查 email 和密码是否正确');
    } else {
      router.push('/books');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input type="email" {...register('email_address')} />
      </label>
      <label>
        Password:
        <input type="password" {...register('password')} />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
