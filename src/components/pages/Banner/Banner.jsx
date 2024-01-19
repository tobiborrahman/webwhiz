import React from 'react';
import man from '../../../assets/images/mann.png';
import crown from '../../../assets/images/crown.png';

import { FaUser } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';

const Banner = () => {
	return (
		<div className="container mx-auto md:flex justify-between items-center my-[100px]">
			<div>
				<h1 className="text-6xl font-bold leading-tight">
					Turning <br /> <span className="text">Imagination</span>{' '}
					into <br /> Innovation
				</h1>
				<p className="border-l-[4px] border-[var(--lightblue)] pl-3 mt-6">
					Welcome to my digital playground, where creativity knows no
					bounds. I'm a <br /> passionate designer and developer on a
					mission to turn innovative ideas <br /> into stunning
					digital realities.
				</p>

				<button className="btn mr-4 mt-7">Hire Me</button>
				<button className="btn-2">Portfolio</button>
			</div>
			<div className="relative">
				<div className="rounded-lg shadow-md z-20 p-4 bg-white w-[200px] h-79px] flex justify-center items-center absolute top-[8%] left-[-25%]">
					<img
						className="w-[40px] h-[40px] rounded-full mr-3"
						src={man}
						alt=""
					/>{' '}
					<div>
						<h5 className="leading-4 text-[15px]">
							<span className="text-black font-semibold">
								Albart Flores
							</span>{' '}
							<br />
							Product Manager
						</h5>
					</div>
				</div>
				<div className="rounded-lg shadow-md z-20 p-4 bg-white w-[200px] h-79px] flex justify-center items-center absolute bottom-[38%] right-[0%]">
					<div className="mr-5 w-9 h-9 bg-gray-200 p-1 text-[var(--blue)] rounded-full flex justify-center items-center">
						<FaUser />
					</div>
					<div>
						<h5 className="leading-4">
							<span className="text-black font-semibold">
								3873
							</span>{' '}
							<br />
							visitors
						</h5>
					</div>
					<div className="flex justify-between ml-2 text-[var(--blue)] items-center">
						<GoArrowUpRight /> 25%
					</div>
				</div>
				<div className="rounded-lg shadow-md z-20 p-4 bg-white w-[200px] h-79px] flex justify-center items-center absolute bottom-[-8%] right-[0%]">
					<div className="mr-2 w-7 h-7 bg-gray-200 p-1 text-[var(--blue)] rounded-full flex justify-center items-center">
						<img src={crown} alt="" />
					</div>
					<div>
						<h5 className="leading-4 text-[13px]">
							<span className="text-black font-semibold">
								Project Done
							</span>{' '}
							<br />
							4,679
						</h5>
					</div>
					<div className="flex justify-between  text-[var(--blue)] items-center">
						<GoArrowUpRight /> 25%
					</div>
				</div>

				<div className="w-[310px] h-[50px] bg-pink-100 absolute top-[-6%] left-[5%] rounded-full z-0"></div>
				<div className="w-[310px] h-[50px] bg-pink-100 absolute bottom-[-6%] left-[5%] rounded-full z-0"></div>
				<div className="w-[30px] h-[30px] border-[6px] border-[#9264E3] absolute bottom-[-9%] left-[4%] rounded-full z-0"></div>

				<div className="w-[80px] h-[80px] z-0 absolute right-[13%] opacity-50 top-[-12%] bg-gray-200 rounded-full"></div>
				<div className="flex  backside justify-center items-center mr-[80px]">
					<img
						className="w-[358px] h-[433px] z-10"
						src={man}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
