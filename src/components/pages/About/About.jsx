import React from 'react';
import group from '../../../assets/images/group-photo.png';

const About = () => {
	return (
		<div className="container mx-auto my-20">
			<div className="md:flex justify-between items-center">
				<div className="text-center md:text-left">
					<h5 className="text-xl text-[var(--caption)] mb-2">
						About Us
					</h5>
					<h2 className="text-4xl font-bold leading-tight">
						We are turning products into <br />
						<span className="text">Timeless elegance</span>
					</h2>
				</div>
				<p className="block md:hidden text-center md:text-left md:border-l-[4px] rounded md:border-[var(--lightblue)] md:pl-3">
					In our portfolio section, you'll embark on a visual journey
					through a meticulously curated gallery
				</p>
				<p className="hidden md:block text-center md:text-left md:border-l-[4px] rounded md:border-[var(--lightblue)] md:pl-3">
					In our portfolio section, you'll embark on a visual journey
					through a <br /> meticulously curated gallery that
					represents the epitome of digital <br /> excellence and
					creative ingenuity.
				</p>
			</div>

			<div className="md:flex justify-between items-center pt-10 relative">
				<div className="bg-[#F6F9FE] rounded-lg py-5 md:py-9 px-[50px] w-[327px] h-[308px] md:w-[554px] md:h-[348px] mb-12 md:mb-0">
					<div className="pb-3">
						<p className="font-semibold">Graphic Design</p>
						<div className="flex justify-center items-center w-full ">
							<progress
								className="progress progress-primary w-full mr-5"
								value={65}
								max="100"
							></progress>
							<p>65%</p>
						</div>
					</div>
					<div className="py-3">
						<p className="font-semibold">Lead Generation</p>
						<div className="flex justify-center items-center ">
							<progress
								className="progress progress-primary w-full mr-5"
								value={87}
								max="100"
							></progress>
							<p>87%</p>
						</div>
					</div>
					<div className="py-3">
						<p className="font-semibold">Product Design</p>
						<div className="flex justify-center items-center py-2">
							<progress
								className="progress progress-primary w-full mr-5"
								value={45}
								max="100"
							></progress>
							<p>45%</p>
						</div>
					</div>
					<div>
						<p className="font-semibold">UI/UX Design</p>
						<div className="flex justify-center items-center">
							<progress
								className="progress progress-primary w-full mr-5"
								value={75}
								max="100"
							></progress>
							<p>75%</p>
						</div>
					</div>
				</div>

				<div className="ml-0 md:absolute md:left-[51%]">
					<div className="relative">
						<img
							className="w-[327px] h-[256px] md:w-[460px]  md:h-[312px] ml-2 md:ml-6 mt-[-34px]"
							src={group}
							alt=""
						/>
						<div className="absolute top-[90%] md:top-[90%] md:right-[-12%]">
							<div className="background flex justify-between items-center rounded-2xl w-[349px] md:w-[460px] px-10 text-white h-[81px] md:h-[90px]">
								<div className="text-center">
									<h3 className="text-2xl font-semibold">
										58+
									</h3>
									<p className="text-[15px]">
										Project Delivery
									</p>
								</div>
								<div className="w-[.3px] h-[50px] bg-red-600"></div>
								<div className="text-center">
									<h3 className="text-2xl font-semibold">
										120+
									</h3>
									<p className="text-[15px]">Happy Clients</p>
								</div>
								<div className="w-[.3px] h-[50px] bg-red-600"></div>
								<div className="text-center">
									<h3 className="text-2xl font-semibold">
										32+
									</h3>
									<p className="text-[15px]">
										Years Experience
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
