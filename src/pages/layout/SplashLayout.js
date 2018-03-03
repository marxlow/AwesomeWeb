// @flow

import { Link, Route } from 'react-router';
import React, { Component } from 'react';

import IntroCard from '../../components/Cards/IntroCard';
import ProfileImg from '../../images/upstate_headshot.jpg';

class SplashLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = "Marx Low";
    const aboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis congue quam et sodales. Phasellus ac lacus sapien. Mauris venenatis.";
    const socialMedia = [
      { name: "FaceBook", url: "https://FacebookURL" },
      { name: "Twitter", url: "https://TwitterURL" },
      { name: "Instagram", url: "https://InstagramURL" },
      { name: "Github", url: "https://GithubURL" },
      { name: "LinkedIn", url: "https://linkedInURL" },
    ]
    const profileImg = "ProfileImg";
    return (
      <div className="splash-layout">
        <IntroCard
          name={name}
          aboutMe={aboutMe}
          socialMedia={socialMedia}
          profileImg={ProfileImg}
        />
      </div>
    );
  }
}

export default SplashLayout;