import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"

import Media from "../media/Media"

import Contact from "../contact/Contact"
import Properties from "../properties/Properties"
import PropertyDetails from "../propertydetails/PropertyDetails"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/properties' component={Properties} />
          <Route exact path='/properties/:id' component={PropertyDetails} />
          <Route exact path='/media' component={Media} />
          
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
