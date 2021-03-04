import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import RightChevronIcon from '../../../assets/icons/RightChevronIcon';

const Breadcrumbs = ({ crumbs }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <div className={styles.breadcrumbs}>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key}>{name}</span>
        ) : (
          <Fragment>
            <Link key={key} to={path}>
              {name}
            </Link>
            <RightChevronIcon className={styles.rightChevronIcon} fill="gray" />
          </Fragment>
        )
      )}
    </div>
  );
};
export default Breadcrumbs;
