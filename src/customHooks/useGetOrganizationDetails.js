import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrganizationDetails } from "../actions/organizationAction.js";

export function useGetOrganizationDetails(id) {
    const dispatch = useDispatch();
    const organizationDetails = useSelector((state) => state.organizationDetails);
    const { loading, error, organization } = organizationDetails;

    useEffect(() => {
        dispatch(listOrganizationDetails(id));
    }, [dispatch, id]);

    return { loading, error, organization}
}