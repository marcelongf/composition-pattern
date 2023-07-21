import styles from './index.module.css';

type ButtonProps = {
  onActionClick: () => void
  children: string
}

export const Button = (props: ButtonProps) => {
  const { children, onActionClick, ...rest } = props
  return (
    <button 
      onClick={onActionClick} 
      className={styles['action-button']} 
      {...rest} 
    >{children}</button>
  )
}