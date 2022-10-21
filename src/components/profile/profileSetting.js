// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams  } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { profileDetail } from "../../actions/profileAction.js"
// import { projectDetailsReducer } from "../../reducers/projectReducers";
// import CardProfile from "./cardProfile.js";
// import { useGetProfileDetails } from "../../customHooks/useGetProfileDetails.js";
// import { getProfileOneDetails, updateProfile } from "../../actions/profileAction.js"



// const ProfileSetting = (props) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [education, setEducation] = useState("");
//     const [birthDate, setDate] = useState("2003-06-11");


//     function renderProfile() {
// 		if (!props.profile) {
// 			return "tidak ada apa apa "
				
			
			
// 	};
// 		return (
//         <div>
//             <CardProfile
                
//                 profile={props.profile}
//             />
// 			</div>
//         )
		
// 	}


//     const submitHandler = (e) => {
//         e.preventDefault();
//         dispatch(updateProfile({
//             id: props.profile._id,
//             name,
//             description,
//             birthDate,
//             education
//         }))
//     }


//     return (
//         <div class={`non-sidebar basis-0  grow  px-7 md:px-10 mx-auto w-full  `}>
//                 {/* ini settting untuk profile */}
//             <div className="flex flex-wrap">
//             {/* utk setting profile */}
//                 <div className=" w-full lg:w-8/12 px-4 ">
//                     <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
//                         <div className="rounded-t bg-white mb-0 px-6 py-6">
//                         <div className="text-center flex justify-between">
//                             <h6 className="text-blueGray-700 text-xl font-bold">My Profile</h6>
//                             <button
//                             className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//                             type="button"
//                             >
//                             Settings
//                             </button>
//                         </div>
//                         </div>
//                         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//                         <form onSubmit={submitHandler}>
//                             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//                             User Information
//                             </h6>
//                             <div className="flex flex-wrap" >
                            
//                             <div className="w-full lg:w-6/12 px-4" >
//                                 <div className="relative w-full mb-3"  >
//                                 <label
//                                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                     htmlFor="grid-password"
//                                 >
//                                      Nama
//                                 </label>
//                                 <input
//                                     type="text"
//                                     className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                                     defaultValue={props.profile.name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 />
//                                 </div>
//                             </div>
//                             <div className="w-full lg:w-6/12 px-4">
//                                 <div className="relative w-full mb-3">
//                                 <label
//                                     className="block  uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                     htmlFor="grid-password"
//                                 >
//                                     Education
//                                 </label>
//                                 <input
//                                     type="text"
//                                     className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                                     defaultValue={props.profile.education}
//                                     onChange={(e) => setEducation(e.target.value)}
//                                 />
//                                 </div>
//                             </div>
//                             <div className="w-full lg:w-6/12 px-4">
//                                 <div className="relative w-full mb-3">
//                                 <label
//                                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                     htmlFor="grid-password"
//                                 >
//                                     Technologies
//                                 </label>
//                                     <input
//                                         type="text"
//                                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        
//                                         defaultValue="ss"

//                                     />
//                                 </div>
//                             </div>
//                             <div className="w-full lg:w-6/12 px-4">
//                                 <div className="relative w-full mb-3">
//                                 <label
//                                     className="block  uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                     htmlFor="grid-password"
//                                 >
//                                     Birth Date
//                                 </label>
//                                 <input
//                                     type="text"
//                                     className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                                     defaultValue= {birthDate}
//                                     onChange={(e) => setDate(e.target.value)}
//                                 />
//                                 </div>
//                             </div>
//                             </div>

                            

//                             <hr className="mt-6 border-b-1 border-blueGray-300" />

//                             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//                             About Me
//                             </h6>
//                             <div className="flex flex-wrap">
//                             <div className="w-full lg:w-12/12 px-4">
//                                 <div className="relative w-full mb-3">
//                                 <label
//                                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                     htmlFor="grid-password"
//                                 >
//                                     Description
//                                 </label>
//                                 <textarea
//                                     type="text"
//                                     className="border-0 form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150"
//                                     defaultValue={props.profile.description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     rows="4"
//                                 ></textarea>
//                                 </div>
//                             </div>
//                             <button type="submit" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
//                                 Submit
//                             </button>
//                             </div>
//                         </form>
//                         </div>
//                     </div>



//                 </div>
//                 {/* utk tampilan profile */}
//                 <div className="w-full lg:w-4/12 px-4">
                    
//                 </div>
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
//                     <div className="px-6">
//                         <div className="flex flex-wrap justify-center">
//                             <div className="w-full px-4 flex justify-center">
//                             <div className="relative">
//                                 <img
//                                 alt="..."
//                                 src={props.profile.image}
//                                 className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
//                                 />
//                             </div>
//                             </div>
//                             <div className="w-full px-4 text-center mt-20">
                            
//                             </div>
//                         </div>
//                         <div className="text-center mt-12">
//                             <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
//                             {props.profile.name}
//                             </h3>
//                             <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
//                             <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
//                             Surakarta
//                             </div>
//                             <div className="mb-2 text-blueGray-600 mt-10">
//                             <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
//                             -
//                             </div>
//                             <div className="mb-2 text-blueGray-600">
//                             <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
//                             {props.profile.education}
//                             </div>
//                         </div>
//                         <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
//                             <div className="flex flex-wrap justify-center">
//                             <div className="w-full lg:w-9/12 px-4">
//                                 <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
//                                 {props.profile.description}
//                                 </p>
//                                 <a
//                                 href="#pablo"
//                                 className="font-normal text-lightBlue-500"
//                                 onClick={(e) => e.preventDefault()}
//                                 >
//                                 Show more
//                                 </a>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>

//             </div>

//     )
// }


// export default ProfileSetting;