// @flow
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'antd/dist/antd.css';
import Navbar from '../../components/shared/Navbar';
import IntroCard from '../../components/Cards/IntroCard';
import DomainCard from '../../components/Cards/DomainCard';
import { DOMAINS } from '../../constants';

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
        <section className="bg-brand-secondary">
          <Slider
            dots={true}
            infinite={true}
            autoplay={true}
            dots={true}
            pauseOnDotsHover={true}
            speed={1000}
            autoplaySpeed={5000}
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
        <section className="bg-brand-secondary mt-4">
          <span> Hello world </span>
        </section>
      </div >
    );
  }
}

export default SplashLayout;