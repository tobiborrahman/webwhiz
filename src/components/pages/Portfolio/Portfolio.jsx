import React from 'react';

const Portfolio = () => {
	return (
		<div className="bg-[#F8F6FD] py-20">
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
		</div>
	);
};

export default Portfolio;
