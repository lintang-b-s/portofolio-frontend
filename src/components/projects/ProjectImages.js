import React from "react";
import 'tw-elements';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

export const ProjectImages = (props) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div className="mb-10 sm:mb-0" >
                    <img
                        src={props.project.images}
                        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                        alt={props.project.name}
                        
                    />
                    <br>

                    </br>
                    


                </div>






    </div>

    
    )
}





ProjectImages.propTypes = {
    project: PropTypes.object.isRequired,
  };

  
export default ProjectImages;