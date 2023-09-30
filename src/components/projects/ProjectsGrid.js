import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from 'react-icons/fi';
import { useGetProjects } from '../../customHooks/useGetProjects';
import useScrollToTop from "../../customHooks/useScrollToTop";
import Loader from "../atoms/loader/Loader";
import Message from "../atoms/message/Message";
import ProjectSingle from './ProjectSingle';
import HomeProjectSection from './HomeProjectSection'
import { listProjects } from "../../actions/projectAction";

// kesalahan ada di sebelum fungsi renderprojects
//(di usegetprojects,projects,dll)
const ProjectsListPage = () => {
	
	const dispatch = useDispatch();
	const projectList = useSelector((state) => state.projectList);
	const { loading, error, projects } = projectList;
	useEffect(() => {
		dispatch(listProjects());
	}, [dispatch]);
	useScrollToTop();
	

	function renderProjects() {
		if (!projects) {
			return "tidak ada apa apa "
			
	};
		let bukannone = projects.filter(project => project.name!= "None")
		return bukannone
		.map((project) => (
			// project._id != "634fac5b60c8629acc985fe0"
			
				<div  key={project._id}>
					<ProjectSingle
						
						project={project}
					/>
				</div>
			
		) );
	}

	if (loading) {
		<Loader />;
	  }
	if (error) {
		<Message variant="danger" isDismissible>
			{error}
		</Message>;
	}

	return (
		<section className="py-6 sm:py-11 mt-6 sm:mt-11">
			<div className="text-center">
				<p className="font-medium text-xl sm:text-3xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects
				</p>
			</div>
			<div className="grid grid-cols-1 justify-center  sm:ml-5 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-10 scroll-pl-6 snap-x">
				
				{renderProjects()} 

			</div>


		</section>
	);
	

};





export default ProjectsListPage;
