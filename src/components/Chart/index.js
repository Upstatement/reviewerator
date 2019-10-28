import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ViewContext } from 'components';
import { className } from 'utils';
import { options } from 'data';
import styles from './chart.module.scss';
import { SkillLevelRadio } from 'components';

const Chart = ({ className: customClassName, }) => {
  const [context, setContext] = useContext(ViewContext);

  const updateContext = (property, value) => {
    const update = {};
    update[property] = { ...context[property], level: value, };
    setContext(context => ({ ...context, ...update, }));
  };
  };

  return (
    <section {...className(customClassName, styles.chartWrapper)}>
      <h1 className={styles.header}>Performance Chart</h1>
      <div className={styles.chart}>
        <div className={styles.dividers}>
          {[...Array(options.length + 1)].map((undefinedPlaceholder, i) => (
            <div className={styles.divider} key={`divider-${i}`} />
          ))}
        </div>
        <div className={styles.skills}>
          {Object.keys(context).map((skill, i) => (
            <article key={i} className={styles.skill}>
              <SkillLevelRadio
                options={options}
                defaultVal={context[skill].level}
                labelText={context[skill].displayText}
                property={skill}
                reportValue={updateContext}
              />
            </article>
          ))}
        </div>
      </div>
      <div className={styles.labels}>
        {options.map((option, i) => (
          <span key={`skill-label-${i}`}>{option.displayText}</span>
        ))}
      </div>
    </section>
  );
};

Chart.propTypes = {
  className: PropTypes.string,
};

export default Chart;
