import styles from './NotFoundBlock.module.scss';

import { ReturnComponentType } from 'types';

export const NotFoundBlock = (): ReturnComponentType => (
  <h1 className={styles.root}>Ничего не найдено :(</h1> // TODO: Styles
);
