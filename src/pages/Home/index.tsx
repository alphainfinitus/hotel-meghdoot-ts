import { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Home = () => {
	const removeScrollMouseIcon = () => {
		const scrollMouseIcon = document.getElementById('scroll-mouse-icon');

		if (window.scrollY >= window.innerHeight - 500) {
			scrollMouseIcon?.classList.add("hidden");
		} else {
			scrollMouseIcon?.classList.remove("hidden");
		}
	}
	
	useEffect(() => {
		window.addEventListener("scroll", removeScrollMouseIcon);
		return () => window.removeEventListener("scroll", removeScrollMouseIcon);
	}, []);
	
	return (
		<div>
			{/* Awesome Slider */}
			<div className='h-screen relative z-0'>
				<AwesomeSlider
				bullets={false}
				fillParent={true}
				>
					<div className="flex items-center justify-center h-screen w-screen bg-cover bg-[url('/src/assets/carousel/01.jpg')]">
						<div className='flex items-center justify-center h-screen w-screen bg-black bg-opacity-30 text-gray-300'>
							Hello World
						</div>
					</div>

					<div className="flex items-center justify-center h-screen w-screen bg-cover bg-center bg-[url('/src/assets/carousel/02.jpg')]">
						<div className='flex items-center justify-center h-screen w-screen bg-black bg-opacity-60 text-gray-300'>
							Hello World 2
						</div>
					</div>

					<div className="flex items-center justify-center h-screen w-screen bg-cover bg-center bg-[url('/src/assets/carousel/03.jpg')]">
						<div className='flex items-center justify-center h-screen w-screen text-gray-300'>
							Hello World 3
						</div>
					</div>

					<div className="flex items-center justify-center h-screen w-screen bg-cover bg-bottom bg-[url('/src/assets/carousel/04.jpg')]">
						<div className='flex items-center justify-center h-screen w-screen bg-black bg-opacity-10 text-gray-300'>
							Hello World 4
						</div>
					</div>
				</AwesomeSlider>

			</div>

			{/* Services Container Card */}
			<div className="absolute container block pt-5 pb-6 px-1 md:px-6 rounded-xl shadow-lg bg-white left-1/2 transform -translate-x-1/2 z-10 -mt-16">
				{/* Scroll Mouse */}
				<div id='scroll-mouse-icon' className="w-full">
					<svg width="40px" className="motion-safe:animate-bounce h-6 w-6 mx-auto" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ fillRule:"evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit:"1.5" }}>
						<path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill:"none", stroke:"#000", strokeWidth:"10px" }}/>
						<path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{fill:"none", stroke:"#000", strokeWidth:"10px"}}/>
					</svg>
				</div>

				{/* Services */}
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
					{/* Free Wifi */}
					<div>
						<div className="flex flex-col pt-5 px-10">
							<div className="mx-auto mb-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
								</svg>
							</div>
							<h3 className="mb-2 text-2xl text-gray-800 font-semibold">Free Wifi Zone</h3>
							<p>
								We provide free Wifi for our guests, accessible all over the premises.
							</p>
						</div>
					</div>

					{/* Sufficient Parking */}
					<div>
						<div className="flex flex-col pt-5 px-10">
							<div className="mx-auto mb-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 448 512">
									<path d="M192 256V192H240C257.7 192 272 206.3 272 224C272 241.7 257.7 256 240 256H192zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM336 224C336 170.1 293 128 240 128H168C145.9 128 128 145.9 128 168V352C128 369.7 142.3 384 160 384C177.7 384 192 369.7 192 352V320H240C293 320 336 277 336 224z"/>
								</svg>
							</div>
							<h3 className="mb-2 text-2xl text-gray-800 font-semibold">Parking Space</h3>
							<p>We provide and maintain an ample amount of parking space for our guests.</p>
						</div>
					</div>

					{/* Taxi Arrangement */}
					<div>
						<div className="flex flex-col pt-5 px-10">
							<div className="mx-auto mb-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 576 512">
									<path d="M352 0C369.7 0 384 14.33 384 32V64L384 64.15C422.6 66.31 456.3 91.49 469.2 128.3L504.4 228.8C527.6 238.4 544 261.3 544 288V480C544 497.7 529.7 512 512 512H480C462.3 512 448 497.7 448 480V432H128V480C128 497.7 113.7 512 96 512H64C46.33 512 32 497.7 32 480V288C32 261.3 48.36 238.4 71.61 228.8L106.8 128.3C119.7 91.49 153.4 66.31 192 64.15L192 64V32C192 14.33 206.3 0 224 0L352 0zM197.4 128C183.8 128 171.7 136.6 167.2 149.4L141.1 224H434.9L408.8 149.4C404.3 136.6 392.2 128 378.6 128H197.4zM128 352C145.7 352 160 337.7 160 320C160 302.3 145.7 288 128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352zM448 288C430.3 288 416 302.3 416 320C416 337.7 430.3 352 448 352C465.7 352 480 337.7 480 320C480 302.3 465.7 288 448 288z"/>
								</svg>
							</div>
							<h3 className="mb-2 text-2xl text-gray-800 font-semibold">Taxi Arrangement</h3>
							<p>We also arrange quick and timely taxis for our traveling guests.</p>
						</div>
					</div>

					{/* Restaurant  */}
					<div>
						<div className="flex flex-col pt-5 md:pt-16 px-10">
							<div className="mx-auto mb-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 448 512">
									<path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z"/>
								</svg>
							</div>
							<h3 className="mb-2 text-2xl text-gray-800 font-semibold">Restaurant</h3>
							<p>We serve a wide range of continental, Indian and Chinese cuisine.</p>
						</div>
					</div>

					{/* Laundry and Dry Cleaning  */}
					<div>
						<div className="flex flex-col pt-5 md:pt-16 px-10">
							<div className="mx-auto mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 640 512">
								<path d="M640 162.8c0 6.917-2.293 13.88-7.012 19.7l-49.96 61.63c-6.32 7.796-15.62 11.85-25.01 11.85c-7.01 0-14.07-2.262-19.97-6.919L480 203.3V464c0 26.51-21.49 48-48 48H208C181.5 512 160 490.5 160 464V203.3L101.1 249.1C96.05 253.7 88.99 255.1 81.98 255.1c-9.388 0-18.69-4.057-25.01-11.85L7.012 182.5C2.292 176.7-.0003 169.7-.0003 162.8c0-9.262 4.111-18.44 12.01-24.68l135-106.6C159.8 21.49 175.7 16 191.1 16H225.6C233.3 61.36 272.5 96 320 96s86.73-34.64 94.39-80h33.6c16.35 0 32.22 5.49 44.99 15.57l135 106.6C635.9 144.4 640 153.6 640 162.8z"/>
							</svg>
							</div>
							<h3 className="mb-2 text-2xl text-gray-800 font-semibold">Laundry &amp; Dry Cleaning</h3>
							<p>We provide potent and quick laundry and dry cleaning services.</p>
						</div>
					</div>

					{/* Back-up Power  */}
					<div>
						<div className="flex flex-col pt-5 md:pt-16 px-10">
							<div className="mx-auto mb-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
								</svg>
							</div>
							<h3 className="mb-2 text-2xl text-gray-800 font-semibold">Back-Up Power</h3>
							<p>Our facility has a back-up power system, in case of outage.</p>
						</div>
					</div>
				</div>
			</div>

			{/* Rooms */}
			<div className='h-screen'>
				a
			</div>
		</div>
	)
}

export default Home;