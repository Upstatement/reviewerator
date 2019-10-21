/* eslint-disable jsx-a11y/no-onchange */
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { className } from 'utils';
import styles from './Select.module.scss';

const OPTION_HEIGHT = parseFloat(styles.varOptionHeight);

const Select = ({
  className: customClassName,
  defaultVal,
  labelText,
  options,
  property,
  reportValue,
}) => {
  const [value, setValue] = useState(defaultVal);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = e => {
    isOpen
      ? setTimeout(() => {
          setIsOpen(!isOpen);
        }, 100)
      : setIsOpen(!isOpen);
  };

  const handleChange = value => {
    setValue(value);
    reportValue(property, value);
    handleOpen();
  };

  const listHeight = useMemo(() => {
    return {
      height: isOpen === true ? `${options.length * OPTION_HEIGHT}rem` : `${OPTION_HEIGHT}rem`,
    };
  }, [isOpen, options.length]);

  return (
    <div {...className(customClassName, isOpen && styles.isOpen)}>
      <label className={styles.label} htmlFor={property}>
        {labelText}
      </label>
      <div className={styles.wrapper}>
        <select
          className={styles.select}
          onChange={handleChange}
          onMouseUp={handleOpen}
          id={property}
          value={value}>
          {options.map(({ displayText, optValue, }, i) => (
            <option className={styles.OSoption} key={`OSOption${i}`} value={optValue}>
              {displayText}
            </option>
          ))}
        </select>
        <ul className={styles.customOptionList} style={listHeight}>
          {options.map(({ displayText, optValue, }, i) => (
            <li
              {...className(styles.customOptionWrapper, optValue === value && styles.selected)}
              key={i}>
              <button
                onClick={() => handleChange(optValue)}
                className={styles.customOptionButton}
                tabIndex={isOpen ? -1 : 0}>
                {displayText}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  defaultVal: PropTypes.any.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      displayText: PropTypes.string.isRequired,
      optValue: PropTypes.any.isRequired,
    })
  ),
  property: PropTypes.string.isRequired,
  reportValue: PropTypes.func.isRequired,
};

export default Select;
