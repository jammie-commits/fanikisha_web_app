import React from "react"
import "./ManagementTeam.css"

const team = [
  {
    name: "MR. DAVID MWANGI",
    title: "Chairman, Dhahabu Group",
    photo: "../images/customer/team-1.jpg",
    bio: "Founder, member of board of Directors and Chairman in Dhahabu Land Limited. Ensures smooth running in Management & Leadership, enhancing business operations and strategy."
  },
  {
    name: "MS. GRACE KIPTOO",
    title: "MD / CEO",
    photo: "../images/customer/team-2.jpg",
    bio: "Co-Founder and CEO of Dhahabu Land Limited. Ensures standards, operations, and services are in line with the company's core values. Experienced business leader."
  },
  {
    name: "MR. BRIAN OTIENO",
    title: "General Manager",
    photo: "../images/customer/team-3.jpg",
    bio: "General Manager. Former head of sales and marketing, responsible for all sales and marketing operations, advertising, and client support."
  },
]

const ManagementTeam = () => (
  <section className="management-team-section">
    <div className="container">
      <h2 className="team-title">Management Team</h2>
      <div className="team-cards-grid">
        {team.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="team-photo">
              <img src={member.photo} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ManagementTeam 