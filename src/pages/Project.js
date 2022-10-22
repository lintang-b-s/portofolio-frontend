import Button from '../components/reusable/Button';
import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectDetails from '../components/projects/projectDetails.js';
import { useGetProjectDetails } from "../customHooks/useGetProjectDetails.js";
import { motion } from 'framer-motion';
// import ProjectGallery from '../components/projects/ProjectGallery';
// import ProjectInfo from '../components/projects/ProjectInfo';
import { useParams } from "react-router";
import useScrollToTop from "../customHooks/useScrollToTop";
import Loader from "../components/atoms/loader/Loader.jsx";
import Message from "../components/atoms/message/Message.jsx";
import ProjectHeader from '../components/projects/ProjectHeader.js';
import  ProjectImages from "../components/projects/ProjectImages.js"
//project atau projects ?
import ProjectDetailsInfo from "../components/projects/projectDetails.js"
import { useEffect } from 'react';
import { listProjectDetails } from '../actions/projectAction';
import { FiClock} from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";

const Project = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { loading, error ,project } = useSelector((state) => state.projectDetails);
    useEffect(() => {
      if (project && project._id !== id){
        dispatch(listProjectDetails(id));
      }
    }, [dispatch, id, project]);

	

    if (loading || !project) {
        return <Loader />;
      }
      if (error) {
        return (
          <Message variant="danger" isDismissible>
            {error}
          </Message>
        );
      }
    
    
    

    return (
      
    //     <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1, delay: 1 }}
    //     transition={{
    //         ease: 'easeInOut',
    //         duration: 0.6,
    //         delay: 0.15,
    //     }}
    //     className="container mx-auto mt-5 sm:mt-10"
    // >
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
              <div className="mb-10 sm:mb-0" >
                          {/* <img
                              src={project.images}
                              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                              alt={project.name}
                              
                          /> */}

                          <img
                            src = {project.images}
                            className="rounded-lg"
                            alt="proyek"

                        />
                         <br />
                            
                          
                          


                      </div>






          </div>

          <div>
          <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
            {project.name}
          </p>
          <div className="flex">
            <div className="flex items-center mr-10">
              <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
              <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {project.date1 && new Intl.DateTimeFormat("en-US", {
                                dateStyle: "medium",
                                timeStyle: "short",
                                }).format(new Date(project.date1.toString()))} - {project.date2 && new Intl.DateTimeFormat("en-US", {
                                dateStyle: "medium",
                                timeStyle: "short",
                                }).format(new Date(project.date2.toString()))}
              </span>
            </div>
            
          </div>
        </div>


        {/* sisi kiri */}
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						Tentang Klien
					</p>
					<ul className="leading-loose">
						
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										
									>
										<span>Nama:  </span>
										<a
											
											className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
													
											aria-label="Project Website and Phone"
										>
											Lintang Birda S
										</a>
									</li>
								
							
					</ul>
				</div>
        {/* Obyektif */}
        <div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Objektif
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
        

        {/* tools & technologies */}
        <div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Tools & Technologies
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {project.technologies}

					</p>
				</div>                       


        {/* tengah */}

        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">




        </p>
        <p
						
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{project.description}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?
					</p>



                                
          </div>
        </div>

      </div>

    </div>

    
    )
}


export default Project;
