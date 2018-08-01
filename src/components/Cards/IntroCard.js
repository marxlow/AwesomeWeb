import React from 'react';

const IntroCard = ({ name, aboutMe, profileImg }) => {
	return (
		<div className="d-flex flex-column align-items-center">
			<img className="profile-img" src={profileImg} alt="Profile Image" />
			<h1 className="profile-title pt-2 pb-2">{name}</h1>
			<h2 className="profile-description pb-4 col-6 text-center">{aboutMe}</h2>
		</div>
	)
}

export default IntroCard;