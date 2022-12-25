import Image from 'next/image';
import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
	return (
		<header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
			{/* Left part */}
			<div className='relative flex items-center h-10 cursor-pointer my-auto'>
				<Image
					src='https://links.papareact.com/qd3'
					layout='fill'
					objectFit='contain'
					objectPosition='left'
				/>
			</div>
			{/* Middle part - Search */}
			<div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
				<input
					type='text'
					placeholder='Start your search'
					name=''
					id=''
					className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
				/>

				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer hidden md:inline-flex md:mx-2'>
					<path
						fill-rule='evenodd'
						d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
						clip-rule='evenodd'
					/>
				</svg>
			</div>
			{/* Right part */}
			<div className='flex items-center space-x-4 justify-end text-gray-500'>
				<p className='hidden md:inline cursor-pointer'>Become a host</p>
				<FiGlobe className='h-6 cursor-pointer' />
				<div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
					<HiOutlineMenu className='h-6 cursor-pointer' />
					<FaUserCircle className='h-6 cursor-pointer' />
				</div>
			</div>
		</header>
	);
};

export default Header;
