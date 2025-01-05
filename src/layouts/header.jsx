import PropTypes from 'prop-types'
import { useState } from 'react'
import { MobileMenu } from '../components/mobileNav'

export const Header = ({ toggleCursor }) => {
	const [isOn, setIsOn] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Cursorni yoqish/o'chirish
	const handleToggle = () => {
		setIsOn(!isOn)
		toggleCursor(!isOn)
	}

	// Menyu holatini o'zgartirish
	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	// Menu elementiga bosilganda menyu yopilishi
	const handleMenuItemClick = () => {
		setIsMenuOpen(false) // Menyuni yopish
	}

	return (
		<div>
			<header className='shadow-lg backdrop:blur-2xl bg-gradient-to-b from-black to-black/20 absolute w-full font-code z-50'>
				<nav className='container mx-auto max-w-screen-lg px-6 py-4 flex items-center justify-between'>
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
						<button
							onClick={handleToggle}
							className={`px-2 font-medium rounded-lg transition ${
								isOn ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
							}`}
						>
							{isOn ? 'Cursor On' : 'Cursor Off'}
						</button>
					</div>
					{/* Mobile Menu Toggle */}
					<button
						onClick={handleMenuToggle}
						className='md:hidden text-white focus:outline-none'
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
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
				</nav>
				{/* Mobile Menu */}
				<MobileMenu
					isMenuOpen={isMenuOpen}
					handleMenuItemClick={handleMenuItemClick}
					handleToggle={handleToggle}
					isOn={isOn}
				/>
			</header>
		</div>
	)
}

Header.propTypes = {
	toggleCursor: PropTypes.func.isRequired,
}
