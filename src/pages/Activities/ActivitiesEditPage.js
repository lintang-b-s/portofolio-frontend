import axios from "axios";
import { useEffect, useReducer, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import ImageUpload from "../../components/shared/ImageUpload.js"
import { useForm } from "../../customHooks/form-hook"

import { toast } from "react-toastify";


import { listActivitiesDetails, updateActivities } from "../../actions/activitiesAction.js";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { getProfileOneDetails, updateProfile } from "../../actions/profileAction.js"

import { listOrganizationDetails, listOrganizations  } from "../../actions/organizationAction";
import { useGetOrganizations } from "../../customHooks/useGetOrganizations.js";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import {
    ACTIVITIES_UPDATE_RESET
} from "../../constants/activitiesConstants.js"
import { logout } from "../../actions/userAction.js"


const ActivitiesEditPage = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    const navigate = useNavigate();


    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ date1, setDate1 ] = useState('');
    const [ date2, setDate2 ] = useState('');
    const [ profileName, setProfileName ] = useState('');
    const [ affiliation, setAffiliation ] = useState('');



    const profileDetails = useSelector((state) => state.profileOneDetails);
    const { profile } = profileDetails;

    const { loading, error, activitie } = useSelector((state) => state.activitiesDetails);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const { 
        loading: loadingListOrg,
        error: errorListOrg,
        organizations }  = useGetOrganizations();

    
    const activitiesUpdate = useSelector((state) => state.activitiesUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate
    } = activitiesUpdate;

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
            
        }
    )

    const logoutHandler = () => {
        dispatch(logout());
      };
  


    useEffect(() => {
        if(!userInfo) navigate("/admin")
        if (successUpdate) {
            dispatch({ type: ACTIVITIES_UPDATE_RESET });
            navigate("/admin/activities");
        }
        else if (activitie && activitie._id !== id) {
            dispatch(listActivitiesDetails(id));
            dispatch(getProfileOneDetails("settings"));
            dispatch(listOrganizations());
        } else {
            setName(activitie.name);
            setDescription(activitie.description);
            setDate1(activitie.date1);
            setDate2(activitie.date2);
            setProfileName(profile._id);
            setAffiliation(activitie.affiliation);
        }
    }, [dispatch, id, activitie]);


    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("name", name);
        formData.set("description", description);
        formData.set("date1", date1);
        formData.set("date2", date2);
        formData.set("profile", profileName);
        if (affiliation != 'Please select a Value!'){
            formData.set("affiliation", affiliation);
        }
        console.log("organizations: ", organizations)
        dispatch(updateActivities(activitie._id, formData));

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
                            <span onClick={logoutHandler} class="flex-1 ml-3 whitespace-nowrap">Log out</span>
                            </div>
                        </Link>
                    </li>
            
                </ul>
            </div>
            </aside>


            <div class={`non-sidebar basis-0  grow  px-7 md:px-10 mx-auto w-full  `}>
            
            
                <title>Edit Activities</title>
            
            <h1>Edit Activities </h1>
            <br></br>

            <form onSubmit={submitHandler} >
                <div className="relative z-0 mb-6 w-full group" controlId="name">
                    
                        
                    <input type="text" name="activitieName"   value={name}  onChange={(e) => setName(e.target.value)} id="activitieName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="activitieName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Activity Name ({activitie._id}, {name})</label>

                </div>
                <div className="relative z-0 mb-6 w-full group"   controlId="description">
                    
                
                    
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Activity description</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

                </div>

                <div className="relative z-0 mb-6 w-full group" controlId="date1">
                    
                    <input type="text" name="date1" value={date1}  onChange={(e) => setDate1(e.target.value)} id="date1" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
                    <label for="date1" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Mulai (YYYY-MM-DD)</label>

                </div>

                <div className="relative z-0 mb-6 w-full group" controlId="date2">
                    
                    <input type="text" name="date2" value={date2}  onChange={(e) => setDate2(e.target.value)} id="date2" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
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
                    <select id="affiliation"  name="affiliation" onChange={(e) => setAffiliation(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                    Update
                </button>
              
              </div>
                





            </form>

        
            </div>
        </div>




    )



    
}

export default ActivitiesEditPage;






