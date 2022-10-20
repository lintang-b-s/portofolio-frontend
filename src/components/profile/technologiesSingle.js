import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";



//algoritmanya error
const TechnologiesSingle = (props) => {




  
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
           { props.profile.technologies.map((tech, key) =>{
                return(
                    <div className="basis-1/5" key={key}>
                        <Tech tech={tech} />

                    </div>

                );

            })}

<<<<<<< HEAD
            {/* <img
                                src = {props.profile.technologies[0].image}
                                className="rounded-lg "
                                alt="gambar"
                            /> */}
=======

>>>>>>> upstream/main
        </div>
    
         
              
               
       
        
        
    )
   


}

const Tech = ( { tech } ) => {
    return (
       
            <Link to="/technologies/:id" aria-label="Technologies" >
                <div className='snap-start w-fit h-fit rounded-lg shadow-lg cursor-pointer bg-secondary-light dark:bg-ternary-dark mb-10'>
                    <div  >
                        <img
                                src = {tech.image}
                                className="rounded-lg "
                                alt="gambar"
                            />
                    </div>

                    <div  className="text-center px-4 py-6">
                        <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                            {tech.name}
                        </p>
                                
                    </div>

                    
                </div>
                

            </Link>
  
    )
}

TechnologiesSingle.propTypes = {
    profile: PropTypes.object.isRequired,
    
  };

export default TechnologiesSingle;