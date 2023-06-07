import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title1, title2, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title1}>{title1}</h2>
      <h2 className={css.title2}>{title2}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  children: PropTypes.element,
};
