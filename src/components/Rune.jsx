import React from 'react';
import PropTypes from 'prop-types';
import '../styles/rune.css';
import { useAvailablePoints } from '../hooks/useAvailablePoints';

const Rune = ({
  id,
  icon,
  isLearned,
  isPrevRuneLearned,
  isNextRuneLearned,
  updatedRunesLearned,
}) => {
  const { availablePoints, addPoint, removePoint } = useAvailablePoints();

  /**
   * Handles left clicks to learn a rune
   * A rune can be learned if it hasn't yet been learned,
   * all the previous runes before it within the talent
   * path have been learned, and there is at least one
   * available point
   */
  const handleClick = () => {
    if (!isLearned && isPrevRuneLearned && availablePoints) {
      removePoint();
      updatedRunesLearned(id, true);
    }
  };

  /**
   * Handles right clicks to unlearn a rune
   * A rune can be unlearned if its been learned and
   * none of the runes ahead of it are learned
   *
   */
  const handleRighClick = (e) => {
    e.preventDefault();
    if (isLearned && !isNextRuneLearned) {
      addPoint();
      updatedRunesLearned(id, false);
    }
  };

  return (
    <div
      className={`rune-wrapper ${isLearned ? 'learned' : ''}`}
      onClick={handleClick}
      onContextMenu={handleRighClick}>
      <img alt='' src={icon} />
      <div className='rune-overlay' />
      <div className='rune-outline' />
    </div>
  );
};

Rune.propTypes = {
  id: PropTypes.number,
  icon: PropTypes.string,
  isLearned: PropTypes.bool,
  isPrevRuneLearned: PropTypes.bool,
  isNextRuneLearned: PropTypes.bool,
  updatedRunesLearned: PropTypes.func,
};

export default Rune;
