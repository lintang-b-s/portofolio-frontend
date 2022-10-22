// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FiSearch } from 'react-icons/fi';
// import Loader from "../atoms/loader/Loader";
// import Message from "../atoms/message/Message";
// // import { listProjectDetails } from "../../actions/projectAction.js";
// import { useGetProjectDetails } from "../../customHooks/useGetProjectDetails.js";
// import { motion } from 'framer-motion';
// // import ProjectGallery from '../components/projects/ProjectGallery';

// // import ProjectInfo from '../components/projects/ProjectInfo';
// import { useParams } from "react-router";
// import useScrollToTop from "../../customHooks/useScrollToTop";
// import Projectheader from './ProjectHeader.js'
// //project atau projects ?

// const ProjectDetailsPage = () => {

    

//     return (

//     )
// }




const ProjectDetailsInfo = (props) => {
    return(
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

export default ProjectDetailsInfo;



