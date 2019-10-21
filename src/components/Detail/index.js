import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ViewContext } from 'components';
import { className } from 'utils';
import styles from './detail.module.scss';

const Detail = ({ className: customClassName, }) => {
  const [state] = useContext(ViewContext);

  return (
    <section {...className(customClassName, styles.detail)}>
      {Object.keys(state).map((skill, i) => (
        <article key={i} className={styles.skill}>
          <h1 className={styles.skillName}>{state[skill].displayText}</h1>
          <h2 className={styles.skillLevel}>{state[skill].level}</h2>
          <div {...className(styles.levelBar, isNaN(state[skill].level) && styles.notApplicable)}>
            {[...Array(state[skill].level)].map((undefined, idx) => (
              <div key={`${idx}-of-${skill}`} className={styles.levelBlock}>
                <span
                  {...className(
                    styles.levelNumber,
                    state[skill].level === idx && styles.currentLevel
                  )}>
                  {idx + 1}
                </span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

Detail.propTypes = {
  className: PropTypes.string,
};

export default Detail;
