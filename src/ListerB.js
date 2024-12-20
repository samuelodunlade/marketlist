import AddItem from "./lister_componentb/AddItem"
import Header from "./lister_componentb/Header"
import Content from "./lister_componentb/Content"
import Footer from "./lister_componentb/Footer"
import { useState } from "react"

// this will not use prop drilling to pass list of shopping list to the components

const ListerB = () => {

  return (
    <div className="container">
        <h1>Lister B: context api</h1>
        <Header/>
        <AddItem/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default ListerB