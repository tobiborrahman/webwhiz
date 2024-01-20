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
		<div className="container mx-auto py-20 mt-48 flex justify-between items-center">
			<div>
				<div className="w-[554px] img-holder h-[450px] rounded-2xl relative">
					<div className="absolute top-[-74%] left-[16%]">
						<div className="w-[456px] h-[170px] mt-[180px] ">
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
								<div className="mt-5 flex justify-center mr-[90px]">
									<SwiperBtn />
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
			<div className="w[516px] h-[304px] p-10 -mt-[80px]">
				<div className="">
					<div>
						<h5 className="text-xl text-[var(--caption)] mb-2">
							Blog
						</h5>
						<h2 className="text-4xl font-bold leading-tight">
							Discovering Digital Mastery <br /> and{' '}
							<span className="text">Creative Innovation</span>
						</h2>
					</div>
					<p className="border-l-[4px] rounded border-[var(--lightblue)] pl-3 mt-5">
						In our portfolio section, you'll embark on a visual
						journey through a meticulously curated gallery that
						represents the epitome of digital excellence and
						creative ingenuity.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
