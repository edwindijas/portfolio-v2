import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/app.css'
import Internalization from './Internalization'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Internalization >
          <div className='font-bold h-full w-full flex items-center justify-center' >Coming Soon</div>
        </Internalization>
    </React.StrictMode>,
  )  
}
