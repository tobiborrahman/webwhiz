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
		<div className="container mx-auto my-20  relative">
			<div className="md:flex justify-between items-center">
				<div>
					<h1 className="text-4xl font-bold">Contact Us</h1>
					<p className="border-l-[4px] rounded border-[var(--lightblue)] pl-3 mt-3">
						The team at consistently delivered <br /> outstanding
						surpassing expectations
					</p>
					<div className="w-[400px] my-7">
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

							<input className="btn mt-5 w-full" type="submit" />
						</form>
					</div>
				</div>
				<div className="z-10">
					<img className="w-[590px] h-[475px] " src={girl} alt="" />
				</div>
			</div>

			<div className="w-[117px] h-[117px] rounded-lg bg-[#E7EEFB] absolute top-[-8%] z-0 right-[41%] "></div>

			<div className=" w-[400px] h-[288px] z-20 p-10 bg-white shadow-lg rounded-[16px] absolute top-[20%] left-[45%]">
				<div className="flex items-center mt-2">
					<img className="mr-2" src={email} alt="" />
					<p>michael.mitch@example.com</p>
				</div>
				<div className="flex items-center mt-5">
					<img className="mr-2" src={phone} alt="" />
					<p>michael.mitch@example.com</p>
				</div>
				<div className="flex items-center mt-5">
					<img className="mr-2" src={watch} alt="" />
					<p>michael.mitch@example.com</p>
				</div>
				<div className="flex items-center mt-5">
					<img className="mr-2" src={building} alt="" />
					<p>michael.mitch@example.com</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
