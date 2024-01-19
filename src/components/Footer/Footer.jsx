import React from 'react';
import star from '../../assets/images/star.png';
import logo2 from '../../assets/images/logo-2.png';
import {
	FaBehance,
	FaBehanceSquare,
	FaDribbble,
	FaFacebook,
	FaFacebookF,
	FaLinkedin,
	FaLinkedinIn,
	FaMailBulk,
	FaTelegram,
	FaTelegramPlane,
	FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="container mx-auto py-20 bg-[#0E1025]">
			<div className="md:flex justify-between items-center">
				<div>
					<h5 className="text-xl text-[var(--caption)] mb-2">
						About Us
					</h5>
					<div className="flex justify-center items-center">
						<h2 className="text-3xl font-bold text-white">
							Subscribe for Newsletter{' '}
						</h2>
						<img className="ml-5 mt-2" src={star} alt="" />
					</div>
				</div>
				<div>
					<div className="join ">
						<input
							className="input w-[300px] bg-transparent border-[.1px] border-[#FEF6F9] rounded-full"
							placeholder="Email"
						/>
						<button className="btn -ml-[50px] border-0 rounded-l-full">
							Subscribe
						</button>
					</div>
				</div>
			</div>

			<footer className="footer mt-10 text-white">
				<aside>
					<img src={logo2} alt="" />
					<p>
						Customer Feedback Analytic like it was <br /> Supposed
						to be!
					</p>
					<div>
						<h1 className="text-xl font-thin">Social Links</h1>

						<div className="flex justify-between mt-3 items-center gap-3">
							<FaTwitter />
							<FaLinkedinIn />
							<FaTelegramPlane />
							<FaBehance />
							<FaDribbble />
						</div>
					</div>
				</aside>
				<nav>
					<header className="text-xl">Company</header>
					<a className="link link-hover">Home</a>
					<a className="link link-hover">About Us</a>
					<a className="link link-hover">Career</a>
					<a className="link link-hover">Press</a>
				</nav>
				<nav>
					<header className="text-xl">Our Services</header>
					<a className="link link-hover">UI/UX Design</a>
					<a className="link link-hover">E-commerce</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Free Delivery</a>
				</nav>
				<nav>
					<header className="text-xl">Contact</header>
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
