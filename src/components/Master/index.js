import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ViewContext, Select } from 'components';
import { className } from 'utils';
import styles from './master.module.scss';

const Master = ({ children, className: customClassName, }) => {
  const [state, setState] = useContext(ViewContext);

  const options = [
    {
      displayText: "I don't know.",
      optValue: 'n/a',
    },
    {
      displayText: 'Needs Improvement',
      optValue: 1,
    },
    {
      displayText: 'Learning & Building',
      optValue: 2,
    },
    {
      displayText: 'Full/Consistent Impact',
      optValue: 3,
    },
    {
      displayText: 'Exceptional Impact',
      optValue: 4,
    }
  ];

  const updateContext = (property, value) => {
    const update = {};
    update[property] = { ...state[property], level: value, };
    setState(state => ({ ...state, ...update, }));
  };

  return (
    <div {...className(customClassName, styles.master)}>
      {children}
      {Object.keys(state).map((skill, i) => (
        <div key={i} style={{ position: 'relative', zIndex: 100 - i, }}>
          <Select
            className={styles.input}
            defaultVal={state[skill].level}
            labelText={state[skill].displayText}
            options={options}
            property={skill}
            reportValue={updateContext}
          />
        </div>
      ))}
    </div>
  );
};

Master.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Master;
