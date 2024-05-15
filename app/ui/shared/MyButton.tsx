'use client';

import Image from 'next/image';


interface MyButtonProps {
  click: () => void;
}

export default function MyButton({ click }: MyButtonProps) {
  return (
    <button onClick={click}>
      <Image src="/icons/burger.svg" alt="Logo" width={30} height={30} />
    </button>
  );
}