import Link from 'next/link';
import React from 'react';
import gsap from 'gsap';

const test = () => {

  return (
    <div>
      <button>
        <Link href='/'>home</Link>
      </button>
      <div onClick={() => gsap.to(".box", {rotation: 27, x: 100, duration: 1})} className='border-gray-300 text-red-700 bg-zinc-300'>
        <h1 className="box">hello world</h1>
      </div>
     
    </div>
  );
};

export default test;
