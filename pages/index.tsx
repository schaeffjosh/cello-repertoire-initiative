import { NextPage } from 'next';
import Head from 'next/head';
import NavbarMain from '@/components/navbar-main';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link } from '@nextui-org/react';

const Home: NextPage = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Ensure the effect runs only once to set the content visibility
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>Cello Repertoire Initiative</title>
      </Head>
      <NavbarMain />
      <main className={`p-8 flex flex-col items-center justify-center ${isMobileView ? 'mobile-view' : ''} ${contentVisible ? 'move-up' : ''}`} style={{ marginTop: isMobileView ? '30px' : '0' }}>
        <h1 className={`text-4xl font-mono font-bold mb-4 text-center ${isMobileView ? 'mobile-title' : ''}`}>
          Explore, Discover, Teach
        </h1>
        <p className="text-center mb-5">Connecting Teachers to Diverse Musical Voices.</p>
        <button className={`bg-black text-white px-6 py-3 rounded-lg mt-4 transition-transform hover:scale-110 ${isMobileView ? 'mobile-view' : ''}`}>
          Find music <FaArrowRight className="inline-block ml-2" />
        </button>
        <div className={`mt-8 ${contentVisible ? '' : 'hidden'}`} id="afterMoveUp">
          <div className={`flex ${isMobileView ? 'flex-col space-y-6' : 'space-x-6'}`} id="images-container">
            <Link href="/cello-music">
              <div className="relative hover:scale-105 duration-300">
                <img src="/assets/violin2.png" className="w-80 h-120 rounded-lg hover:opacity-75 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <p className="text-white text-lg font-bold">Violin Music</p>
                  <p className="text-sm font-bold">Coming Soon</p>
                </div>
              </div>
            </Link>
            <Link href="/cello-music">
              <div className="relative hover:scale-105 duration-300">
                <img src="/assets/cellist3.png" className="w-80 h-120 rounded-lg hover:opacity-75 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <p className="text-white text-lg font-bold">Cello Music</p>
                </div>
              </div>
            </Link>
            <Link href="/contribute">
              <div className="relative hover:scale-105 duration-300">
                <img src="/assets/contribute.png" className="w-80 h-120 rounded-lg hover:opacity-75 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <p className="text-white text-lg font-bold">Contribute</p>
                  <p className="text-sm font-bold">Suggest an addition to our catalog</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <style jsx>{`
        .move-up {
          transform: translateY(-1%);
          transition: transform 1.5s ease-in-out;
        }

        .mobile-title {
          white-space: pre-wrap;
        }

        @media (max-width: 768px) {
          .mobile-title {
            white-space: pre-wrap;
            text-align: center;
            line-height: 1.2;
          }

          .mobile-view p {
            display: block;
          }

          .mobile-view button {
            transform: translateY(-50%);
          }

          #images-container {
            flex-direction: column;
            gap: 1.5rem; /* Adjust for spacing */
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
