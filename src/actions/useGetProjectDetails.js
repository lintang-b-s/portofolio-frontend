import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProjectDetails } from "../redux/actions/project.actions";

export function useGetProjectDetails(id) {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;
  useEffect(() => {
    dispatch(listProjectDetails(id));
  }, [dispatch, id]);
  return { loading, error, project };
}