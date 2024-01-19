import React from 'react';
import landing1 from '../../../assets/images/pen-tool.png';
import landing2 from '../../../assets/images/color-swatch.png';
import landing3 from '../../../assets/images/command.png';
import arrow from '../../../assets/images/send.png';
import { GoArrowUpRight } from 'react-icons/go';

const Services = () => {
	return (
		<div className="container mx-auto py-20 bg-[#F6F9FE]">
			<div className="flex justify-between items-center">
				<div>
					<h5 className="text-xl text-[var(--caption)] mb-2">
						Services
					</h5>
					<h2 className="text-4xl font-bold leading-tight">
						Our <span className="text">Satisfied Customers</span>{' '}
						<br /> Share Their Stories
					</h2>
				</div>
				<p className="border-l-[4px] rounded border-[var(--lightblue)] pl-3">
					In our portfolio section, you'll embark on a visual journey
					through a <br /> meticulously curated gallery that
					represents the epitome of digital <br /> excellence and
					creative ingenuity.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
				<div className="bg-white p-6 rounded-2xl hover:border-[.1px] hover:border-[var(--lightblue)] hover:shadow-lg duration-300">
					<div className="flex justify-between items-center relative">
						<img
							className="w-[80px] h-[80px] p-3 bg-[#185AD9]/10 rounded-xl"
							src={landing1}
							alt=""
						/>
						<div className="absolute top-[0%] right-[0%]">
							<img
								className="w-12 h-12 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
					<h3 className="text-2xl font-semibold my-3">
						Graphic Design
					</h3>
					<p className="para">
						The team consistently delivered outstanding results
						surpassing our expectations in terms of creativity
						strategy Graphic design is a dynamic and creative field
						that blends artistry with technology to visually
						communicate ideas messages and concepts.
					</p>
				</div>

				<div className="bg-white p-6 rounded-2xl hover:border-[.1px] hover:border-[var(--lightblue)] hover:shadow-lg duration-300">
					<div className="flex justify-between items-center relative">
						<img
							className="w-[80px] h-[80px] p-3 bg-[#185AD9]/10 rounded-xl"
							src={landing2}
							alt=""
						/>
						<div className="absolute top-[0%] right-[0%]">
							<img
								className="w-12 h-12 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
					<h3 className="text-2xl font-semibold my-3">
						UI/UX Design
					</h3>
					<p className="para">
						The team consistently delivered outstanding results
						surpassing our expectations in terms of creativity
						strategy Graphic design is a dynamic and creative field
						that blends artistry with technology to visually
						communicate ideas messages and concepts.
					</p>
				</div>
				<div className="bg-white p-6 rounded-2xl hover:border-[.1px] hover:border-[var(--lightblue)] hover:shadow-lg duration-300">
					<div className="flex justify-between items-center relative">
						<img
							className="w-[80px] h-[80px] p-3 bg-[#185AD9]/10 rounded-xl"
							src={landing3}
							alt=""
						/>
						<div className="absolute top-[0%] right-[0%]">
							<img
								className="w-12 h-12 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
					<h3 className="text-2xl font-semibold my-3">Development</h3>
					<p className="para">
						The team consistently delivered outstanding results
						surpassing our expectations in terms of creativity
						strategy Graphic design is a dynamic and creative field
						that blends artistry with technology to visually
						communicate ideas messages and concepts.
					</p>
				</div>
				<div className="bg-white p-6 rounded-2xl hover:border-[.1px] hover:border-[var(--lightblue)] hover:shadow-lg duration-300">
					<div className="flex justify-between items-center relative">
						<img
							className="w-[80px] h-[80px] p-3 bg-[#185AD9]/10 rounded-xl"
							src={landing1}
							alt=""
						/>
						<div className="absolute top-[0%] right-[0%]">
							<img
								className="w-12 h-12 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
					<h3 className="text-2xl font-semibold my-3">
						Digital Marketing
					</h3>
					<p className="para">
						The team consistently delivered outstanding results
						surpassing our expectations in terms of creativity
						strategy Graphic design is a dynamic and creative field
						that blends artistry with technology to visually
						communicate ideas messages and concepts.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
