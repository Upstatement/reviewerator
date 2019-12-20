import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { className } from 'utils';
import styles from './skillLevelRadio.module.scss';

const Radio = ({ defaultVal, labelText, options, property, reportValue }) => {
  const [value, setValue] = useState(defaultVal);
  const [isTarget, setIsTarget] = useState(false);

  const handleChange = e => {
    setValue(parseInt(e.target.value));
  };

  const handleClick = isChecked => {
    setIsTarget(isChecked && !isTarget);
  };

  useEffect(() => {
    reportValue(property, value);
    // eslint-disable-next-line
  }, [value]);

  return (
    <div className={styles.levelBar}>
      {options.map(({ optValue, valueText }, i) => (
        <div
          key={i}
          {...className(
            styles.levelBlock,
            optValue === value && styles.currentLevel,
            optValue <= value && styles.achieved,
            isTarget && optValue === value + 1 && styles.target,
          )}>
          <label htmlFor={`${property}-${valueText}`} className={styles.levelBlockLabel}>
            <input
              checked={value === optValue}
              className={styles.levelBlockInput}
              id={`${property}-${valueText}`}
              name={property}
              onChange={handleChange}
              onClick={() => handleClick(value === optValue)}
              type="radio"
              value={optValue}
            />
          </label>
        </div>
      ))}
      <h1 className={styles.skillName}>{labelText}</h1>
    </div>
  );
};

Radio.propTypes = {
  defaultVal: PropTypes.any.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      displayText: PropTypes.string.isRequired,
      optValue: PropTypes.any.isRequired,
      valueText: PropTypes.string.isRequired,
    }),
  ),
  property: PropTypes.string.isRequired,
  reportValue: PropTypes.func.isRequired,
};

export default Radio;
