import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import 'flowbite';
import ShowModal from "./showModal.js"


const ActivitieSingle = (props) => {
    const [showModal, setShowModal] = useState(false);


    // function renderModal() {
    //     if(!props.activitie){
    //         return "tidak ada apa apa"
    //     }
        

  
    //     return  props
    //         .map((activitie) => (
    //             <div key = {activitie._id}>
    //                 <ShowModal  activitie={activitie}/>
    //             </div>
    //         ))

      

    // }


    return (

        <ul className="max-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pb-2 sm:pb-3">
                <div className="flex items-center place-content-between">
                    {/* <div className="flex-shrink-0">
                        
                    </div> */}
                    <div className="flex-initial   w-64 min-w-0">
                        <p className="text-sm text-xl text-gray-900 truncate dark:text-white">
                        {props.activitie.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                         {props.activitie.description}
                        </p>
                    </div>
                    
                
                  
                    


                    <>
                        <button
                            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            View Details
                        </button>
                        {showModal ? (
                            <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
                                        {props.activitie.name}
                                    </h5>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                        </span>
                                    </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                    <div className="p-6 space-y-6">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    {props.activitie.description}
                                    </p>
                                    
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        Tanggal:        {props.activitie.date1 && new Intl.DateTimeFormat("en-US", {
                                                    dateStyle: "medium",
                                                    timeStyle: "short",
                                                    }).format(new Date(props.activitie.date1.toString()))
                                                    
                                                    } -  {props.activitie.date2 && new Intl.DateTimeFormat("en-US", {
                                                    dateStyle: "medium",
                                                    timeStyle: "short",
                                                    }).format(new Date(props.activitie.date2.toString()))} 
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">

                                    </p>
                                </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
                            </>
                        ) : null}
                        </>


                    <div className="inline-flex flex-initial w-32  items-center text-sm font-semibold text-gray-900 dark:text-white">
                    {props.activitie.date1 && new Intl.DateTimeFormat("en-US", {
                                dateStyle: "medium",
                                timeStyle: "short",
                                }).format(new Date(props.activitie.date1.toString()))
                                
                                } -  {props.activitie.date2 && new Intl.DateTimeFormat("en-US", {
                                dateStyle: "medium",
                                timeStyle: "short",
                                }).format(new Date(props.activitie.date2.toString()))}  
                    </div>

                </div>
                <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 my-3"></hr>
            </li>
            <script src="D:\kuliah2\Kuliah_sendiri\web_development\project-sendiri\web\portofolio-buatan\to\flowbite\dist\flowbite.js"></script>
        </ul>





    )
}

ActivitieSingle.propTypes = {
    activitie: PropTypes.object.isRequired,
}


export default ActivitieSingle;