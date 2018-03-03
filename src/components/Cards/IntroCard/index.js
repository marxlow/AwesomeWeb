import Button from '../../Button/Button';
import React from 'react';

export default ({ name, aboutMe, socialMedia, profileImg }) => {
  profileImg = "http://i0.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"; //Doge
  // profileImg = "https://gph.is/17CVzSj"  //Gif
  return (
    <section class="profile-wrapper">
      <img class="profile-img" src={profileImg}  alt="Profile Image" />
      <span class="profile-title pt-2 pb-2">{name}</span>
      <span class="profile-description pb-4">{aboutMe}</span>
      <Button>Enter AwesomeWeb</Button>
    </section>
  )
}