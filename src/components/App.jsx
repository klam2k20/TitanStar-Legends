import React from 'react';
import '../styles/App.css';
import TalentPath from './TalentPath';
import PointDisplay from './PointDisplay';

function App() {
  return (
    <main>
      <h1>TitanStar Legends</h1>
      <TalentPath id={1} />
      <TalentPath id={2} />
      <PointDisplay />
    </main>
  );
}

export default App;
