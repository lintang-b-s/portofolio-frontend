import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams  } from "react-router-dom";
import { Link } from "react-router-dom";

import {
    listOrganizations,
    listOrganizationDetails,
    createNewOrganization,
    deleteOrganization,
    updateOrganization
} from "../../actions/organizationAction.js"
import { useGetOrganizations } from "../../customHooks/useGetOrganizations.js";
import { FaTrash } from "react-icons/fa";



const OrganizationListAdmin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, organizations } = useGetOrganizations();
    
    const organizationDelete = useSelector((state) => state.organizationDelete);
    const {
        loading: deleteLoading,
        error: deleteError,
        success: deleteSuccess
    } = organizationDelete;

    const organizationCreate = useSelector((state) => state.organizationCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        organization: createdOrganization
    } = organizationCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) navigate("/admin")

        if (successCreate) {
            navigate(`/admin/organizations/${createdOrganization._id}/edit`)
        } else {
            dispatch(listOrganizations());
        }
    }, [dispatch, userInfo, successCreate,
        deleteSuccess,
        deleteError,
        error,
        errorCreate])

    
    const deleteHandler = (id) => {
        if (window.confirm("Apakah anda yakin akan menghapus organization ini?")) {
            dispatch(deleteOrganization(id));
        }
    }

    const createOrganizationHandler = (e) => {
        dispatch(createNewOrganization())
    }

    return (
        <div class="flex flex-wrap gap-x-3 mx-3 my-5 text-center bg-white rounded-lg border shadow-md sm:p-2 dark:bg-gray-800 dark:border-gray-700">


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


            

            {/* bagian tabel */}
            <div class="basis-0  grow  w-full   overflow-x-auto relative shadow-md shadow-md sm:rounded-lg">
                <Link to={'/admin/addOrganization'}>
                        <div className="col text-right mb-1">
                            <button className="btn text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Add Organization
                            </button>
                        </div>


                    </Link>
                
                
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-4">
                                Organization name
                            </th>
                            <th scope="col" class="py-3 px-4">
                                Position
                            </th>
                            <th scope="col" class="py-3 px-4">
                                Date Start
                            </th>
                            <th scope="col" class="py-3 px-4">
                                Activities
                            </th>
                            <th scope="col" class="py-3 px-4">
                                Projects
                            </th>
                            <th scope="col" class="py-3 px-4">
                                Profile
                            </th>
                            <th scope="col" class="py-3 px-4">
                                Edit
                            </th>
                           
                            <th scope="col" class="py-3 px-4">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {organizations.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((organization) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" key={organization._id} class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {organization.name}
                            </th>
                            <td class="py-4 px-6">
                                {organization.position}
                            </td>
                            <td class="py-4 px-6">
                                {new Intl.DateTimeFormat("en-US", {
                                dateStyle: "medium",
                                timeStyle: "short",
                                }).format(new Date(organization.date1.toString()))}
                            </td>
                            <td class="py-4 px-6">
                                {organization.activities.name}
                            </td>
                            <td class="py-4 px-6 text-right">
                                {organization.projects.name}
                            </td>
                            <td class="py-4 px-6">
                                {organization.profile.name}
                            </td>
                            <td class="edit py-4 px-6">
                                <Link to={`/admin/organizations/${organization._id}/edit`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">

                
                                            Edit
                                    </button>
                                </Link>
                            </td>
                            <td class="delete py-4 px-6">
                                <button
                                className="FaTrash text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                onClick={() => deleteHandler(organization._id)}
                                >
                                    <FaTrash /> Delete
                                </button>
                            </td>
                        </tr>
                      ))}
                        
                    </tbody>
                </table>
            </div>

        </div>



    )
}


export default OrganizationListAdmin;










