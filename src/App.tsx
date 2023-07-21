import { useState } from 'react'
import { Card } from './components/Card'
import { ComposedCard } from './components/ComposedCard'

import './App.css'

function App() {
  const [toggleCardText, setToggleCardText] = useState<boolean>(false);
  return (
    <div className='blog-posts-container'>
      {/* Complete card without composition */}
      <Card 
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        title='Complete without composition' 
        hasActionButton
        buttonLabel='Action'
        textBackgroundColor='var(--light-gray)'
        textColor='black'
        onActionClick={() => console.log('hello world!')}
        titleAlign='center'
      />
      {/* basic card without composition */}
      <Card 
        text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'      
        title='Basic without composition'
      />
      {/* Compoele card with composition */}
      <ComposedCard.Root>
        <ComposedCard.Title>Complete with composition</ComposedCard.Title>
        <ComposedCard.Text>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </ComposedCard.Text>
        <ComposedCard.Button onActionClick={() => console.log('hello world!')} >Action</ComposedCard.Button>
      </ComposedCard.Root>
      {/* Basic card with composition */}
      <ComposedCard.Root>
        <ComposedCard.Title>Basic with composition</ComposedCard.Title>
        <ComposedCard.Text>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </ComposedCard.Text>
      </ComposedCard.Root>
      {/* Interactive card with composition */}
      <ComposedCard.Root>
        <ComposedCard.Title>You can even interact with it!</ComposedCard.Title>
        <ComposedCard.Button onActionClick={() => setToggleCardText((state) => !state)}>{toggleCardText ? 'Hide text': 'Show text'}</ComposedCard.Button>
        {toggleCardText && (
          <ComposedCard.Text>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </ComposedCard.Text>
        )}
      </ComposedCard.Root>
    </div>
  )
}

export default App
