import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScrollToTop from "../../customHooks/useScrollToTop";
import { FiArrowDownCircle } from 'react-icons/fi';
import lintang from '../../images/lintang.jpg'
import { motion } from 'framer-motion';
import { profileDetail } from '../../actions/profileAction'
import ProfileSingle from '../profile/profileSingle';
import Loader from "../atoms/loader/Loader";
import Message from "../atoms/message/Message";

const AppBanner = () => {
	
	const [activeTheme] = useThemeSwitcher();

	const dispatch = useDispatch();
	const profileDetails = useSelector((state) => state.profileDetails);
	const { loading, error, profile } = profileDetails;
	useEffect(() => {
		dispatch(profileDetail());
	}, [dispatch]);
	useScrollToTop();

	function renderProfile() {
		if (!profile) {
			return "tidak ada apa apa "
				
			
			
	};
<<<<<<< HEAD
		let bukannone = profile.filter(pro => pro.name!= "None")
		return bukannone
=======
		return profile
>>>>>>> upstream/main
		.map((profile) => (
			<div key={profile._id}>
				<ProfileSingle
					
					profile={profile}
				/>
			</div>
		) );
	}


	if (loading) {
		<Loader />;
	  }
	if (error) {
		<Message variant="danger" isDismissible>
			{error}
		</Message>;
	}

	return (
		// <motion.section
		// 	initial={{ opacity: 0 }}
		// 	animate={{ opacity: 1 }}
		// 	transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		// 	className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		// >
		<div>
			{renderProfile()}
		</div>

			// {/* <div className="sm:ml-10 w-full md:w-2/3 text-left items-center">
			// 	<motion.h1
			// 		initial={{ opacity: 0 }}
			// 		animate={{ opacity: 1 }}
			// 		transition={{
			// 			ease: 'easeInOut',
			// 			duration: 0.9,
			// 			delay: 0.1,
			// 		}}
			// 		className="font-extrabold text-2xl lg:text-3xl xl:text-3xl text-center sm:text-left  dark:text-primary-light tracking-wide"
			// 	>
			// 		Hi! Kenalin ,Aku Lintang
			// 	</motion.h1>
			// 	<motion.p
			// 		initial={{ opacity: 0 }}
			// 		animate={{ opacity: 1 }}
			// 		transition={{
			// 			ease: 'easeInOut',
			// 			duration: 0.9,
			// 			delay: 0.2,
			// 		}}
			// 		className="font-general-medium mt-5 text-lg md:text-xl lg:text-xl xl:text-xl text-center sm:text-left leading-normal text-gray-600 dark:text-gray-200"
			// 	>
			// 		Mahasiswa Ilmu Komputer UGM tahun pertama
			// 	</motion.p>
				
			// </div>
          
            // <motion.div
            //     initial={{ opacity: 0, y: -180 }}
            //     animate={{ opacity: 1, y: 0 }}
            //     transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            //     className="w-1/2 h-auto sm:w-1/5 text-right float-right mt-8 sm:mr-7 sm:mt-0 "
            // >
            //     <img
            //         src={lintang

            //         }
            //         alt="Lintang"
            //         className='rounded-full max-w-full xs:h-auto  align-middle border shadow-lg'
            //     />
                
            // </motion.div> */}
            
		// </motion.section>
	);
};

export default AppBanner;
