import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import ReactDOM from 'react-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';
import { FaSlash, FaGithub, FaInstagram , FaLinkedin, FaCode} from 'react-icons/fa';
import Button from '../reusable/Button.js';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	// function showHireMeModal() {
	// 	if (!showModal) {
	// 		document
	// 			.getElementsByTagName('html')[0]
	// 			.classList.add('overflow-y-hidden');
	// 		setShowModal(true);
	// 	} else {
	// 		document
	// 			.getElementsByTagName('html')[0]
	// 			.classList.remove('overflow-y-hidden');
	// 		setShowModal(false);
	// 	}
	// }

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between  sm:items-center py-6"> {/* justify nya tak ilangain awalnya sm:justify-between*/}
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
				
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
                        
					>
						About Me
					</Link>
					
			
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
					<Link>
						<div className='flex flex-row justify-between border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
							<a className='mx-3' href="https://github.com/protagonist77/" target="__blank"><FaGithub size={30}/></a>
							<a className='mx-3' href="https://instagram.com" target="__blank"><FaInstagram size={30}/></a>
							<a className='mx-3' href="https://www.linkedin.com/in/lintang-birda-saputra-4aa989220/" target="__blank"><FaLinkedin size={30}/></a>
						</div>
					</Link>
	
				</div>

				
                   
                {/* Header layar > large */}
                <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                 
					
                    <Link
                        to="/"
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-3 mb-2 sm:py-2"
                        aria-label="About Me"
                    >
                        About Me
                    </Link>
					<FaSlash size={20}/>
					
					
                    <Link
                        to="/"
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-3 mb-2 sm:py-2"
                        aria-label="Contact"
                    >
                        Contact
                    </Link>
                </div>
              

                <div className='sm:mx-auto font-mono text-lg font-semibold antialiased '>
						<Link to="/">
							{activeTheme === 'dark' ? (
                                <div>
                                    <h1 className='tracking-wider'>Lintang</h1>
                                </div>
							) : (
                                <div>
                                    <h1 className='tracking-wider'>Lintang</h1>
                                </div>
							
							)}
						</Link>
				</div>

				{/* Header sisi kanan */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
			
					</div>

				
				</div>
				{/* header sisi kanan link social media*/}
				<div className="hidden sm:flex sm:justify-between items-center sm:ml-10 flex-col sm:flex-row">
					<a className='mx-3' href="https://github.com/lintang-b-s" target="__blank"><FaGithub size={30}/></a>
					<a className='mx-3' href="https://www.linkedin.com/in/lintang-birda-saputra-4aa989220/" target="__blank"><FaLinkedin size={30}/></a>
					<a className='mx-3' href="https://leetcode.com/lintang-b-s/" target="__blank"><FaCode size={30} ></FaCode> </a>
							

				</div>
			</div>
			

			
		</motion.nav>
	);
};

export default AppHeader;
