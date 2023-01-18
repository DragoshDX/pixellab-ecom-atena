import { css } from '@emotion/css';
import Head from 'next/head';
import { FaApple } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-red-800 text-white font-bold">
        Hello Atena
        <div
          className={css`
            color: red;
            &:hover {
              color: blue;
            }
          `}
        >
          text extins
        </div>
        <FaApple></FaApple>
      </main>
    </>
  );
}
