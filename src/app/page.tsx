import Link from 'next/link';
import "bootstrap-icons/font/bootstrap-icons.css";
import ThemeButton from '../components/themeButton';

export default function Home() {
  return (
    <>
      <div className='navbar bg-neutral-200 dark:bg-neutral-900 p-3 shadow-2xl'>
        <div className="flex-1 p-2">
          <b>Filippo</b>
        </div>

        <ThemeButton />
      </div>

      <h1 className='ps-5 pt-5'>Portfolio!</h1>
    </>
  );
}