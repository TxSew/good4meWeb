import React, { PropsWithChildren } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const DefaultLayout = ({children}: PropsWithChildren) => {
  return (
    <div className='wrapper'>
         <Header/>
          {children}
          <Footer/>
    </div>
  )
}

export default DefaultLayout