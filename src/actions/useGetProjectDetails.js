import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { listProjectDetails } from "../actions/projectActions.js";
=======
import { listProjectDetails } from "../redux/actions/project.actions";
>>>>>>> upstream/main

export function useGetProjectDetails(id) {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state) => state.projectDetails);
<<<<<<< HEAD
  const { loading, error, project} = projectDetails;
=======
  const { loading, error, project } = projectDetails;
>>>>>>> upstream/main
  useEffect(() => {
    dispatch(listProjectDetails(id));
  }, [dispatch, id]);
  return { loading, error, project };
}