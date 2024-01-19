import React from 'react';
import man1 from '../../../assets/images/young-man.png';
import man2 from '../../../assets/images/watch-man.png';
import man3 from '../../../assets/images/old-man.png';

const Review = () => {
	return (
		<div className="container mx-auto py-20">
			<h1 className="text-4xl font-bold">Client Reviews</h1>
			<p className="border-l-[4px] rounded border-[var(--lightblue)] pl-3 mt-3">
				The team at consistently delivered <br /> outstanding surpassing
				expectations
			</p>

			<div className="md:flex gap-8 relative">
				<div className="absolute left-[0%]">
					<img className="w-[216px] h-[216px] " src={man1} alt="" />
				</div>
				<div className="absolute left-[22%]">
					<img className="w-[216px] h-[216px] " src={man3} alt="" />
				</div>
				<div className="absolute left-[44%]">
					<img className=" " src={man2} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Review;
