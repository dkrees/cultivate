'use client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {

  const router = useRouter();

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/cultivate');
  };

  return (
    <main className='min-h-screen px-6 py-24'>
      <div className='container mx-auto max-w-sm bg-white p-6 rounded-lg'>
        <form onSubmit={submitForm} className='flex flex-col gap-4'>
          <legend className='text-2xl text-sky-700'>Login</legend>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='username'
              className='text-sm text-gray-500 cursor-pointer'
            >
              Username
            </label>
            <input
              id='username'
              name='username'
              type='email'
              className='rounded'
              placeholder='Email Address'
              required
            ></input>
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='password'
              className='text-sm text-gray-500 cursor-pointer'
            >
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              className='rounded'
              placeholder='Password'
              required
            ></input>
          </div>
          <button
            type='submit'
            className='bg-sky-500 text-white p-3 rounded hover:bg-sky-600 active:translate-y-0.5'
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
