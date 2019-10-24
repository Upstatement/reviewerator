import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ViewContext } from 'components';
import { className } from 'utils';
import { options } from 'data';
import styles from './detail.module.scss';

const Detail = ({ className: customClassName, }) => {
  const [state] = useContext(ViewContext);

  return (
    <section {...className(customClassName, styles.detail)}>
      <h1 className={styles.header}>Performance Chart</h1>
      <div className={styles.chart}>
        <div className={styles.dividers}>
          {options.map((option, i) => (
            <div className={styles.divider} key={`divider-${i}`} />
          ))}
        </div>
        <div className={styles.skills}>
          {Object.keys(state).map((skill, i) => (
            <article key={i} className={styles.skill}>
              <div
                {...className(styles.levelBar, isNaN(state[skill].level) && styles.notApplicable)}>
                {[...Array(state[skill].level)].map((undefinedPlaceholder, idx) => (
                  <div key={`${idx}-of-${skill}`} className={styles.levelBlock} />
                ))}
              </div>
              <h1 className={styles.skillName}>{state[skill].displayText}</h1>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.labels}>
        {options.map((option, i) => {
          if (i > 0) {
            return <span key={`skill-label-${i}`}>{option.displayText}</span>;
          } else {
            return '';
          }
        })}
      </div>
    </section>
  );
};

Detail.propTypes = {
  className: PropTypes.string,
};

export default Detail;
