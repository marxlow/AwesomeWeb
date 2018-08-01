import React from 'react';

const DomainCard = ({ title, backgroundImg, skills }) => {
  return (
    <div className="d-flex flex-column align-items-center pt-4 col-12">
      <section className="row text-center">
        <h2>{title}</h2>
      </section>
      <section className="row justify-content-around col-12 col-md-10">
        {skills.map((skill, index) => {
          return (
            <div className="card col-5 col-md-4 mt-2 mx-1 align-items-center" key={index}>
              <img className="skill-img px-md-0 px-2" src={skill.image} alt="Skill image" />
              <div className="p-2">
                {/* <h5 className="card-title">{skill.name}</h5> */}
                <span>{`Experience: ${skill.experience}`}</span>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default DomainCard;