import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScrollToTop from "../../customHooks/useScrollToTop";
import { FiArrowDownCircle } from 'react-icons/fi';
import lintang from '../../images/lintang.jpg'
import { motion } from 'framer-motion';
import { profileDetail } from '../../actions/profileAction'
import OrganizationSingle from '../profile/organizationSingle';
import Loader from "../atoms/loader/Loader";
import Message from "../atoms/message/Message";


const OrganizationListPage = () => {
	
	const [activeTheme] = useThemeSwitcher();

	const dispatch = useDispatch();
	const profileDetails = useSelector((state) => state.profileDetails);
	const { loading, error, profile } = profileDetails;
	useEffect(() => {
		dispatch(profileDetail());
	}, [dispatch]);
	useScrollToTop();

	function renderOrganization() {
		if (!profile) {
			return "tidak ada apa apa "
				
			
			
	};

		let bukannone = profile.filter(pro => pro.name!= "None")
		return bukannone
		.map((profile) => (
			<div className='flex justify-center' key={profile._id}>
				<OrganizationSingle
					
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
        <section className="py-6 sm:py-11 mt-6 sm:mt-11">
			<div className="text-center">
				<p className="font-medium text-xl sm:text-3xl mb-1 text-ternary-dark dark:text-ternary-light">
					Organizations
				</p>
			</div>

            <div>
                {renderOrganization()}
            </div>
        </section>

		
	);
};

export default OrganizationListPage;