// rafce: react arrow function with export.
import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
const layout = (props) => {
  return (
    <div>
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </div>
  )
}

export default layout
