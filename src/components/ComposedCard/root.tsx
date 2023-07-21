import { ReactNode } from 'react';
import styles from './index.module.css';

type RootProps = {
  children: ReactNode
}

export const Root = ({ children }: RootProps) => (
  <div className={styles.container} >
    {children}
  </div>
)