import React from "react";
import PropTypes from "prop-types";
import { FiClock, FiTag } from 'react-icons/fi';

const Projectheader = (props) => {
    return (
        <div>
            <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{props.project.name}
			</p>
            <div className="flex">
                <div className="flex items-center">
                    <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{props.project.technologies}
					</span>
                </div>
                <div>
             
                </div>

            </div>
        </div>
    )
}

Projectheader.propTypes = {
    project: PropTypes.object,
  };
  
export default Projectheader;