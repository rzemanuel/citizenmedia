'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEmail } from '@/context/EmailContext';

const EmailQuoteForm = () => {
  const router = useRouter();
  const { setEmail } = useEmail();
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setEmail(emailInput);
      router.push('/contact');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="my-10 flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] shadow-md sm:flex-row"
    >
      <input
        type="email"
        className="w-full border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left"
        placeholder="Enter Your Email Address"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary btn-md">
        Get A Quote
      </button>
    </form>
  );
};

export default EmailQuoteForm; 