import React from 'react';
import { useForm } from 'react-hook-form';
import girl from '../../../assets/images/girl.png';
import email from '../../../assets/images/sms.png';
import phone from '../../../assets/images/call.png';
import building from '../../../assets/images/clock.png';
import watch from '../../../assets/images/building.png';

const Contact = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		{
			reset;
		}
	};

	return (
		<div className="my-20 mr-0 pr-0 relative">
			<div className=" md:flex justify-between items-center">
				<div className="md:pl-20 mx-5 md:mx-0 mb-16">
					<h1 className="text-4xl font-bold">Contact Us</h1>
					<p className="md:border-l-[4px] rounded md:border-[var(--lightblue)] md:pl-3 mt-3">
						The team at consistently delivered <br /> outstanding
						surpassing expectations
					</p>
					<div className="md:w-[400px] my-7">
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								className="border-b shadow-b w-full py-2 px-4 placeholder-black"
								name="name"
								type="text"
								placeholder="Name"
								{...register('name')}
							/>
							<br />
							<input
								className="border-b shadow-b w-full my-4 py-2 px-4 placeholder-black"
								name="email"
								type="email"
								placeholder="Email"
								{...register('email')}
							/>
							<br />
							<input
								className="border-b shadow-b w-full py-2 px-4 placeholder-black"
								name="message"
								type="message"
								placeholder="Message"
								{...register('message')}
							/>
							<br />

							<input
								className="btn-1 mt-5 w-full"
								type="submit"
							/>
						</form>
					</div>
				</div>
				<div className=" flex justify-center items-center">
					<img
						className="w-[327px] h-[263px] z-20 md:w-[590px] md:h-[475px] "
						src={girl}
						alt=""
					/>
				</div>
			</div>

			<div className="w-[55px] h-[55px] md:w-[117px] md:h-[117px] rounded-lg bg-[#E7EEFB] absolute top-[57%] left-[2%] md:top-[-8%] z-0 md:left-[50%]"></div>

			<div className="w-[261px] h-[216px] md:w-[400px] md:h-[288px] z-20 px-1 pt-12 md:p-10 bg-white shadow-lg rounded-[16px] absolute top-[82%] left-[15%] md:top-[20%] md:left-[45%] ">
				<div className="flex items-center  md:mt-5">
					<img className="mr-2" src={email} alt="" />
					<p>michael.mitch@example.com</p>
				</div>
				<div className="flex items-center  md:mt-5">
					<img className="mr-2" src={phone} alt="" />
					<p>michael.mitch@example.com</p>
				</div>
				<div className="flex items-center  md:mt-5">
					<img className="mr-2" src={watch} alt="" />
					<p>michael.mitch@example.com</p>
				</div>
				<div className="flex items-center  md:mt-5">
					<img className="mr-2" src={building} alt="" />
					<p>michael.mitch@example.com</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
