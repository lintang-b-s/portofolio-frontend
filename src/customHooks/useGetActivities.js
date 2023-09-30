import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActivities } from "../actions/activitiesAction.js";


export function useGetActivities() {
    const dispatch = useDispatch();
    const activitiesList = useSelector((state) => state.activitiesList);
    const { loading, error, activities} = activitiesList;

    useEffect(() => {
        dispatch(listActivities());

    }, [dispatch]);

    return { loading, error, activities};
}







