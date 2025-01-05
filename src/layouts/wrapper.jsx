import PropTypes from 'prop-types'
import Squares from '../components/squareblocks'
import SplashCursor from '../components/splashCursor'

export const Wrapper = ({ children, isCursorActive }) => {
	return (
		<div>
			{isCursorActive && <SplashCursor />}

			<div className='h-screen bg-black relative'>
				<div className='fixed top-0 left-0 h-full w-full '>
					<Squares
						speed={0.2}
						squareSize={40}
						direction='up' // up, down, left, right, diagonal
						borderColor='#474747'
						hoverFillColor=''
					></Squares>
				</div>
				<div className='relative z-30'>
					<div className='z-30 relative'>{children}</div>
				</div>
			</div>
		</div>
	)
}

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	isCursorActive: PropTypes.bool,
}
