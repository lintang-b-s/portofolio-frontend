import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction.js";
import Loader from "../components/atoms/loader/Loader";
import Message from "../components/atoms/message/Message";
import useScrollToTop from "../customHooks/useScrollToTop";

import { profileDetail } from "../actions/profileAction.js"



const AdminLoginPage = () => {



    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");//menetapkan state username .setusername buat ngerubah state username
    //username awalnya kosong
    const [password, setPassword] = useState("");
    
    
    // ketoke mergo userlogin
    const userLogin = useSelector((state) => state.userLogin); //ngambil state userLogin yang ada di store
    const { loading, error, userInfo } = userLogin; // destructuring object buat dapetin userInfo,erro,loading



    const profileDetails = useSelector((state) => state.profileDetails);
	const {profile } = profileDetails;
	useEffect(() => {
		dispatch(profileDetail());
	}, [dispatch]);
    // const profileOne = profile.map((profile) => profile._id);
    
    useEffect(() => {
        if (userInfo)  navigate(`/admin/sidebarProfiles`,  { replace: true }) ;
    }, [userInfo, navigate])
  

    const submitHandler = (e) => {
        e.preventDefault()
        try {
           dispatch(login(username, password))
        } catch (e) {
            console.error(e);
        }
    }



    return (
        
        <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            {error && (
                    <Message variant="danger" isDismissible>
                        {error}
                    </Message>
                    )}
            {loading && <Loader />}
            <h1 class="text-4xl font-medium">Admin Login</h1>
            <p class="text-slate-500">Hi, Welcome back 👋</p>

            <div class="my-5">
            </div>
            <form onSubmit={submitHandler} class="my-10">
                <div class="flex flex-col space-y-5">
                    <label htmlFor="adminUsernameInput">
                        <p class="font-medium text-slate-700 pb-2">Username</p>
                    </label>
                        <input id="adminUsernameInput" name="adminUsernameInput" type="text" class=" form-control w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter emUsername" 
                            value={username}  onChange={(e) => setUsername(e.target.value)} />
                    
                    <label htmlFor="adminPasswordInput">
                        <p class="font-medium text-slate-700 pb-2">Password</p>
                    </label>
                        <input id="adminPasswordInput" name="adminPasswordInput" type="password" class="form-control mb-3 w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                
                    <button type="submit" class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <span>Login</span>
                    </button>
                
                </div>
            </form>
        </div>



    )





}

export default AdminLoginPage;
