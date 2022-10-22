import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from 'react-icons/fi';

import ActivitiesSingle from "./ActivitiesSingle";
import useScrollToTop from "../../customHooks/useScrollToTop";
import  { listActivities } from "../../actions/activitiesAction.js"






const ActivitiesList = () => {

    const dispatch = useDispatch();
    const activitiesList = useSelector((state) => state.activitiesList);
    const { loading, error, activities } = activitiesList;
    useEffect(() => {
        dispatch(listActivities());
    }, [dispatch]);
    useScrollToTop();







// kondisionalnya harus diiuncoment
    function renderActivities() {
        if(!activities){
            return "tidak ada apa apa"
        }
        

        let bukannone = activities.filter(activitie => activitie.name !="None")
        return bukannone
            .map((activitie) => (
                <div key = {activitie._id}>
                    <ActivitiesSingle  activitie={activitie}/>
                </div>
            ))

      

    }



    return (
        <div className="mt-4">
           <p className="font-medium text-xl sm:text-3xl mb-1 text-ternary-dark dark:text-ternary-light">
					Activities
				</p>

            


        

            {/* card */}
            <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                {renderActivities()}
            </div>
        </div>





    )





    
}



export default ActivitiesList;