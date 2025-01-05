import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const MobileMenu = ({
	isMenuOpen,
	handleMenuItemClick,
	handleToggle,
	isOn,
}) => {
	return (
		<div>
			<div
				className={`md:hidden bg-black transition-transform duration-300 ${
					isMenuOpen ? 'translate-y-0' : '-translate-y-full'
				} fixed top-0 left-0 w-full h-screen z-40`}
			>
				<button
					className='md:hidden text-white focus:outline-none absolute top-5 right-5'
					onClick={handleMenuItemClick}
				>
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
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>
				<nav className='flex flex-col items-center justify-center h-full space-y-8'>
					{/* Menu items, each closing the menu when clicked */}
					<Link
						to='/'
						className='text-white text-lg hover:text-gray-200'
						onClick={handleMenuItemClick} // Menyu elementiga bosilganda menyuni yopish
					>
						Home
					</Link>
					<Link
						to='/about'
						className='text-white text-lg hover:text-gray-200'
						onClick={handleMenuItemClick}
					>
						About
					</Link>
					<Link
						to='/projects'
						className='text-white text-lg hover:text-gray-200'
						onClick={handleMenuItemClick}
					>
						Projects
					</Link>
					<Link
						to='/contact'
						className='text-white text-lg hover:text-gray-200'
						onClick={handleMenuItemClick}
					>
						Contact
					</Link>
					<button
						onClick={handleToggle}
						className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
							isOn ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
						}`}
					>
						{isOn ? 'Cursor On' : 'Cursor Off'}
					</button>
				</nav>
			</div>
		</div>
	)
}

MobileMenu.propTypes = {
	isMenuOpen: PropTypes.bool,
	handleMenuItemClick: PropTypes.func,
	handleToggle: PropTypes.func,
	isOn: PropTypes.bool,
}
