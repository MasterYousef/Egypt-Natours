import React from 'react'
import './All-Storis.css'
function layout({ children }) {
  return (
    <main className=''>
        <div>
            { children }
        </div>
        
    </main>
  )
}

export default layout