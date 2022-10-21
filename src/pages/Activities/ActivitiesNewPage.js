import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import ImageUpload from "../../components/shared/ImageUpload.js"
import { useForm } from "../../customHooks/form-hook"

import { useGetProjectDetails } from "../../customHooks/useGetProjectDetails"
import { toast } from 'react-toastify';

import { createNewProject, listProjectDetails } from "../../actions/projectAction.js"
import { AiOutlineCloudUpload } from "react-icons/ai";
import { getProfileOneDetails, updateProfile } from "../../actions/profileAction.js"
import {
  ACTIVITES_LIST_REQUEST,
  ACTIVITES_LIST_SUCCESS,
  ACTIVITES_LIST_FAIL,
  ACTIVITES_DELETE_REQUEST,
  ACTIVITES_DELETE_SUCCESS,
  ACTIVITES_DELETE_FAIL,
  ACTIVITES_UPDATE_REQUEST,
  ACTIVITES_UPDATE_SUCCESS,
  ACTIVITES_UPDATE_RESET,
  ACTIVITES_UPDATE_FAIL,
  ACTIVITES_CREATE_REQUEST,
  ACTIVITIES_CREATE_RESET,
  ACTIVITES_CREATE_SUCCESS,
  ACTIVITES_CREATE_FAIL,
  ACTIVITES_CREATE_RESET,
  ACTIVITES_DETAILS_REQUEST,
  ACTIVITES_DETAILS_SUCCESS,
  ACTIVITES_DETAILS_FAIL,

    
} from '../../constants/activitiesConstants.js'
import { listOrganizations } from "../../actions/organizationAction.js"
import { useGetOrganizations } from "../../customHooks/useGetOrganizations.js"
import { useGetProfileDetails } from "../../customHooks/useGetProjectDetails.js";
import { createNewActivities, listActivities } from "../../actions/activitiesAction.js";
import { useGetActivities  } from "../../customHooks/useGetActivities.js";


const NewActivitiesPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ date1, setDate1 ] = useState('');
    const [ date2, setDate2 ] = useState('');
    const [ profileName, setProfileName ] = useState('');
    const [ affiliationName , setAffiliationName ] = useState('');


    const profileDetails = useSelector((state) => state.profileOneDetails);
    const { profile } = profileDetails;

    const {
        loading: loadingListActv,
        error: errorListActv,
        activities
      } = useGetActivities();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const { 
      loading: loadingListOrg,
      error: errorListOrg,
      organizations }  = useGetOrganizations();


      const activitiesCreate = useSelector((state) => state.activitiesCreate);
      const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate
      } = activitiesCreate;

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


      useEffect(() => {
        if(!userInfo) navigate("/admin");
        if (successCreate) {
            dispatch({ type: ACTIVITIES_CREATE_RESET });
            navigate("/admin/activities");

            
        }

        if (!activities){
            dispatch(listActivities());
        }

        if (profile.name != "Lintang Birda Saputra"){
            dispatch(getProfileOneDetails("settings"))
        }

        setProfileName(profile._id);



      }, [dispatch, id, profile, activities]);

      const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("name", name);
        formData.set("description", description);
        formData.set("date1", date1);
        if (date2){
            formData.set("date2", date2);
        }
        
        formData.set("profile", profileName);
        formData.set("affiliation", affiliationName);

        dispatch(createNewActivities(formData));

      }



      return (
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
                        <title>Add Activities</title>
                        
                        <h1>Add Activities </h1>
                        <br></br>


                        <form onSubmit={submitHandler} >
                            <div className="relative z-0 mb-6 w-full group" controlId="name">
                                
                                    
                                <input type="text" name="activitieName"   value={name}  onChange={(e) => setName(e.target.value)} id="activitieName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="activitieName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Activity Name ( {name})</label>

                            </div>
                            <div className="relative z-0 mb-6 w-full group"   controlId="description">
                                
                            
                                
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Activity description</label>
                                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>

                            </div>

                            <div className="relative z-0 mb-6 w-full group" controlId="date1">
                                
                                <input type="text" name="date1" value={date1}  onChange={(e) => setDate1(e.target.value)} id="date1" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
                                <label for="date1" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Mulai (YYYY-MM-DD)</label>

                            </div>

                            <div className="relative z-0 mb-6 w-full group" controlId="date2">
                                
                                <input type="text" name="date2" value={date2}  onChange={(e) => setDate2(e.target.value)} id="date2" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   />
                                <label for="date2" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Berakhir (YYYY-MM-DD)</label>

                            </div>

                            <div className="relative z-0 mb-6 w-full group" controlId="profile">
                                

                                <label for="profile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Profile</label>
                                <select id="profile" name="profile" onChange={(e) => setProfileName (e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option > Please Select a value!</option>
                                <option name="profile"  value={profileName}>{profile.name}</option>
                            
                                
                                </select>

                            </div>

                            <div className="relative z-0 mb-6 w-full group" controlId="affiliation">
                                


                                <label for="affiliation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Affiliation</label>
                                <select id="affiliation"  name="affiliation" onChange={(e) => setAffiliationName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option name="affiliation" > Please select a Value! </option>
                                    {organizations.map((org, index) => 
                                    <option  name="affiliation" key={index} value={org._id}>{org.name}</option>
                                    )}
                                    
                                
                                    
                                </select>

                                {/* {organizations.map((org, index) => 
                                <select id="affiliation" value={affiliation} name="affiliation" onChange={(e) => setAffiliation (e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            
                                    
                                    <option  name="affiliation" key={index} value={org}>{org.name}</option>
                                    
                                    
                                
                                    
                                </select>
                                )} */}


                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                            <button type="submit" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Add Activities
                            </button>
                        
                        </div>
                            





                        </form>











                       












                </div>


        

        </div>



      )

}




export default NewActivitiesPage;



