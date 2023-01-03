import logoImg from './assets/logo.png';
import bgImg from './assets/bg.png';
import { useId } from 'react';

const leftColor = '#084B3E';
const leftTxtColor = '#F9E2BA';
const rightTxtColor = ' #232323';
const formBorder = '#343434';
const actionBtn = '#00C38B';
const consentColor = '#BDBDBD';
const logIn = '#19B07E';
const aesteriskColor = '#E33D5F';

const App = () => {
	const id = useId();
	const emailId = `email-${id}`;
	const nameId = `name-${id}`;
	const passId = `pass-${id}`;
	return (
		<div
			style={{
				backgroundImage: `url(${bgImg})`,
				objectFit: 'cover',
			}}
			className='w-full h-full min-h-screen bg-red-800 flex items-center justify-center p-5'>
			<section className='flex rounded-3xl md:rounded-[50px] max-w-[1160px] overflow-hidden'>
				{/* left side */}
				<div
					className='flex-1 p-5 md:p-14 flex flex-col'
					style={{
						backgroundColor: leftColor,
					}}>
					{/* Logo Image */}
					<div className='w-22 md:w-44 border-2 border-teal-600 mb-auto'>
						<img src={logoImg} className='w-full block' alt='' />
					</div>

					<p
						className='text-base sm:text-2xl md:text-4xl md:leading-10  font-semibold'
						style={{
							color: leftTxtColor,
						}}>
						Say hello to global food and beverage producers and suppliers, all in one place
					</p>
				</div>

				{/* right side */}
				<div className='flex-[2] bg-white flex-col flex py-10 pl-5 md:pl-10 pr-20 md:pr-32 gap-10'>
					<header className='flex pr-10 mb-5 md:mb-20'>
						<h1
							className='text-2xl sm:text-3xl md:text-4xl font-semibold'
							style={{
								color: rightTxtColor,
							}}>
							Let’s get started with a few simple steps
						</h1>
					</header>

					{/* Form Element */}
					<form className='flex flex-col gap-5 md:gap-10'>
						<div className='flex flex-col'>
							<p className='flex gap-2'>
								<label htmlFor={emailId} className='font-semibold'>
									Email
								</label>
								<span
									className=''
									style={{
										color: aesteriskColor,
									}}>
									*
								</span>
							</p>
							<input
								id={emailId}
								type='email'
								className='outline-none border-b-2 px-2'
								style={{
									borderBottomColor: formBorder,
								}}
							/>
						</div>
						<div className='flex flex-col'>
							<p className='flex gap-2'>
								<label htmlFor={nameId} className='font-semibold'>
									Fullname
								</label>
								<span
									className=''
									style={{
										color: aesteriskColor,
									}}>
									*
								</span>
							</p>
							<input
								id={nameId}
								type='email'
								className='outline-none border-b-2 px-2'
								style={{
									borderBottomColor: formBorder,
								}}
							/>
						</div>
						<div className='flex flex-col'>
							<p className='flex gap-2'>
								<label htmlFor={passId} className='font-semibold'>
									Password
								</label>
								<span
									className=''
									style={{
										color: aesteriskColor,
									}}>
									*
								</span>
							</p>
							<input
								id={passId}
								type='email'
								className='outline-none border-b-2 px-2'
								style={{
									borderBottomColor: formBorder,
								}}
							/>
						</div>
						<div className=' flex p-5'>
							<button
								className='hover:bg-black flex-1 py-4 sm:py-6 rounded-3xl text-white text-xl'
								style={{
									backgroundColor: actionBtn,
								}}>
								Sign Up
							</button>
						</div>
					</form>

					{/* Consent section */}
					<div className=' mt-auto text-sm' style={{ color: consentColor }}>
						<p>By signing up, you agree to our Terms of Service.</p>
						<p>
							Already have an account?{' '}
							<a
								href='#'
								style={{
									color: actionBtn,
								}}>
								Log in
							</a>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default App;
