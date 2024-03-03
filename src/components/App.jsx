import React from 'react';
import '../styles/App.css';
import '../styles/utilities.css';
import PointDisplay from './PointDisplay';
import TalentPath from './TalentPath';
import Toast from './Toast';

function App() {
  return (
    <main className='flex-column app'>
      <h1 className='title'>
        TitanStar Legends <span>Rune Mastery</span>
      </h1>
      <div className='content'>
        <div className='talent-paths'>
          <TalentPath id={1} />
          <TalentPath id={2} />
        </div>
        <PointDisplay />
      </div>
      <Toast />
    </main>
  );
}

export default App;
