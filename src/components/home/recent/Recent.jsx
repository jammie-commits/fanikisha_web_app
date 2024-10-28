import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Prime Plots for Sale' subtitle='Get yourself a prime plot in fast growing areas with ready title deeds.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
