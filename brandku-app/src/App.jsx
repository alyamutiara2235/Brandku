import {useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import {featureData} from './data/features'

const App = () => {
  const [features] = useState(featureData);
  const handleHeroAction = () => {
    alert ("Tombol 'Mulai Gratis' diklik! Berhasil dijalankan via props.");
  }

  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col justify-between">
    <div>
      <Header />
      <main>
      <Hero onTapped={handleHeroAction} />
      <CardGrid features={features} />
      </main>
    </div>

      <footer className="bg-gray-900 text-gray-400 py-8 px-8 text-center text-sm">
        <p>&copy;2026 Brandku. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default App;