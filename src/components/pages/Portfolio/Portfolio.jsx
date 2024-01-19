import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, FreeMode, Scrollbar, Navigation } from 'swiper/modules';

import arrow from '../../../assets/images/send.png';

// images
import swiper1 from '../../../assets/images/swiper-1.png';

const Portfolio = () => {
	return (
		<div className="container mx-auto bg-[#F8F6FD] py-20">
			<div className="flex justify-between items-center">
				<div>
					<h5 className="text-xl text-[var(--caption)] mb-2">
						Portfolio
					</h5>
					<h2 className="text-4xl font-bold leading-tight">
						Discovering Digital Mastery <br /> and{' '}
						<span className="text">Creative Innovation</span>
					</h2>
				</div>
				<p className="border-l-[4px] rounded border-[var(--lightblue)] pl-3">
					In our portfolio section, you'll embark on a visual journey
					through a <br /> meticulously curated gallery that
					represents the epitome of digital <br /> excellence and
					creative ingenuity.
				</p>
			</div>
			<div className="flex justify-between mt-4 items-center w-[50%] list-none">
				<li className="hover:border-b-[2px] border-[var(--blue)]">
					All Projects
				</li>
				<li className="hover:border-b-[2px] border-[var(--blue)]">
					UI/UX Design
				</li>
				<li className="hover:border-b-[2px] border-[var(--blue)]">
					Graphic Design
				</li>
				<li className="hover:border-b-[2px] border-[var(--blue)]">
					Developments
				</li>
			</div>

			{/* swiper  */}
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
				freeMode={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				scrollbar={{ dragSize: '50px' }}
				navigation={true}
				modules={[Autoplay, FreeMode, Scrollbar, Navigation]}
				className="mySwiper mt-10"
			>
				<SwiperSlide className="hover-img relative">
					<img src={swiper1} alt="" />
					<div className="flex justify-between items-center w-[295px] h-[50px] rounded-[7px] text-black bg-white opacity-0 hover:opacity-100 absolute bottom-[10%] z-40 left-[4.3%] px-2">
						<div>
							<h3 className="font-semibold">
								Finance Banking Landing Page
							</h3>
							<p className="text-[10px]">
								in our portfolio, you will embark on a visual
								joy...
							</p>
						</div>
						<div>
							<img
								className="w-10 h-10 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="hover-img relative">
					<img src={swiper1} alt="" />
					<div className="flex justify-between items-center w-[295px] h-[50px] rounded-[7px] text-black bg-white opacity-0 hover:opacity-100 absolute bottom-[10%] z-40 left-[4.3%] px-2">
						<div>
							<h3 className="font-semibold">
								Finance Banking Landing Page
							</h3>
							<p className="text-[10px]">
								in our portfolio, you will embark on a visual
								joy...
							</p>
						</div>
						<div>
							<img
								className="w-10 h-10 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="hover-img relative">
					<img src={swiper1} alt="" />
					<div className="flex justify-between items-center w-[295px] h-[50px] rounded-[7px] text-black bg-white opacity-0 hover:opacity-100 absolute bottom-[10%] z-40 left-[4.3%] px-2">
						<div>
							<h3 className="font-semibold">
								Finance Banking Landing Page
							</h3>
							<p className="text-[10px]">
								in our portfolio, you will embark on a visual
								joy...
							</p>
						</div>
						<div>
							<img
								className="w-10 h-10 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="hover-img relative">
					<img src={swiper1} alt="" />
					<div className="flex justify-between items-center w-[295px] h-[50px] rounded-[7px] text-black bg-white opacity-0 hover:opacity-100 absolute bottom-[10%] z-40 left-[4.3%] px-2">
						<div>
							<h3 className="font-semibold">
								Finance Banking Landing Page
							</h3>
							<p className="text-[10px]">
								in our portfolio, you will embark on a visual
								joy...
							</p>
						</div>
						<div>
							<img
								className="w-10 h-10 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="hover-img relative">
					<img src={swiper1} alt="" />
					<div className="flex justify-between items-center w-[295px] h-[50px] rounded-[7px] text-black bg-white opacity-0 hover:opacity-100 absolute bottom-[10%] z-40 left-[4.3%] px-2">
						<div>
							<h3 className="font-semibold">
								Finance Banking Landing Page
							</h3>
							<p className="text-[10px]">
								in our portfolio, you will embark on a visual
								joy...
							</p>
						</div>
						<div>
							<img
								className="w-10 h-10 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="hover-img relative">
					<img src={swiper1} alt="" />
					<div className="flex justify-between items-center w-[295px] h-[50px] rounded-[7px] text-black bg-white opacity-0 hover:opacity-100 absolute bottom-[10%] z-40 left-[4.3%] px-2">
						<div>
							<h3 className="font-semibold">
								Finance Banking Landing Page
							</h3>
							<p className="text-[10px]">
								in our portfolio, you will embark on a visual
								joy...
							</p>
						</div>
						<div>
							<img
								className="w-10 h-10 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="hover-img relative">
					<img src={swiper1} alt="" />
					<div className="flex justify-between items-center w-[295px] h-[50px] rounded-[7px] text-black bg-white opacity-0 hover:opacity-100 absolute bottom-[10%] z-40 left-[4.3%] px-2">
						<div>
							<h3 className="font-semibold">
								Finance Banking Landing Page
							</h3>
							<p className="text-[10px]">
								in our portfolio, you will embark on a visual
								joy...
							</p>
						</div>
						<div>
							<img
								className="w-10 h-10 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="hover-img relative">
					<img src={swiper1} alt="" />
					<div className="flex justify-between items-center w-[295px] h-[50px] rounded-[7px] text-black bg-white opacity-0 hover:opacity-100 absolute bottom-[10%] z-40 left-[4.3%] px-2">
						<div>
							<h3 className="font-semibold">
								Finance Banking Landing Page
							</h3>
							<p className="text-[10px]">
								in our portfolio, you will embark on a visual
								joy...
							</p>
						</div>
						<div>
							<img
								className="w-10 h-10 p-2 background rounded-full mt-0"
								src={arrow}
								alt=""
							/>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Portfolio;
