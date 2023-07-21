import styles from './index.module.css';

type CardProps = {
  title: string
  titleAlign?: 'left' | 'right' | 'center'
  text: string
  hasActionButton?: boolean
  buttonLabel?: string
  onActionClick?: () => void
  textBackgroundColor?: string
  textColor?: string 
}

const alignTitleStrategy = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
}

export const Card = ({ 
  title, 
  text, 
  hasActionButton = false, 
  onActionClick, 
  buttonLabel, 
  titleAlign = 'center',
  textBackgroundColor = 'transparent',
  textColor = 'var(--gray)' 
}: CardProps) => {

  return (
    <div className={styles.container}>
      <h3 style={{alignSelf: alignTitleStrategy[titleAlign]}} >{title}</h3>
      <p style={{ 
        backgroundColor: textBackgroundColor,
        color: textColor
       }} 
       className={styles['text-container']}
       >{text}</p>
      {hasActionButton && (
        <button onClick={onActionClick} className={styles['action-button']} >{buttonLabel}</button>
      )}
    </div>
  )
}