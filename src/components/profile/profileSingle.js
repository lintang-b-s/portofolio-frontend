import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const ProfileSingle = (props) => {
    return (
        <div>
        <motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
        
            <div className="sm:ml-10 w-full md:w-2/3 text-left items-center">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className="font-extrabold text-2xl lg:text-3xl xl:text-3xl text-center sm:text-left  dark:text-primary-light tracking-wide"
                    >
                        Hi! Kenalin ,Aku {props.profile.name.slice(0,8)}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.2,
                        }}
                        className="font-general-medium mt-5 text-lg md:text-xl lg:text-xl xl:text-xl text-center sm:text-left leading-normal text-gray-600 dark:text-gray-200"
                    >
                        {props.profile.description}
                    </motion.p>

                    

                    
            </div>

            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="w-1/2 h-auto sm:w-1/5 text-right float-right mt-8 sm:mr-7 sm:mt-0 "
            >
                <img
                    src={props.profile.image.url}
                    alt="Lintang"
                    className='rounded-full max-w-full xs:h-auto  align-middle border shadow-lg'
                />
                
            </motion.div>
        </motion.section>
    </div>
            
        
        
        

        

        
    
    )
}

ProfileSingle.propTypes = {
    profile: PropTypes.object.isRequired,
    
  };

export default ProfileSingle;