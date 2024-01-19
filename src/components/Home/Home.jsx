import React from 'react';
import Banner from '../pages/Banner/Banner';
import Portfolio from '../pages/Portfolio/Portfolio';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Review from '../pages/Review/Review';

const Home = () => {
	return (
		<div>
			<Banner />
			<Portfolio />
			<About />
			<Services />
			<Review />
		</div>
	);
};

export default Home;
