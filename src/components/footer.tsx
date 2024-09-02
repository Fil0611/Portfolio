export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <aside>
        <p className='font-bold'>Copyright © {new Date().getFullYear()} - All right reserved by Filippo Battaglin</p>
      </aside>
    </footer>
  );
}