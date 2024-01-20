import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Scrollbar, Navigation } from 'swiper/modules';

import man1 from '../../../assets/images/young-man.png';
import man2 from '../../../assets/images/watch-man.png';
import man3 from '../../../assets/images/old-man.png';
import star2 from '../../../assets/images/star-2.png';

const Review = () => {
	return (
		<div className="py-20 mr-20 relative lg:container lg:mx-auto">
			<div className="container mx-auto absolute top-[13%]">
				<h1 className="text-4xl font-bold">Client Reviews</h1>
				<p className="border-l-[4px] rounded border-[var(--lightblue)] pl-3 mt-3">
					The team at consistently delivered <br /> outstanding
					surpassing expectations
				</p>
			</div>

			<div className="">
				<div className="flex justify-between">
					<img
						className="w-[216px] h-[212px] mt-[190px] mr-8"
						src={man1}
						alt=""
					/>
					<img
						className="w-[216px] h-[212px] mt-[190px] mr-8"
						src={man3}
						alt=""
					/>
					<img className="w-[306px] h-[401px]" src={man2} alt="" />

					<div className="w-[456px] h-[170px] mt-[180px]">
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							loop={true}
							freeMode={true}
							loopedSlides={4}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							scrollbar={{ dragSize: '50px' }}
							navigation={true}
							modules={[
								Autoplay,
								FreeMode,
								Scrollbar,
								Navigation,
							]}
							className="mySwiper mt-10"
						>
							<SwiperSlide className="p-7 border rounded-2xl">
								<div className="flex justify-between items-center mb-4">
									<div>
										<h4 className="text-2xl font-semibold">
											Maria Sarapova
										</h4>
										<p>
											Whistleblower and privacy advocate
										</p>
									</div>
									<div className="flex items-center justify-center">
										<p>4.5</p>
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
							<SwiperSlide className="p-7 border rounded-2xl">
								<div className="flex justify-between items-center mb-4">
									<div>
										<h4 className="text-2xl font-semibold">
											Novak Jokovic
										</h4>
										<p>
											Whistleblower and privacy advocate
										</p>
									</div>
									<div className="flex items-center justify-center">
										<p>4.5</p>
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
							<SwiperSlide className="p-7 border rounded-2xl">
								<div className="flex justify-between items-center mb-4">
									<div>
										<h4 className="text-2xl font-semibold">
											Rozer Federer
										</h4>
										<p>
											Whistleblower and privacy advocate
										</p>
									</div>
									<div className="flex items-center justify-center">
										<p>4.5</p>
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
