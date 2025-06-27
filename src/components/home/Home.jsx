import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Recent from "./recent/Recent"
import WhyChooseUs from "./WhyChooseUs"
import ManagementTeam from "./ManagementTeam"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <WhyChooseUs />
      <ManagementTeam />
      <Recent />
      <Awards />
      <Location />
    </>
  )
}

export default Home
