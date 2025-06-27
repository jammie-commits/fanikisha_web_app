import React from "react"
import "./WhyChooseUs.css"

const valueProps = [
  {
    icon: "fa-solid fa-road",
    title: "Value-Added Projects",
    desc: "All our projects are value added with graded access roads, electric fence, entrance/exit gates and water borehole. All our plots have ready title deeds."
  },
  {
    icon: "fa-solid fa-certificate",
    title: "Fast Title Deed Delivery",
    desc: "Our delivery period for the title deed presentation is unmatched—just 30 days after paperwork and payment."
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Suitable Properties",
    desc: "We have projects in developed areas suitable for immediate development with title deeds."
  },
  {
    icon: "fa-solid fa-users",
    title: "Customer Experience",
    desc: "We offer outstanding customer service and a flexible installment payment plan of up to 10 months."
  },
  {
    icon: "fa-solid fa-key",
    title: "Freehold",
    desc: "All our plots are freehold and have a title fee that varies as per county charges. No hidden charges."
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "No Hidden Charges",
    desc: "There are no further hidden charges. Title fee is not included in plot price and varies by county."
  },
]

const WhyChooseUs = () => (
  <section className="why-choose-us-section">
    <div className="container">
      <h2 className="why-title">Why Choose Us</h2>
      <div className="why-cards-grid">
        {valueProps.map((item, idx) => (
          <div className="why-card" key={idx}>
            <div className="why-icon">
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhyChooseUs 