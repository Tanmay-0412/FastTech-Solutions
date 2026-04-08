import React from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Schott Watkins",
    role: "Web Developer",
    image: "/images/pexels-andrea-piacquadio-845434.jpg",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/login",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/"
    }
  },
  {
    name: "Nicole Bell",
    role: "Mobile Developer",
    image: "/images/pexels-vinicius-wiesehofer-1130624.jpg",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/login",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/"
    }
  },
  {
    name: "John Doe",
    role: "Graphic Designer",
    image: "/images/pexels-hussein-altameemi-2776353.jpg",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/login",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/"
    }
  },
  {
    name: "Rose Matthews",
    role: "Web Designer",
    image: "/images/pexels-andrea-piacquadio-745136.jpg",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/login",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/"
    }
  }
];

const TeamSection = () => (
  <section className="team" style={{ marginTop: "7rem" }}>
    <h1 className="heading" style={{ marginTop: "-1.5rem" }} id="team">Our team</h1>
    <div className="team-row">
      {teamMembers.map((member, idx) => (
        <div className="team-card" key={idx}>
          <div className="team-image">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="team-info">
            <h3>{member.name}</h3>
            <span>{member.role}</span>
            <div className="team-icons">
              <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="fab fa-facebook-f"></a>
              <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="fab fa-twitter"></a>
              <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></a>
              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
