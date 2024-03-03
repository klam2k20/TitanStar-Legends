import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { TALENT_PATH_1, TALENT_PATH_2 } from '../constants/talentPaths';
import '../styles/talent-path.css';
import Path from './Path';
import Rune from './Rune';

/**
 * A talent path that contains a set of runes that can be learned in order
 * @param id the talent path id
 */
const TalentPath = ({ id }) => {
  const [runesLearned, setRunesLearned] = useState([false, false, false, false]);
  const path = id === 1 ? TALENT_PATH_1 : TALENT_PATH_2;

  /**
   * Updates the learned state of a rune within runesLearned
   * @param id the index of the rune to update
   * @param isLearned the new learned state of the rune
   */
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
              id={id === 1 ? i : i + 4}
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
