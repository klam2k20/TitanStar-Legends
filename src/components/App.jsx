import React from 'react';
import '../styles/App.css';
import '../styles/utilities.css';
import TalentPath from './TalentPath';
import PointDisplay from './PointDisplay';

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
    </main>
  );
}

export default App;
