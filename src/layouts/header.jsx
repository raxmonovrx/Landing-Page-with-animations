import PropTypes from 'prop-types'
import { useState } from 'react'
import { DesktopNav } from '../components/desktopNav'
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
			<header className='shadow-lg backdrop:blur-2xl bg-gradient-to-b from-black to-black/20 fixed w-full font-code z-50 select-none'>
				<DesktopNav
					handleMenuToggle={handleMenuToggle}
					handleToggle={handleToggle}
					isOn={isOn}
				/>
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
