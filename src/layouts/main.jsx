import { MainAbout } from '../components/mainAbout'
import CodingBackground from '/codingbg.svg'

export const Main = () => {
	return (
		<section className='py-20'>
			<div className='max-w-8xl mx-auto'>
				<div className=' p-4 select-none font-code flex items-center'>
					<MainAbout />
					<div className=''>
						<img
							src={CodingBackground}
							alt='A'
							className='w-[300px] lg:w-[350px] lg:block hidden'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
