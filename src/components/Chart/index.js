import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ViewContext } from 'components';
import { className } from 'utils';
import { staff, manager, levels } from 'data';
import styles from './chart.module.scss';
import { Select, SkillLevelRadio } from 'components';

const Chart = ({ className: customClassName, }) => {
  const [context, setContext] = useContext(ViewContext);

  const roleOptions = [
    {
      displayText: 'Manager',
      optValue: 'manager',
    },
    {
      displayText: 'Staff',
      optValue: 'staff',
    }
  ];

  const updateContext = (property, value) => {
    const update = {};
    update[property] = { ...context[property], level: value, };
    setContext(context => ({ ...context, ...update, }));
  };

  const resetContext = newContextName => {
    // Get the new context object based on the string
    // value reported by our select element.
    let newContext = {};
    if (newContextName === 'staff') {
      newContext = { ...staff, };
    } else if (newContextName === 'manager') {
      newContext = { ...manager, };
    }

    // Find any properties on the old context that are present
    // in the new context, and carry over their old value to the
    // new context.
    Object.keys(newContext).forEach(property => {
      if (context[property]) {
        newContext[property] = context[property];
      }
    });

    // Overwrite the old context with the new one.
    setContext(newContext);
  };

  return (
    <section {...className(customClassName, styles.chartWrapper)}>
      <h1 className={styles.header}>
        <Select
          defaultVal={roleOptions[0].optValue}
          options={roleOptions}
          reportValue={resetContext}
        />
        Performance Chart
      </h1>
      <div className={styles.chart}>
        <div className={styles.dividers}>
          {[...Array(levels.length + 1)].map((undefinedPlaceholder, i) => (
            <div className={styles.divider} key={`divider-${i}`} />
          ))}
        </div>
        <div className={styles.skills}>
          {Object.keys(context).map((skill, i) => (
            <article key={i} className={styles.skill}>
              <SkillLevelRadio
                options={levels}
                defaultVal={1}
                labelText={context[skill].displayText}
                property={skill}
                reportValue={updateContext}
              />
            </article>
          ))}
        </div>
      </div>
      <div className={styles.labels}>
        {levels.map((level, i) => (
          <span key={`skill-label-${i}`}>{level.displayText}</span>
        ))}
      </div>
    </section>
  );
};

Chart.propTypes = {
  className: PropTypes.string,
};

export default Chart;
