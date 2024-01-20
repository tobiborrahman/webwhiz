import React from 'react';
import Banner from '../pages/Banner/Banner';
import Portfolio from '../pages/Portfolio/Portfolio';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import Review from '../pages/Review/Review';
import Blog from '../pages/Blog/Blog';

const Home = () => {
	return (
		<div>
			<Banner />
			<Portfolio />
			<About />
			<Services />
			<Review />
			<Contact />
			<Blog />
		</div>
	);
};

export default Home;
