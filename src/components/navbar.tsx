import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='navbar px-7 py-5 mt-3 sticky top-3'>
      <div className='glass rounded-full shadow-2xl'>
        <div>
          <div className='dropdown dropdown-start'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle m-2 md:hidden'>
              <i className='bi-list text-md' />
            </div>
            <ul tabIndex={0} className='dropdown-content menu menu-sm bg-base-200 z-[1] p-3 rounded-box shadow'>
              <li><Link className='btn btn-ghost w-40 flex-auto' href={'/about'}>Su di Me</Link></li>
              <li><Link className='btn btn-ghost w-40 flex-auto' href={'/projects'}>I Miei Progetti</Link></li>
              <li><Link className='btn btn-ghost w-40 flex-auto' href={'/contacts'}>Contattami</Link></li>
            </ul>
          </div>

          <Link className='btn btn-ghost rounded-full m-2 text-md hover:shadow-xl hover:bg-neutral-900 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-900' href={'/'}>
            <b><b>Filippo Battaglin</b></b>
          </Link>
        </div>
      </div>

      <div className='navbar-middle flex-1' />

      <div className='glass rounded-full shadow-2xl'>
        <div className='hidden md:flex'>
          <ul tabIndex={0} className='menu menu-horizontal'>
            <li className='pr-1'><Link className='btn btn-ghost rounded-full hover:shadow-xl' href={'/about'}>Su di Me</Link></li>
            <li className='px-1'><Link className='btn btn-ghost rounded-full hover:shadow-xl' href={'/projects'}>I Miei Progetti</Link></li>
            <li className='pl-1'><Link className='btn btn-ghost rounded-full hover:shadow-xl btn-outline w-40 flex-auto' href={'/contacts'}>Contattami</Link></li>
          </ul>
        </div>

        {/* Implementare la funzione per riconoscere il tema applicato attualmente dal sistema ospite */}
        {/* Fare in modo che il bottone cambi il valore di prefers-color-scheme invece che solo il CSS */}
        <div className='md:ml-6 m-2'>
          <label className='swap swap-rotate btn-ghost btn-circle'>
            <input type='checkbox' className='theme-controller' value='light' />
            <i className='bi-brightness-high swap-on' />
            <i className='bi-moon-stars swap-off' />
          </label>
        </div>
      </div>
    </div>
  )
}