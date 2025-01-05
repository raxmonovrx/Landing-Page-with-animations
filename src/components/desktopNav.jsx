import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const DesktopNav = ({ handleMenuToggle, handleToggle, isOn }) => {
	return (
		<div>
			<nav className='container mx-auto max-w-screen-lg px-6 py-4 flex items-center justify-between'>
				<div className='text-2xl font-bold text-white cursor-pointer'>
					CoderCo.
				</div>
				<div className='hidden md:flex space-x-8'>
					<Link to='/' className='text-white hover:text-gray-200 transition'>
						Home
					</Link>
					<Link
						to='/about'
						className='text-white hover:text-gray-200 transition'
					>
						About
					</Link>
					<Link
						to='/projects'
						className='text-white hover:text-gray-200 transition'
					>
						Projects
					</Link>
					<Link
						to='/contact'
						className='text-white hover:text-gray-200 transition'
					>
						Contact
					</Link>
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
		</div>
	)
}

DesktopNav.propTypes = {
	handleMenuToggle: PropTypes.func,
	handleToggle: PropTypes.func,
	isOn: PropTypes.bool,
}
