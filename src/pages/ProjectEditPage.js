import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import ImageUpload from "../components/shared/ImageUpload.js"
import { useForm } from "../customHooks/form-hook"

import { useGetProjectDetails } from "../customHooks/useGetProjectDetails"
import { toast } from 'react-toastify';

import { updateProject, listProjectDetails } from "../actions/projectAction.js"
import { AiOutlineCloudUpload } from "react-icons/ai";
import { getProfileOneDetails, updateProfile } from "../actions/profileAction.js"
import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_RESET,
  PROJECT_UPDATE_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,

    
} from '../constants/projectConstants.js'
import { listOrganizations } from "../actions/organizationAction.js"
import { useGetOrganizations } from "../customHooks/useGetOrganizations.js"
import { logout } from "../actions/userAction.js"


const ProjectEditPage = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ description, setDescription] = useState('');
    const [ date1, setDate1 ] = useState('');
    const [images, setImages] = useState('');
    const maxNumber = 69;
    const [ technologies, setTechnologies ] = useState('');
    const [ affiliation, setAffiliation ] = useState('');
 
    const [ profileName, setProfileName ] = useState('');
    const [ projectImg, setProjectImg ] = useState("");




    const profileDetails = useSelector((state) => state.profileOneDetails);
    const { profile } = profileDetails;

    const { loading, error ,project } = useSelector((state) => state.projectDetails);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
 
    const { 
      loading: loadingListOrg,
      error: errorListOrg,
      organizations }  = useGetOrganizations();
   
      const logoutHandler = () => {
        dispatch(logout());
      };
 
    const projectUpdate = useSelector((state) => state.projectUpdate);
    const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
    } = projectUpdate;

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

    // untuk upload cloudinary
    const handleProjectImageUpload = (e) => {
      const file = e.target.files[0];
      console.log("file: ", file)

      TransformFileData(file);
    }

    const TransformFileData = (file) => {
      const reader = new FileReader();

      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setProjectImg(reader.result);
          console.log("projectImg: ", projectImg)
          
        }
      } else {
        setProjectImg("");
      }
    }

//buat list affiliation
  // useEffect(() => {
    
  //   dispatch(listOrganizations());
    
  // },[dispatch])

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROJECT_UPDATE_RESET });
      navigate("/admin/projects");
    } 
    else if (project && project._id !== id){
      dispatch(listProjectDetails(id));
      dispatch(getProfileOneDetails("settings"));
      // dispatch(listOrganizations("settings"));
      dispatch(listOrganizations());
      //mungkin parameter nya settings
      
    }else {
      setName(project.name);
      setDescription(project.description);
      setDate1(project.date1);
      
      setTechnologies(project.technologies);
      setAffiliation(project.affiliation);
    
      setProfileName(profile._id);

 
    }

  
 

  }, [dispatch, id, project])


  const submitHandler =  (e) => {
    e.preventDefault();

    //salah
    const formData = new FormData();
    formData.set("name", name);
    formData.set("description", description);
    formData.set("date1", date1);
    // if(formState.inputs.images){
    //   formData.append("images", formState.inputs.images.value);
    // }

    formData.append("images", projectImg);
    console.log("projectImg: ", projectImg)
    
    formData.set("technologies", technologies);
    formData.set("profile", profileName);
    if (affiliation != 'Please Select a value!'){
      formData.set("affiliation", affiliation);
    }
    

    console.log("formData: ", formData)
    console.log("affiliation", affiliation)
    


  

    dispatch(updateProject(project._id, formData));

   

 
  

  }

   
//   const onChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImagesPreview([]);
//     setImages([]);
//     setOldImages([]);

//     files.forEach((file) => {
//         const reader = new FileReader();

//         reader.onload = () => {
//             if (reader.readyState === 2) {
//                 setImagesPreview((oldArray) => [
//                     ...oldArray,
//                     reader.result,
//                 ]);
//                 setImages((oldArray) => [...oldArray, reader.result]);
//             }
//         };

