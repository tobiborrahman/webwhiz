import React from 'react';
import logo from '../../assets/images/logoo.png';

const Navbar = () => {
	return (
		<div className="container mx-auto flex justify-between items-center py-4">
			<img src={logo} alt="" />
			<nav>
				<ul className="flex justify-center items-center gap-6">
					<li>Home</li>
					<li>Portfolio</li>
					<li>About Us</li>
					<li>Services</li>
					<li>Testimonials</li>
					<li>Blog</li>
					<button className="btn-1">Contact</button>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
