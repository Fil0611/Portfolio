import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='navbar px-7 py-5 shadow-xl'>
      <div className='mr-5'>
        <div className='dropdown dropdown-start'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle m-2 mr-5 md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className='dropdown-content menu menu-sm bg-base-200 z-[1] p-3 rounded-box shadow'>
            <li><Link className='btn btn-ghost w-40 flex-auto' href={'/projects'}>Progetti</Link></li>
            <li><Link className='btn btn-ghost w-40 flex-auto' href={'/contacts'}>Contatti</Link></li>
          </ul>
        </div>

        <Link href={'/'} className='btn btn-ghost text-md hover:shadow-xl hover:bg-neutral-900 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-900'>
          <b><b>Filippo Battaglin</b></b>
        </Link>
      </div>

      <div className='navbar-middle flex-1' />

      <div className='hidden md:flex'>
        <ul tabIndex={0} className='menu menu-horizontal'>
          <li className='pr-1'><Link className='btn btn-ghost' href={'/about'}>Su di Me</Link></li>
          <li className='px-1'><Link className='btn btn-ghost' href={'/projects'}>I Miei Progetti</Link></li>
          <li className='pl-1'><Link className='btn btn-ghost btn-circle btn-outline w-40 flex-auto' href={'/contacts'}>Contattami</Link></li>
        </ul>
      </div>

      {/* Implementare la funzione per riconoscere il tema applicato attualmente dal sistema ospite */}
      <div className='ml-6'>
        <label className='swap swap-rotate btn-ghost btn-circle'>
          <input type='checkbox' className='theme-controller' value='light' />
          <i className='bi-brightness-high swap-on' />
          <i className='bi-moon-stars swap-off' />
        </label>
      </div>
    </div>
  )
}