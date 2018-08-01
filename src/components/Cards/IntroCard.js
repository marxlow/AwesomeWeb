import React from 'react';

const IntroCard = ({ name, aboutMe, profileImg }) => {
	return (
		<div className="d-flex flex-column align-items-center">
			<img className="profile-img" src={profileImg} alt="Profile Image" />
			<span className="profile-title pt-2 pb-2">{name}</span>
			<span className="profile-description pb-4 col-6 text-center">{aboutMe}</span>
		</div>
	)
}

export default IntroCard;