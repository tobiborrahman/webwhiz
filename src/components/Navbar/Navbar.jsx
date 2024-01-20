// import React from 'react';
// import logo from '../../assets/images/logoo.png';

// const Navbar = () => {
// 	return (
// 		<div className="container mx-auto flex justify-between items-center py-4">
// 			<img src={logo} alt="" />
// 			<nav>
// 				<ul className="flex justify-center items-center gap-6">
// 					<li>Home</li>
// 					<li>Portfolio</li>
// 					<li>About Us</li>
// 					<li>Services</li>
// 					<li>Testimonials</li>
// 					<li>Blog</li>
// 					<button className="btn-1">Contact</button>
// 				</ul>
// 			</nav>
// 		</div>
// 	);
// };

// export default Navbar;

import React, { useState } from 'react';
import logo from '../../assets/images/logoo.png';
import { FaClock, FaMendeley } from 'react-icons/fa';

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-4">
			<div className="flex justify-between items-center">
				<img src={logo} alt="Logo" className="mb-4 lg:mb-0" />

				<div className="lg:hidden ml-4">
					<button onClick={toggleMenu} className="focus:outline-none">
						{isMenuOpen ? (
							<FaMendeley className="text-black" />
						) : (
							<FaClock className="text-black" />
						)}
					</button>
				</div>
			</div>

			{/* Navigation links */}
			<nav
				className={`${
					isMenuOpen ? 'block' : 'hidden'
				} lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0`}
			>
				<ul className="flex flex-col lg:flex-row justify-center items-center lg:gap-6">
					<li className="mb-2 lg:mb-0">Home</li>
					<li className="mb-2 lg:mb-0">Portfolio</li>
					<li className="mb-2 lg:mb-0">About Us</li>
					<li className="mb-2 lg:mb-0">Services</li>
					<li className="mb-2 lg:mb-0">Testimonials</li>
					<li className="mb-2 lg:mb-0">Blog</li>
					<button className="btn-1 mt-4 lg:mt-0">Contact</button>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
