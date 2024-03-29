import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const ProjectSingle = (props) => {
    return (
        

        // <Link to={`/projects/${props.project._id}`} aria-label="Proyek" >
        <div aria-label="Proyek" >
            <div className='snap-start  rounded-lg shadow-lg  bg-secondary-light dark:bg-ternary-dark mb-10'>
                <div>
                    <a >

                        { props.project.images &&  <img src={props.project.images.url}  className="rounded-lg" alt="proyek" />}
                        \
                        </a>
                </div>

              
                <div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.name}
						</p>
                        <p>
                            {props.project.description}
                        </p>
				</div>
                <div className='text-center px-1 py-3'>
                    <p className="font-general-small text-md md:text-lg text-ternary-gray dark:text-ternary-light mb-2">
							teknologi yang digunakan: {props.project.technologies}
					</p>
                </div>
            </div>
            

        </div>
    
    )
}

ProjectSingle.propTypes = {
    project: PropTypes.object.isRequired,
    
  };

export default ProjectSingle;