//         reader.readAsDataURL(file);
//     });
// };

  


    return (

      <div className="flex flex-wrap gap-x-3">
        <aside className="sidebar  w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="space-y-2">
                <li>
                    <Link to={'/admin/sidebarProfiles'}>
                        <div  className="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span  className="ml-3">Profile</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/projects'}>
                        <div  className="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        <span  className="flex-1 ml-3 whitespace-nowrap">Projects</span>
                        <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/organizations'}>
                        <div  className="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span  className="flex-1 ml-3 whitespace-nowrap">Organizations</span>
                        <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/activities'}>
                        <div  className="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        <span  className="flex-1 ml-3 whitespace-nowrap">Activities</span>
                        </div>
                    </Link>
                </li>
            
                <li>
                    <Link to={'/admin/logout'}>
                        <div  className="flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                        <span onClick={logoutHandler} className="flex-1 ml-3 whitespace-nowrap">Log out</span>
                        </div>
                    </Link>
                </li>
           
            </ul>
        </div>
        </aside>

        <div class={`non-sidebar basis-0  grow  px-7 md:px-10 mx-auto w-full  `}>
          
          
            <title>Edit project</title>
          
          <h1>Edit project </h1>
          <br></br>
          
          {/* {loading ? (
            <Loader></Loader>
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : ( */}

          {/* value nya salah?  */}


          <form onSubmit={submitHandler} encType="multipart/form-data">
              <div className="relative z-0 mb-6 w-full group" controlId="name">
               
                
                <input type="text" name="projectName"   value={name}  onChange={(e) => setName(e.target.value)} id="projectName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="projectName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Name ({project._id}, {name})</label>

              </div>
              <div className="relative z-0 mb-6 w-full group"   controlId="description">
                
               
                
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Project description</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}  rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

              </div>
              <div className="relative z-0 mb-6 w-full group" controlId="date1">
                
                <input type="text" name="date1" value={date1}  onChange={(e) => setDate1(e.target.value)} id="date1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
                <label htmlFor="date1" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Mulai (YYYY-MM-DD)</label>

              </div>
              <div className="relative z-0 mb-6 w-full group" controlId="customFile">
            
                {/* <ImageUpload
                  center
                  id="images"
                  onInput={inputHandler}
                  errorText="Please provide an image."
                  name="images"
                /> */}

                <input
                id="imgUpload"
                accept="image/*"
                type="file"
                onChange={handleProjectImageUpload}
                required
              />
              
              </div> 
              <div className="relative z-0 mb-6 w-full group" controlId="technologies">
                
               

                <input type="text" name="technologies"  value={technologies}  onChange={(e) => setTechnologies(e.target.value)} id="technologies" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
                <label htmlFor="technologies" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teknologi yang dipakai</label>


              </div>

              <div className="relative z-0 mb-6 w-full group" controlId="affiliation">
                


                <label htmlFor="affiliation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Affiliation</label>
                  <select id="affiliation" name="affiliation" onChange={(e) => setAffiliation (e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  
                    <option name="affiliation" > Please select a Value! </option>
                    {organizations.map((org, index) => 
                      <option name="affiliation" key={index} value={org._id}>{org.name}</option>
                      )}
                    
                  
                    
                  </select>

              </div>
              <div className="relative z-0 mb-6 w-full group" controlId="profile">
                

                <label htmlFor="profile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Profile</label>
                <select id="profile" name="profile" onChange={(e) => setProfileName (e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option name="affiliation" > Please select a Value! </option>
                  <option name="profile"  value={profileName}>{profile.name}</option>
               
                  
                </select>

              </div>
              
              <div className="relative z-0 mb-6 w-full group">
                <button type="submit" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Update
                </button>
              
              </div>
            </form>
        
      
        </div>
      </div>

    )





}


export default  ProjectEditPage;
