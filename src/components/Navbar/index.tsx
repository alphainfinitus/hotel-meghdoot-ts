const Navbar = () => {

const toggleMenu = () => {
	const menu = document.querySelector('#menu');
	menu?.classList.toggle('hidden');
}

	return (
		<nav
				className="
					flex flex-wrap
					items-center
					justify-between
					w-full
					py-4
					md:py-0
					px-4
					text-lg text-gray-300
					fixed
					top-0
					z-50
				"
			>
				{/* Toggle Menu Btn Mobile */}
				<svg
						id="menu-button"
						onClick={toggleMenu}
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 cursor-pointer md:hidden block"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
				</svg>

				{/* Logo */}
				<div>
					<a id="logo" href="#">
						Meghdoot
					</a>
				</div>

				{/* Book Now Button Mobile*/}
				<a href="#" className="relative px-2 py-0 block md:hidden font-medium text-white group">
					<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
					<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

					<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
					<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
					
					<span className="relative flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
					</svg>
						<span>Book Now</span>
					</span>
				</a>
					
				{/* Menu */}
				<div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
					<ul
						className="
							pt-4
							text-base text-gray-300
							md:flex
							md:justify-between
							md:pt-0"
					>
						<li>
							<a className="md:p-4 py-2 block hover:text-purple-400" href="#"
								>Features</a
							>
						</li>
						<li>
							<a className="md:p-4 py-2 block hover:text-purple-400" href="#"
								>Pricing</a
							>
						</li>
						<li>
							<a className="md:p-4 py-2 block hover:text-purple-400" href="#"
								>Customers</a
							>
						</li>
						<li>
							<a className="md:p-4 py-2 block hover:text-purple-400" href="#"
								>Blog</a
							>
						</li>
						<li>
							<a
								className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
								href="#"
								>Sign Up</a
							>
						</li>
					</ul>
				</div>

				{/* Book Now Button */}
				<a href="#" className="relative px-4 py-1 hidden md:block font-medium text-white group">
					<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
					<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

					<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
					<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
					
					<span className="relative flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
					</svg>
						<span>Book Now</span>
					</span>
				</a>

		</nav>
	)
}

export default Navbar;