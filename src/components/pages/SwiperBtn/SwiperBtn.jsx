import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const SwiperBtn = () => {
	const swiper = useSwiper();
	return (
		<div>
			<button
				className="rounded-full p-3 background mr-3"
				onClick={() => swiper.slidePrev()}
			>
				<FaArrowLeft />
			</button>
			<button
				className="rounded-full p-3 background"
				onClick={() => swiper.slideNext()}
			>
				<FaArrowRight />
			</button>
		</div>
	);
};

export default SwiperBtn;
