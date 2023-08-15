import React, { PropsWithChildren } from 'react'
 import './Globalstyle.scss'
 import './Responsive.scss'
 import 'react-toastify/dist/ReactToastify.css';
const Globalstyle = ({children}:PropsWithChildren) => {
  return (
    <>{children}</>
  )
}

export default Globalstyle