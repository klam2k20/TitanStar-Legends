import PropTypes from 'prop-types';
import React from 'react';
import { useAvailablePoints } from '../hooks/useAvailablePoints';
import '../styles/rune.css';
import '../styles/utilities.css';

/**
 * A single rune that can be learned
 * @param id the rune's id
 * @param icon the rune's icon image
 * @param isLearned whether the rune has been learned
 * @param isPrevRuneLearned whether the previous rune has been learned
 * @param isNextRuneLearned whether the next rune has been learned
 * @param updatedRunesLearned a function to update the rune's learned state in TalentPath
 */
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
      className={`flex-row rune-wrapper ${isLearned ? 'learned' : ''}`}
      onClick={handleClick}
      onContextMenu={handleRighClick}>
      <img alt={`Rune ${id}`} src={icon} />
      <div className='rune-overlay' />
      <div className='rune-outline' />
    </div>
  );
};

Rune.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  isLearned: PropTypes.bool.isRequired,
  isPrevRuneLearned: PropTypes.bool.isRequired,
  isNextRuneLearned: PropTypes.bool.isRequired,
  updatedRunesLearned: PropTypes.func.isRequired,
};

export default Rune;
