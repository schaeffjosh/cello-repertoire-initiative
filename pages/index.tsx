import { NextPage } from 'next';
import Head from 'next/head';
import NavbarMain from '@/components/navbar-main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cello Repertoire Initiative</title>
      </Head>
      <NavbarMain />
      <main className="p-4 flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Cello Repertoire Initiative!</h1>
        <p className="text-center">Your source for curated cello music pieces.</p>
      </main>
    </div>
  );
};

export default Home;
