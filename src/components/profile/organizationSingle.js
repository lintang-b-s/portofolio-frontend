import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";



const OrganizationSingle = (props) => {
    return (
        // <div >
        //     <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        //         <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.organizations.organizations[0].images} alt="omahti"/>
        //         <div className="flex flex-col justify-between p-4 leading-normal">
        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.organizations.organizations[0].name}</h5>
        //             <p className="mb-3 text-center text-xl font-medium text-gray-700 dark:text-gray-400">{props.organizations.organizations[0].position} - {props.organizations.organizations[0].date1.slice(0,4)}</p>
        //         </div>
        //     </a>
        // </div>
            
        <>
        
            {/* {props.organizations.map((org) => ( */}
                <div >
                <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    {/* <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.org.images} alt="omahti"/>
                     */}
                     { props.org.images && <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.org.images.url} alt="omahti"/> }
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.org.name}</h5>
                        <p className="mb-3 text-center text-xl font-medium text-gray-700 dark:text-gray-400">{props.org.position} - {props.org.date1.slice(0,4)}</p>
                    </div>
                </a>
            </div>


            {/* ))} */}

        </>
        
        

        

        
    
    )
}

OrganizationSingle.propTypes = {
    organizations: PropTypes.object.isRequired,
    
  };

export default OrganizationSingle;