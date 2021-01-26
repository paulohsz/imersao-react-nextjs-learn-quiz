import React from 'react';
import { useRouter } from 'next/router';

export default function QuizPage() {
  const router = useRouter();
  return (
    <>
      <h1>
        Teste - [
        {router.query.name}
        ]
      </h1>
    </>
  );
}
