import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";



const OrganizationSingle = (props) => {
    return (
        <div >
            <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/omahti.jpg" alt="omahti"/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.profile.organizations[0].name}</h5>
                    <p class="mb-3 text-center text-xl font-medium text-gray-700 dark:text-gray-400">{props.profile.organizations[0].position} - {props.profile.organizations[0].date1.slice(0,4)}</p>
                </div>
            </a>
        </div>
            
        
        
        

        

        
    
    )
}

OrganizationSingle.propTypes = {
    organization: PropTypes.object.isRequired,
    
  };

export default OrganizationSingle;