import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import man1 from '../../../assets/images/young-man.png';
import man2 from '../../../assets/images/watch-man.png';
import man3 from '../../../assets/images/old-man.png';
import star2 from '../../../assets/images/star-2.png';
import SwiperBtn from '../SwiperBtn/SwiperBtn';

const Review = () => {
	return (
		<div className="py-20 mr-20 relative">
			<div className="absolute top-[13%] md:ml-20">
				<h1 className="text-4xl font-bold">Client Reviews</h1>
				<p className="md:border-l-[4px] rounded md:border-[var(--lightblue)] md:pl-3 mt-3">
					The team at consistently delivered <br /> outstanding
					surpassing expectations
				</p>
			</div>

			<div className="md:flex justify-between items-center">
				<div className="flex -ml-[50px] md:-ml-0">
					<img
						className="w-[126px] h-[141px] md:w-[216px] md:h-[212px] mt-[190px] mr-3 md:mr-8"
						src={man1}
						alt=""
					/>
					<img
						className="w-[126px] h-[141px] md:w-[216px] md:h-[212px] mt-[190px] mr-3 md:mr-8"
						src={man3}
						alt=""
					/>
					<img
						className="w-[136px] mt-[153px] md:mt-0 h-[176px] md:w-[306px] md:h-[401px]"
						src={man2}
						alt=""
					/>
				</div>

				<div className="mt-5 md:mt-[180px]">
					<div className="flex justify-center md:justify-end items-center mb-[20px]">
						<SwiperBtn />
					</div>
					<div className="ml-5">
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							loop={true}
							pagination={{
								type: 'fraction',
							}}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							navigation={true}
							modules={[Autoplay, Navigation, Pagination]}
							className="mySwiper w-[327px] h-[150px]   md:w-[456px] md:h-[170px]"
						>
							<SwiperSlide className="p-1 md:p-7 border rounded-2xl">
								<div className="flex justify-between items-center mb-4">
									<div>
										<h4 className="text-2xl font-semibold">
											Maria Sarapova
										</h4>
										<p className="text-[13px]">
											Whistleblower and privacy advocate
										</p>
									</div>
									<div className="flex items-center justify-center">
										<p className="text-xl font-semibold">
											4.5
										</p>
										<img
											className="ml-2"
											src={star2}
											alt=""
										/>
									</div>
								</div>
								<div>
									<p className="para">
										The team at WebWhiz consistently
										delivered outstanding results surpassing
										our expectations in{' '}
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className="p-1 md:p-7 border rounded-2xl">
								<div className="flex justify-between items-center mb-4">
									<div>
										<h4 className="text-2xl font-semibold">
											Novak Jokovic
										</h4>
										<p className="text-[13px]">
											Whistleblower and privacy advocate
										</p>
									</div>
									<div className="flex items-center justify-center">
										<p className="text-xl font-semibold">
											4.5
										</p>
										<img
											className="ml-2"
											src={star2}
											alt=""
										/>
									</div>
								</div>
								<div>
									<p className="para">
										The team at WebWhiz consistently
										delivered outstanding results surpassing
										our expectations in{' '}
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className="p-1 md:p-7 border rounded-2xl">
								<div className="flex justify-between items-center mb-4">
									<div>
										<h4 className="text-2xl font-semibold">
											Rozer Federer
										</h4>
										<p className="text-[13px]">
											Whistleblower and privacy advocate
										</p>
									</div>
									<div className="flex items-center justify-center">
										<p className="text-xl font-semibold">
											4.5
										</p>
										<img
											className="ml-2"
											src={star2}
											alt=""
										/>
									</div>
								</div>
								<div>
									<p className="para">
										The team at WebWhiz consistently
										delivered outstanding results surpassing
										our expectations in{' '}
									</p>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
