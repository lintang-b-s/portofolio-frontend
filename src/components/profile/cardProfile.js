import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";


const CardProfile = (props) => {
    return ( 
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                            <div className="relative">
                                <img
                                alt="..."
                                src={props.profile.image}
                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                />
                            </div>
                            </div>
                            <div className="w-full px-4 text-center mt-20">
                            
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            {props.profile.name}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                            Surakarta
                            </div>
                            <div className="mb-2 text-blueGray-600 mt-10">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            -
                            </div>
                            <div className="mb-2 text-blueGray-600">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                            {props.profile.education}
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                {props.profile.description}
                                </p>
                                <a
                                href="#pablo"
                                className="font-normal text-lightBlue-500"
                                onClick={(e) => e.preventDefault()}
                                >
                                Show more
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}


CardProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    
  };

export default CardProfile;