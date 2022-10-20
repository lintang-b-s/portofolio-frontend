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

const Project = () => {

    const { id } = useParams();
    const { loading, error , project} = useGetProjectDetails(id);

	useScrollToTop();

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
    
    	// function renderProjectImages() {
      //   if (!project) {
      //     return "tidak ada apa apa "
            
          
          
      // };
      //   // return project
      //   // .map((project) => (
      //   //   <div  key={project._id}>
      //   //     <ProjectImages
              
      //   //       project={project}
      //   //     />
      //   //   </div>
      //   // ) );
    
      //   // return project.images.map((img) => (
      //   //     <div key={img._id}>
      //   //       <ProjectImages
                
      //   //         img={img}
      //   //       />
      //   //     </div>
      //   //   ) );

      //   return <ProjectImages project={project}/>;
        
      // }
    

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
            ease: 'easeInOut',
            duration: 0.6,
            delay: 0.15,
        }}
        className="container mx-auto mt-5 sm:mt-10"
    >

        <ProjectHeader project={project}/>
        [project.images[0].image]

        <ProjectImages project={project}/>
        {/* <ProjectInfo project={project}/> */}

    </motion.div>
    )
}


export default Project;
// error ada di ProjectsGrid