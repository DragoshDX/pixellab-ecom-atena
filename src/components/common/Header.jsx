import Link from 'next/link';
import { CgMenu } from 'react-icons/cg';

export const Header = () => {
  const jsxVar = <span class="bg-white block w-4 h-4 rounded-full"></span>;

  return (
    <>
      <section className="flex lg:flex-col justify-between items-center h-full lg:py-4">
        <Link href="/">
          {/* no use for anchor */}
          {jsxVar}
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            alert('open menu');
          }}
        >
          <CgMenu size="32"></CgMenu>
        </button>

        <ul className="hidden lg:block">
          <li>{jsxVar}</li>
        </ul>
      </section>

      <nav
        className={`absolute left-0 -top-full transition-transform transform-gpu w-screen h-screen bg-neutral-900`}
      >
        <ul>
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
