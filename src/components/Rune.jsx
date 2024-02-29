import React from 'react';
import PropTypes from 'prop-types';
import '../styles/rune.css';

const Rune = ({ icon, isLearned, isPrevRuneLearned, isNextRuneLearned }) => {
  const handleClick = () => console.log('Left Click');
  const handleRighClick = (e) => {
    e.preventDefault();
    console.log('Right Click');
  };

  return (
    <div className='rune-wrapper' onClick={handleClick} onContextMenu={handleRighClick}>
      <img alt='' src={icon} />;
    </div>
  );
};

Rune.propTypes = {
  icon: PropTypes.string,
  isLearned: PropTypes.bool,
  isPrevRuneLearned: PropTypes.bool,
  isNextRuneLearned: PropTypes.bool,
};

export default Rune;
