import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "../actions/projectAction";

export function useGetProjects() {
    const dispatch = useDispatch();
    const projectList = useSelector((state) => state.projectList);
    const { loading, error, projects } = projectList;

    useEffect(() => {
        dispatch(listProjects());
    }, [dispatch]);

    return { loading, error, projects };
}