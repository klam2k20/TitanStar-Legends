import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TALENT_PATH_1, TALENT_PATH_2 } from '../constants/talentPaths';
import '../styles/talent-path.css';
import Rune from './Rune';
import Path from './Path';

const TalentPath = ({ id }) => {
  const [runesLearned, setRunesLearned] = useState([false, false, false, false]);
  const path = id === 1 ? TALENT_PATH_1 : TALENT_PATH_2;

  const updatedRunesLearned = (id, isLearned) => {
    setRunesLearned(() => {
      const updatedRunes = [...runesLearned];
      updatedRunes[id] = isLearned;
      return updatedRunes;
    });
  };

  return (
    <div className='talent-path-wrapper'>
      <h2 className='talent-path-label'>{`Talent Path ${id}`}</h2>
      <div className='talent-path'>
        {runesLearned.map((isLearned, i) => (
          <React.Fragment key={`talent-path-rune-${id}-${i}`}>
            <Rune
              key={`rune-${id}-${i}`}
              id={i}
              icon={path[i]}
              isLearned={isLearned}
              isPrevRuneLearned={!i ? true : runesLearned[i - 1]}
              isNextRuneLearned={i === runesLearned.length - 1 ? false : runesLearned[i + 1]}
              updatedRunesLearned={updatedRunesLearned}
            />
            {i < runesLearned.length - 1 && (
              <Path
                key={`path-${id}-${i}`}
                isPrevRuneLearned={runesLearned[i]}
                isNextRuneLearned={runesLearned[i + 1]}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

TalentPath.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TalentPath;
