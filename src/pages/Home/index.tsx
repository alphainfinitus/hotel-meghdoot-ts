import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Home = () => {
	return (
		<div>
			<div className='h-screen'>
				<AwesomeSlider
				bullets={false}
				fillParent={true}
				>
					<div className="flex items-center justify-center h-screen w-screen bg-cover bg-[url('https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
						<div className='flex items-center justify-center h-screen w-screen bg-black bg-opacity-50 text-gray-300'>
							Hello World
						</div>
					</div>

					<div className="flex items-center justify-center h-screen w-screen bg-cover bg-[url('https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
						<div className='flex items-center justify-center h-screen w-screen bg-black bg-opacity-50 text-gray-300'>
							Hello World 2
						</div>
					</div>

					<div className="flex items-center justify-center h-screen w-screen bg-cover bg-[url('https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
						<div className='flex items-center justify-center h-screen w-screen bg-black bg-opacity-50 text-gray-300'>
							Hello World 3
						</div>
					</div>
				</AwesomeSlider>

			</div>
				CONTENT HERE
				<br/>
				<div className='h-screen'>
					CONTENT HERE
				</div>
				<div className='h-screen'>
					CONTENT HERE
				</div>
				<div className='h-screen'>
					CONTENT HERE
				</div>
		</div>
	)
}

export default Home;