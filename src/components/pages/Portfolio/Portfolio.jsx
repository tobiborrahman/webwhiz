import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Scrollbar, Navigation } from 'swiper/modules';

import arrow from '../../../assets/images/send.png';
import swiper1 from '../../../assets/images/swiper-1.png';
import { useEffect, useState } from 'react';

const Portfolio = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className="container mx-auto portfolio bg-[#F8F6FD] py-20">
			<div className="md:flex justify-between items-center">
				<div className="text-center md:text-left">
					<h5 className="text-xl text-[var(--caption)] mb-2">
						Portfolio
					</h5>
					<h2 className="text-2xl md:text-4xl font-bold leading-tight">
						Discovering Digital Mastery <br /> and{' '}
						<span className="text">Creative Innovation</span>
					</h2>
				</div>
				<p className="block md:hidden text-[14px] text-center md:text-left md:border-l-[4px] rounded md:border-[var(--lightblue)] md:pl-3">
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
			<div className="flex justify-between mt-4 items-center w-[327px] overflow-hidden md:w-[560px] list-none">
				<p className="links">All Projects</p>
				<li className="links">UI/UX Design</li>
				<li className="links">Graphic Design</li>
				<li className="links">Developments</li>
			</div>

			{/* swiper  */}
			<Swiper
				spaceBetween={30}
				loop={true}
				slidesPerView={
					windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3
				}
				centeredSlides={true}
				freeMode={true}
				loopedSlides={4}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				scrollbar={{ dragSize: '50px' }}
				navigation={true}
				modules={[Autoplay, FreeMode, Scrollbar, Navigation]}
				className="mySwiper mt-10 w-full"
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
