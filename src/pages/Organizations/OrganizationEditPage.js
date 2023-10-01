import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import ImageUpload from "../../components/shared/ImageUpload.js"
import { useForm } from "../../customHooks/form-hook"
import {
    ORGANIZATION_LIST_REQUEST,
    ORGANIZATION_LIST_SUCCESS,
    ORGANIZATION_LIST_FAIL,
    ORGANIZATION_DETAILS_REQUEST,
    ORGANIZATION_DETAILS_SUCCESS,
    ORGANIZATION_DETAILS_FAIL,
    ORGANIZATION_DELETE_REQUEST,
    ORGANIZATION_DELETE_SUCCESS,
    ORGANIZATION_DELETE_FAIL,
    ORGANIZATION_CREATE_REQUEST,
    ORGANIZATION_CREATE_SUCCESS,
    ORGANIZATION_CREATE_FAIL,
    ORGANIZATION_CREATE_RESET,
    ORGANIZATION_UPDATE_REQUEST,
    ORGANIZATION_UPDATE_SUCCESS,
    ORGANIZATION_UPDATE_FAIL,
    ORGANIZATION_UPDATE_RESET
} from "../../constants/organizationConstants.js"
import { listOrganizationDetails,  updateOrganization } from "../../actions/organizationAction.js";
import { useGetOrganizationDetails } from "../../customHooks/useGetOrganizationDetails.js"
import { useGetProjects } from "../../customHooks/useGetProjects.js";
import { listProjects } from "../../actions/projectAction.js"
import { getProfileOneDetails, updateProfile } from "../../actions/profileAction.js"
import { useGetActivities } from "../../customHooks/useGetActivities.js"
import { listActivities } from "../../actions/activitiesAction.js";
import { logout } from "../../actions/userAction.js"
// ternyata errornya gara2 gak kasih middleware fileupload multer

const OrganizationEditPage = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ position, setPosition ]= useState('');
    const [ date1, setDate1 ] = useState('');
    const [ activitiesName, setActivitiesName ] = useState('');
    const [ projectsName, setProjectsName ] = useState('');
    const [ image, setImage ] = useState('');
    const [ date2, setDate2 ] = useState('');
    const [ organizationImg, setOrganizationImg ] = useState("");


    const [ profileName, setProfileName ] = useState('');

    const{
        loading: loadingProjects,
        error: errorProjects,
        projects
    } = useGetProjects();

    const logoutHandler = () => {
      dispatch(logout());
    };

    // const { 
    //     loading: loadingOrgDet,
    //     error: errorOrgDet,
    //     organization
    // } = useGetOrganizationDetails();

    const { loading, error, organization} = useSelector((state) => state.organizationDetails)

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    //@desc mendapatkan state activitiees
    const {
      loading: loadingListActv,
      error: errorListActv,
      activities
    } = useGetActivities();


    const profileDetails = useSelector((state) => state.profileOneDetails);
    const { profile } = profileDetails;


    const organizationUpdate = useSelector((state) => state.organizationUpdate);
    const{
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate
    } = organizationUpdate;


      //upload image ke cloudinary

    const handleOrgImageUpload = (e) => {
      const file = e.target.files[0];
      setOrganizationImg(file);

      TransformFileData(file);
    }

    const TransformFileData = (file) => {
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend =() => {
        }
      } else {
        setOrganizationImg("");
      }
    }


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
        if (!userInfo) {
            navigate("/admin");
        }
        if (successUpdate) {
            dispatch({ type: ORGANIZATION_UPDATE_RESET})
            navigate('/admin/organizations');
        } else if(organization && organization._id !== id){
            dispatch(listOrganizationDetails(id));
            dispatch(getProfileOneDetails("settings"));
            dispatch(listProjects());
            dispatch(listActivities());
        } else {
            setName(organization.name);
            setPosition(organization.position);
            setDate1(organization.date1);
            setActivitiesName(organization.activities);
            setProjectsName(organization.projects);
            setProfileName(profile._id);

        }
    }, [dispatch, id, organization]);

    // , organization
    const submitHandler = (e) => {
        e.preventDefault();
      // jangan lupa ganti name di form, inputimage jd images
      // projectsName, sama activities harus di set value={.._id}
      // 
        const formData = new FormData();
        formData.set("name", name);
        formData.set("position", position);
        formData.set("date1", date1);
       
        if (date2){
          formData.set("date2", date2);
        }

        // 
        // formData.set("profile", profileName);
        // if (formState.inputs.images) {
        //     formData.append("images", formState.inputs.images.value);
        // }else{
        //   formData.append("images", " ")
        // }

        formData.append("images", organizationImg);

    
     
        dispatch(updateOrganization(organization._id, formData));

       


    }


    return(
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
                        <span  onClick={logoutHandler}  className="flex-1 ml-3 whitespace-nowrap">Log out</span>
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

          {/*onSubmit={submitHandler} */}
          <form onSubmit={submitHandler} encType="multipart/form-data">
              <div className="relative z-0 mb-6 w-full group" controlId="name">
               
                
                <input type="text" name="name"   value={name}  onChange={(e) => setName(e.target.value)} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Oganization Name </label>

              </div>
              <div className="relative z-0 mb-6 w-full group"   controlId="position">
                
               
                
                <input type="text" name="position"   value={position}  onChange={(e) => setPosition(e.target.value)} id="position" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="position" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Positon </label>

              </div>
              <div className="relative z-0 mb-6 w-full group" controlId="date1">
                
                <input type="text" name="date1" value={date1}  onChange={(e) => setDate1(e.target.value)} id="date1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
                <label htmlFor="date1" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Mulai (YYYY-MM-DD)</label>

              </div>

              <div className="relative z-0 mb-6 w-full group" controlId="date2">
                
                <input type="text" name="date2" value={date2}  onChange={(e) => setDate2(e.target.value)} id="date2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  />
                <label htmlFor="date2" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Berakhir (YYYY-MM-DD)</label>

              </div>
                {/* upload gambar */}

                <div className="relative z-0 mb-6 w-full group" controlId="customFile">
                

                {/* <ImageUpload
                  center
                  id="images"
                  onInput={inputHandler}
                  errorText="ss"
                  name="images"
                /> */}

                <input
                id="imgUpload"
                accept="image/*"
                type="file"
                onChange={handleOrgImageUpload}
                required
              />
              
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


export default OrganizationEditPage;


 