import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useAvailablePoints } from '../hooks/useAvailablePoints';
import '../styles/rune.css';
import '../styles/utilities.css';
import { useToast } from '../hooks/useToast';

/**
 * A single rune that can be learned
 * @param id the rune's id
 * @param path the talent path the rune is in
 * @param icon the rune's icon image
 * @param isLearned whether the rune has been learned
 * @param isPrevRuneLearned whether the previous rune has been learned
 * @param isNextRuneLearned whether the next rune has been learned
 * @param updatedRunesLearned a function to update the rune's learned state in TalentPath
 */
const Rune = ({
  id,
  path,
  icon,
  isLearned,
  isPrevRuneLearned,
  isNextRuneLearned,
  updatedRunesLearned,
}) => {
  const { availablePoints, addPoint, removePoint } = useAvailablePoints();
  const { showToast } = useToast();

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
      showToast('Rune Mastered!');
    } else if (!availablePoints) showToast('Insufficient Points!', 0);
    else if (!isPrevRuneLearned) showToast('Runes Must be Mastered in Order!', 0);
    else showToast('Rune Already Mastered!', 0);
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
      showToast('Rune Reset!');
    } else if (isNextRuneLearned) showToast('Runes Must be Reset in Order!', 0);
    else showToast('Rune not Mastered!', 0);
  };

  return (
    <div
      className={`flex-row rune-wrapper ${isLearned ? 'learned' : ''}`}
      onClick={handleClick}
      onContextMenu={handleRighClick}
      data-testid={`${path}-${id}`}>
      <img alt={`Talent Path ${path} Rune ${id}`} src={icon} />
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
