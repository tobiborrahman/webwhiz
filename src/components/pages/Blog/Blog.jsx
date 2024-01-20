import React from 'react';
import bg from '../../../assets/images/Rectangle 75.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Scrollbar, Navigation } from 'swiper/modules';
import SwiperBtn from '../SwiperBtn/SwiperBtn';

const Blog = () => {
	return (
		<div className="container mx-auto py-20 mt-48 md:flex flex-row-reverse md:justify-between items-center">
			<div className="flex justify-center items-center">
				<div className="w[516px] h-[304px]  p-10 -mt-[200px]  mb-[160px] md:mb-0">
					<div className="mt-[50px] lg:-ml-0">
						<div className="text-center md:text-left">
							<h5 className="text-xl text-[var(--caption)] mb-2">
								Blog
							</h5>
							<h2 className="text-2xl lg:text-4xl font-bold leading-tight">
								Our Satisfied Customers <br />
								<span className="text">
									Share Their Stories
								</span>
							</h2>
						</div>
						<p className="block text-center md:hidden md:text-left md:border-l-[4px] rounded md:border-[var(--lightblue)] pl-3 mt-5">
							The team outstanding results surpassing our
							expectations in terms of creativity strat...
						</p>
						<p className="hidden lg:block border-l-[4px] rounded border-[var(--lightblue)] pl-3 mt-5">
							In our portfolio section, you'll embark on a visual
							journey through a meticulously curated gallery that
							represents the epitome of digital excellence and
							creative ingenuity.
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<div className="w-[327px] md:w-[340px] h-[287px] lg:w-[554px] lg:h-[450px] img-holder  rounded-2xl relative">
					<div className="absolute top-[-74%] left-[12%] md:left-[16%]">
						<div className="w-[247px] h-[368px] lg:w-[456px] lg:h-[170px] mt-[80px] lg:mt-[180px] ">
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
								navigation={true}
								modules={[
									Autoplay,
									FreeMode,
									Scrollbar,
									Navigation,
								]}
								className="mySwiper mt-10 relative"
							>
								<SwiperSlide>
									<img src={bg} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={bg} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={bg} alt="" />
								</SwiperSlide>
								<div className="mt-2 lg:mt-5 flex justify-center lg:mr-[90px]">
									<SwiperBtn />
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
