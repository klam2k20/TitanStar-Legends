import React from 'react';
import PropTypes from 'prop-types';
import '../styles/path.css';

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
  isPrevRuneLearned: PropTypes.bool,
  isNextRuneLearned: PropTypes.bool,
};

export default Path;
