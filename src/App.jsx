import React from 'react'
import Kanban from './components/Kanban'
const App = () => {
  return (
    <div>
      <h1 className='text-3xl bg-gradient-to-r from-blue-200 to-pink-200 font-bold underline text-neutral-500 uppercase flex justify-center items-center pt-10 pb-10'> Kanban Board</h1>
      <Kanban />
    </div>
  )
}

export default App
