import PropTypes from 'prop-types';
import React from 'react';
import '../styles/path.css';

/**
 * A path connecting two runes
 * @param isPrevRuneLearned whether the rune to the left of the path has been learned
 * @param isNextRuneLearned whether the rune to the right of the path has been learned
 */
const Path = ({ isPrevRuneLearned, isNextRuneLearned }) => {
  const className =
    isPrevRuneLearned && isNextRuneLearned
      ? 'path filled'
      : isPrevRuneLearned && !isNextRuneLearned
      ? 'path half-filled'
      : 'path';
  return (
    <div className={className}>
      <div className='path-fill' />
    </div>
  );
};

Path.propTypes = {
  isPrevRuneLearned: PropTypes.bool.isRequired,
  isNextRuneLearned: PropTypes.bool.isRequired,
};

export default Path;
