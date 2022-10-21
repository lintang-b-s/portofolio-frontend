import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams  } from "react-router-dom";
import { Link } from "react-router-dom";
import { createProfileTech, deleteProfileTech, profileDetail } from "../actions/profileAction.js"
import { projectDetailsReducer } from "../reducers/projectReducers";
import CardProfile from "../components/profile/cardProfile.js";
import { useGetProfileDetails } from "../customHooks/useGetProfileDetails.js";
import { getProfileOneDetails, updateProfile } from "../actions/profileAction.js"
import { propTypesSelected } from "@material-tailwind/react/types/components/select.js";
import { listOrganizations } from "../actions/organizationAction.js";
import { useGetOrganizations } from "../customHooks/useGetOrganizations.js";
import { useGetProjects } from "../customHooks/useGetProjects.js";
import { useGetActivities } from "../customHooks/useGetActivities.js";
import { listActivities } from "../actions/activitiesAction.js";
import { listProjects } from "../actions/projectAction.js";
import { useForm } from "../customHooks/form-hook"
import ImageUpload from "../components/shared/ImageUpload.js"
import dateFormatter from "../utils/dateFormatter";


const SidebarProfile = () => {
    //dapetin id dari params link nya
    const { id:id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [education, setEducation] = useState("");
    const [birthDate, setDate] = useState("2003-06-11");
    const [technologies, setTechnologies] = useState([]);
    const [ affiliation, setAffiliation ] = useState('');
    const [ activitiesName, setActivitiesName ] = useState('');
    const [ projectsName, setProjectsName ] = useState('');
    const [ techName, setTechName ] = useState('');
    const [ techMessage, setTechMessage ]= useState("");
    //buat hide show component
    const [showHide, setShowHide] = useState(false);

    

    const{
        loading: loadingProjects,
        error: errorProjects,
        projects
    } = useGetProjects();

    const {
        loading: loadingListActv,
        error: errorListActv,
        activities
      } = useGetActivities();
    
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

   
    const profileDetails = useSelector((state) => state.profileOneDetails);
    const { loading, error , profile } = profileDetails;

    const profileUpdate = useSelector((state) => state.profileUpdate);
    const { success } = profileUpdate

    const { 
        loading: loadingListOrg,
        error: errorListOrg,
        organizations }  = useGetOrganizations();

    const profileDeleteTechnologies = useSelector((state) =>
        state.profileDeleteTechnologies);
    const {
        loading: deleteTechLoading,
        error: deleteTechError,
        success: deleteTechSuccess
    } = profileDeleteTechnologies;


    const profileTechnologiesCreate = useSelector((state) => 
        state.profileTechnologiesCreate);

    const {
        loading: createTechLoading,
        error: createTechError,
        success: createTechSuccess
    } = profileTechnologiesCreate;


    //@desc form utk upload images
    const [formState, inputHandler, setFormData] = useForm(
        {
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );

    
// salah di logic useeffectnya
    useEffect(() => {
        if (!userInfo) {
            navigate("/admin");
        }
        else if (profile._id != "634e3d3e0efd4866c6062b35"){
            
            dispatch(getProfileOneDetails("settings"));
            dispatch(listOrganizations());
            dispatch(listProjects());
            dispatch(listActivities());
              
            // dispatch(getProfileOneDetails());
        
            
         
        } else{
            setName(profile.name);
            setDescription(profile.description);
            setEducation(profile.education);
            setDate(profile.birthDate) 
            


        }
    }, [
        dispatch, profile
    ])
    
    //untuk merender

    useEffect(() => {
        
        // setTechnologies(profile.technologies)
    })


    useEffect(() => {
        if (createTechSuccess){
            setTechMessage("Tech Added!");
            setTimeout(() => {
                setTechMessage("");
            },5000)
        }
        if (createTechError) {
            setTechMessage(createTechError);
            setTimeout(() => {
                setTechMessage("");
            }, 10000)
        }




    }, [createTechSuccess, createTechError]);

    useEffect(() => {
        if (deleteTechSuccess) {
            setTechMessage("Tech removed.");
            setTimeout(() => {
                setTechMessage("");
            }, 5000);
        }
        if (deleteTechError) {
            setTechMessage(deleteTechError);
            setTimeout(() => {
                setTechMessage("");

            }, 10000);
        }
    }, [deleteTechSuccess, deleteTechError]);


    //@desc untuk membuat form technologies
    function createTechHandler (e) {
        e.preventDefault();
        const techData = new FormData();
        techData.set("name",techName)
        techData.append("images", formState.inputs.images.value)


        dispatch(createProfileTech(techData));
        setTechName("");

    }

    //@desc untuk menghapus tech
    function removeTechHandler(e, techId){
        e.preventDefault();
        dispatch(deleteProfileTech(techId));
    }


    //untuk merender profilecard
    function renderProfile() {
		if (!profile) {
			return "tidak ada apa apa "
				
			
			
	};
		return (
        <div>
            <CardProfile
                
                profile={profile}
            />
			</div>
        )
		
	}



    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProfile({
            id: profile._id,
            name,
            description,
            birthDate,
            education,
            organizations: affiliation,
            activities: activitiesName,
            projects: projectsName
        }))
    }


   return(

    <div class="flex flex-wrap gap-x-3">
        <aside class="sidebar  w-64" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul class="space-y-2">
                <li>
                    <Link to={'/admin/sidebarProfiles'}>
                        <div  class="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span  class="ml-3">Profile</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/projects'}>
                        <div  class="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        <span  class="flex-1 ml-3 whitespace-nowrap">Projects</span>
                        <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/organizations'}>
                        <div  class="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span  class="flex-1 ml-3 whitespace-nowrap">Organizations</span>
                        <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/activities'}>
                        <div  class="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        <span  class="flex-1 ml-3 whitespace-nowrap">Activities</span>
                        </div>
                    </Link>
                </li>
            
                <li>
                    <Link to={'/admin/logout'}>
                        <div  class="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Log out</span>
                        </div>
                    </Link>
                </li>
           
            </ul>
        </div>
        </aside>
     
        <div class={`non-sidebar basis-0  grow  px-7 md:px-10 mx-auto w-full  `}>
                {/* ini settting untuk profile */}
            <div className="flex flex-wrap">
            {/* utk setting profile */}
                <div className=" w-full lg:w-8/12 px-4 ">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">My Profile</h6>
                            <button
                            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                            >
                            Settings
                            </button>
                        </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form onSubmit={submitHandler}>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                            </h6>
                            <div className="flex flex-wrap" >
                            
                            <div className="w-full lg:w-6/12 px-4" >
                                <div className="relative w-full mb-3"  >
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                     Nama
                                </label>
                                <input
                                    type="text"
                                    className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                <label
                                    className="block  uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Education
                                </label>
                                <input
                                    type="text"
                                    className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value)}
                                />
                                </div>
                            </div>
                            {/* <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Technologies
                                </label>
                                

                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        onChange={((e) => setTechnologies(e.target.value.split(",")))}
                                        value={technologies}

                                    />
                             
                                </div>
                            </div> */}
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                <label
                                    className="block  uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Birth Date
                                </label>
                                <input
                                    type="text"
                                    className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    value= {birthDate}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                </div>
                            </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative z-0 mb-6 w-full group" controlId="affiliation">
                    


                                        <label for="affiliation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Add Organization</label>
                                        <select id="affiliation" name="affiliation" onChange={(e) => setAffiliation (e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        
                                            <option name="affiliation" > Please select a Value! </option>
                                            {organizations.map((org, index) => 
                                            <option name="affiliation" key={index} value={org._id}>{org.name}</option>
                                            )}
                                            
                                        
                                            
                                        </select>

                                    </div>
                                </div>
                            </div>
                                <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative z-0 mb-6 w-full group" controlId="activities">

                                        <label for="activities" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Add Activities</label>
                                            <select id="activities" name="activities" onChange={(e) => setActivitiesName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option name="affiliation" > Please select a Value! </option>
                                            {activities.map((actv, index) => 
                                                <option name="activities" key={index} value={actv._id}>{actv.name}</option>
                                            )}

                                            </select>

                                        </div>
                                </div>


                                <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative z-0 mb-6 w-full group" controlId="projects">

                                            <label for="projects" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Add projects</label>
                                                <select id="projects" name="projects" onChange={(e) => setProjectsName (e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option name="affiliation" > Please select a Value! </option>
                                                    {projects.map((project, index) => 
                                                        <option name="projects" key={index} value={project._id}>{project.name}</option>
                                                    )}

                                                </select>

                                        </div>
                                </div>

                            

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            About Me
                            </h6>
                            <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Description
                                </label>
                                <textarea
                                    type="text"
                                    className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows="4"
                                ></textarea>
                                </div>
                            </div>
                            <button type="submit" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Submit
                            </button>
                            </div>
                        </form>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Add Technologies
                            </h6>
                        <form onSubmit={createTechHandler} enctype="multipart/form-data">
                            <div className="w-full lg:w-6/12 px-4" >
                                    <div className="relative w-full mb-3"  >
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={techName}
                                        onChange={(e) => setTechName(e.target.value)}
                                    />
                                    </div>
                            </div>


                            <div className="w-full lg:w-6/12 px-4" >
                                    <div className="relative w-full mb-3"  >
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Add Tech Image
                                    </label>
                                    <div className="relative z-0 mb-6 w-full group" controlId="customFile">
                                    
                                        <ImageUpload
                                        center
                                        id="images"
                                        onInput={inputHandler}
                                        errorText="Please provide an image."
                                        name="images"
                                        />
                                    
                                    </div> 
                                    
                                    </div>
                            </div>
                                <div className="w-full lg:w-6/12 px-4" >
                                          <div className="relative z-0 mb-6 w-full group">
                                            <button type="submit" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                               Add Tech
                                            </button>
                                        
                                        </div>    
                                </div>

                                <ul>
                                    {profile.technologies &&
                                    profile.technologies.length !== 0 &&
                                    profile.technologies.map((tech) => (
                                        <li key={tech._id} className="mb-3">
                                        <div className="flex flex-row justify-between">
                                            <div className="">
                                                <div className="tech-title">
                                                    {tech.name}
                                                </div>
                                                <div className="tech-date">
                                                    {dateFormatter(tech.createdAt)}
                                                </div>
                                            </div>
                                            <div className="">
                                            <button
                                                className="btn text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mb-2"
                                                onClick={(event) =>
                                                removeTechHandler(event, tech._id)
                                                }
                                            >
                                                Delete
                                            </button>
                                            </div>
                                        </div>
                                        <hr />
                                        </li>
                          ))}
                      </ul>              


                        
                        </form>

                        </div>
                    </div>



                </div>
                {/* utk tampilan profile */}
                <div className="w-full lg:w-4/12 px-4">
                    
                </div>
                    {renderProfile()}
                </div>

            </div>


        </div>
   

   





    )
}


export default SidebarProfile;