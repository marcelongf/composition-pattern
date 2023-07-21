type titleProps = {
  titleAlign?: 'left' | 'right' | 'center'
  children: string
}

const alignTitleStrategy = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
}

export const Title = (props: titleProps) => {
  const { 
    titleAlign = 'center',
    children
  } = props;

  return (
    <h3 style={{alignSelf: alignTitleStrategy[titleAlign]}} >{children}</h3>
  );
}