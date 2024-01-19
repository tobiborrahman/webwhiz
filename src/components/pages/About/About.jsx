import React from 'react';
import group from '../../../assets/images/group-photo.png';

const About = () => {
	return (
		<div className="container mx-auto py-20">
			<div className="flex justify-between items-center">
				<div>
					<h5 className="text-xl text-[var(--caption)] mb-2">
						About Us
					</h5>
					<h2 className="text-4xl font-bold leading-tight">
						We are turning products into <br />
						<span className="text">Timeless elegance</span>
					</h2>
				</div>
				<p className="border-l-[4px] rounded border-[var(--lightblue)] pl-3">
					In our portfolio section, you'll embark on a visual journey
					through a <br /> meticulously curated gallery that
					represents the epitome of digital <br /> excellence and
					creative ingenuity.
				</p>
			</div>

			<div className="flex justify-between items-center pt-10 relative">
				<div className="bg-[#F6F9FE] rounded-lg py-9 px-[50px] w-[554px] h-[348px]">
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

				<div className="absolute left-[51%]">
					<div className="relative">
						<img
							className="w-[460px]  h-[312px] ml-6 mt-[-34px]"
							src={group}
							alt=""
						/>
						<div className="absolute top-[90%] right-[-12%]">
							<div className="background flex justify-between items-center rounded-2xl w-[460px] px-10 text-white h-[90px]">
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
