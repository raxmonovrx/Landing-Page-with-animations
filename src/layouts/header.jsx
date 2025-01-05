export const Header = () => {
	return (
		<div>
			<header className='shadow-lg backdrop:blur-2xl bg-gradient-to-b from-black to-black/20'>
				<nav className='container mx-auto px-6 py-4'>
					<div className='flex items-center justify-between'>
						<div className='text-2xl font-bold text-white'>Logo</div>
						<div className='hidden md:flex space-x-8'>
							<a href='#' className='text-white hover:text-gray-200 transition'>
								Home
							</a>
							<a href='#' className='text-white hover:text-gray-200 transition'>
								About
							</a>
							<a href='#' className='text-white hover:text-gray-200 transition'>
								Services
							</a>
							<a href='#' className='text-white hover:text-gray-200 transition'>
								Contact
							</a>
						</div>
						<button className='md:hidden text-white'>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
				</nav>
			</header>
		</div>
	)
}
