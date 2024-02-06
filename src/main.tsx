import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/app.css'
import Internalization from './Internalization'

import PageCustomizeWardRobe from '@/components/pages/customizeWardRobe'


const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Internalization >
          <PageCustomizeWardRobe />
        </Internalization>
    </React.StrictMode>,
  )  
}
