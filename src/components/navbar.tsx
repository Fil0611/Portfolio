'use client'

import Link from 'next/link';
import ThemeButton from './themeButton';
import { useState } from 'react';

export default function Navbar() {
  return (
    <div className='navbar bg-neutral-200 dark:bg-neutral-900 p-3 shadow-2xl'>
      <div className='flex-auto p-3'>
        <Link href={'/'} className='btn btn-ghost hover:shadow-xl hover:bg-neutral-900 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-900'>
          <b><b>
            Filippo<br />
            Battaglin
          </b></b>
        </Link>
      </div>

      <div className='flex-auto'>
        <ul className='menu menu-horizontal'>
          <li className='p-1'><Link href={'/'}>Projects</Link></li>
          <li className='p-1'><Link href={'/'}>About Me</Link></li>
          <li className='p-1'><Link href={'/contacts'}>Contact</Link></li>
        </ul>
      </div>

      <ThemeButton />
    </div>
  )
}