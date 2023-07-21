import { ReactNode } from 'react';
import styles from './index.module.css';

type TextProps = {
  children: ReactNode
}

export const Text = (props: TextProps) => {
  const { children, ...rest } = props
  return (
    <p className={styles['text-container']} {...rest} >{children}</p>
  )
}