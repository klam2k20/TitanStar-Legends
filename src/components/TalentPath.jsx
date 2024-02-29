import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TALENT_PATH_1, TALENT_PATH_2 } from '../constants/talentPaths';
import '../styles/talent-path.css';
import Rune from './Rune';

const TalentPath = ({ id }) => {
  const [runesLearned, setRunesLearned] = useState([false, false, false, false]);
  const path = id === 1 ? TALENT_PATH_1 : TALENT_PATH_2;

  const updatedRunesLearned = (idx, isLearned) => {
    setRunesLearned(() => {
      const updatedRunes = [...runesLearned];
      updatedRunes[idx] = isLearned;
      return updatedRunes;
    });
  };

  return (
    <div className='talent-path-wrapper'>
      {runesLearned.map((isLearned, i) => (
        <Rune
          key={i}
          id={i}
          icon={isLearned ? path[i][0] : path[i][1]}
          isLearned={isLearned}
          isPrevRuneLearned={!i ? true : runesLearned[i - 1]}
          isNextRuneLearned={i === runesLearned.length - 1 ? false : runesLearned[i + 1]}
          updatedRunesLearned={updatedRunesLearned}
        />
      ))}
    </div>
  );
};

TalentPath.propTypes = {
  idx: PropTypes.number,
};

export default TalentPath;
