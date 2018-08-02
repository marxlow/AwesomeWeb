// @flow
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'antd/dist/antd.css';
import Navbar from '../../components/shared/Navbar';
import IntroCard from '../../components/Cards/IntroCard';
import DomainCard from '../../components/Cards/DomainCard';
import ProjectCard from '../../components/Cards/ProjectCard';
import { DOMAINS, PROJECTS } from '../../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class SplashLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = "Marx Low";
    const aboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis congue quam et sodales. Phasellus ac lacus sapien. Mauris venenatis.";
    const profileImg = "profile_picture.jpg";
    return (
      <div>
        <section className="bg-brand-primary">
          <div>
            <Navbar name="M.L" />
          </div>
          <div className="col-12 pt-4">
            <IntroCard
              name={name}
              aboutMe={aboutMe}
              profileImg={profileImg}
            />
          </div>
        </section>
        <section className="py-4">
          <Slider
            infinite={true}
            autoplay={true}
            dots={true}
            pauseOnDotsHover={true}
            speed={1000}
            autoplaySpeed={3000}
          >
            {DOMAINS.map((domain, index) => {
              return (
                <DomainCard
                  key={index}
                  title={domain.title}
                  backgroundImg={domain.backgroundImg}
                  skills={domain.skills}
                />
              );
            })}
          </Slider>
        </section>
        <section className="py-4 my-2 bg-brand-secondary">
          <div className="container">
            <div className="row justify-content-center w-100">
              <h1>Experience</h1>
            </div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
              >
                <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Agolo, New York</h4>
                <p>Lorem Ipsum</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Commandiv, New York</h4>
                <p>Lorem Ipsum</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Backend Software Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Trabble, Singapore</h4>
                <p>Lorem Ipsum</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section >
        <section className="py-4">
          <div className="container">
            <div className="row justify-content-center w-100">
              <h1 className="text-center">Projects</h1>
            </div>
            <div className="row w-100">
              <div className="col-md-8">
                <img className="project-img" src="logos/tetris_logo.png" alt="" />
              </div>
              <div className="col-md-4 text-center">
                {/* <h3 className="my-3">Details</h3> */}
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-4 bg-brand-secondary">
          <div className="container">
            <div className="row justify-content-center w-100">
              <h1 className="text-center">Notable School Modules</h1>
            </div>
          </div>
        </section>
      </div >
    );
  }
}


export default SplashLayout;

// <div className="d-flex flex-column align-items-center">
// <div className="row col-10 col-md-8">
//   <div className="col-9">
//     <h1> Agolo</h1>
//     <ul>
//       <li> Did something 1</li>
//       <li> Did something again </li>
//     </ul>
//   </div>
//   <div className="col-3">
//     <h1> Agolo Logo</h1>
//   </div>
// </div >
// </div >