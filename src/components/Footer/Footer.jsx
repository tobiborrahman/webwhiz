import React from 'react';
import star from '../../assets/images/star.png';
import logo2 from '../../assets/images/logo-2.png';
import {
	FaBehance,
	FaDribbble,
	FaLinkedinIn,
	FaMailBulk,
	FaTelegramPlane,
	FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="container mx-auto pt-20 pb-10 bg-[#0E1025]">
			<div className="md:flex justify-between items-center">
				<div>
					<h5 className="text-xl text-[var(--caption)] mb-2">
						Join Us
					</h5>
					<div className="flex  md:justify-center items-center mb-5">
						<h2 className="text-2xl md:text-3xl font-bold text-white">
							Subscribe for Newsletter{' '}
						</h2>
						<img className="ml-14 md:ml-2 mt-2" src={star} alt="" />
					</div>
				</div>
				<div>
					<div className="join ">
						<input
							className="input w-[300px] bg-transparent placeholder:text-gray-500 border-[.01px] border-r-0 border-gray-500 rounded-l-full"
							placeholder="Enter Your Email"
						/>
						<button className="btn-1 -ml-[50px] border-0 rounded-l-full">
							Subscribe
						</button>
					</div>
				</div>
			</div>

			<footer className="footer mt-10 text-gray-500">
				<aside>
					<img src={logo2} alt="" />
					<p>
						Customer Feedback Analytic like it was <br /> Supposed
						to be!
					</p>
					<div>
						<h1 className="text-xl font-thin text-white">
							Social Links
						</h1>

						<div className="flex justify-between mt-3 items-center gap-3">
							<FaTwitter className="w-[24px] h-[24px] rounded-full p-[6px] bg-gray-800 text-white" />
							<FaLinkedinIn className="w-[24px] h-[24px] rounded-full p-[6px] bg-gray-800 text-white" />
							<FaTelegramPlane className="w-[24px] h-[24px] rounded-full p-[6px] bg-gray-800 text-white" />
							<FaBehance className="w-[24px] h-[24px] rounded-full p-[6px] bg-gray-800 text-white" />
							<FaDribbble className="w-[24px] h-[24px] rounded-full p-[6px] bg-gray-800 text-white" />
						</div>
					</div>
				</aside>
				<nav>
					<header className="text-xl text-white">Company</header>
					<a className="link link-hover">Home</a>
					<a className="link link-hover">About Us</a>
					<a className="link link-hover">Career</a>
					<a className="link link-hover">Press</a>
				</nav>
				<nav>
					<header className="text-xl text-white">Our Services</header>
					<a className="link link-hover">UI/UX Design</a>
					<a className="link link-hover">E-commerce</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Free Delivery</a>
				</nav>
				<nav>
					<header className="text-xl text-white">Contact</header>
					<a className="link link-hover flex">
						<FaMailBulk className="mt-[6px] mr-2" />{' '}
						alexgoat@gmail.com
					</a>
					<a className="link link-hover flex">
						<FaMailBulk className="mt-[6px] mr-2" />{' '}
						alexgoat@gmail.com
					</a>
					<a className="link link-hover flex">
						<FaMailBulk className="mt-[6px] mr-2" />{' '}
						alexgoat@gmail.com
					</a>
					<a className="link link-hover flex">
						<FaMailBulk className="mt-[6px] mr-2" />{' '}
						alexgoat@gmail.com
					</a>
				</nav>
			</footer>
			<div className="mt-7">
				<hr className="text-gray-800" />
				<h4 className="text-center text-white mt-5">
					&copy; Copyright 2K24 E-learner, USA
				</h4>
			</div>
		</div>
	);
};

export default Footer;
