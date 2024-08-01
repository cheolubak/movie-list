import { ReactNode } from 'react';

import styles from './List.module.css';

interface Props {
  children: ReactNode;
}

export const List = ({ children }: Props) => {
  return <main className={styles.list}>{children}</main>;
};
