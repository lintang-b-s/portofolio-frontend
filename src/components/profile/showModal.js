import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import 'flowbite';

const ShowModal = (props) => {

    return (
        <>

<div class="">
                        <button type="button" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-bs-toggle="modal" data-bs-target="#exampleModalXl">View Details</button>
                       
                    </div>

                    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
                            {props.activitie.name}
                            </h5>
                            <button type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body relative p-4">
                        <div class="relative p-4 w-full max-w-7xl h-full md:h-auto">
                            
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                              
                                
                              
                                <div class="p-6 space-y-6">
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    {props.activitie.description}
                                    </p>
                                    
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        Tanggal:        {props.activitie.date1 && new Intl.DateTimeFormat("en-US", {
                                                    dateStyle: "medium",
                                                    timeStyle: "short",
                                                    }).format(new Date(props.activitie.date1.toString()))
                                                    
                                                    } -  {props.activitie.date2 && new Intl.DateTimeFormat("en-US", {
                                                    dateStyle: "medium",
                                                    timeStyle: "short",
                                                    }).format(new Date(props.activitie.date2.toString()))} 
                                    </p>
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        Merupakan Bagian dari Program Kerja:  {props.activitie.affiliation.name}
                                    </p>
                                </div>
                            
                              
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
        </>
    )
}


export default ShowModal;