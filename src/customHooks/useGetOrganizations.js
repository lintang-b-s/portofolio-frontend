import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrganizations } from "../actions/organizationAction";

export function useGetOrganizations() {
    const dispatch = useDispatch();
    const organizationList = useSelector((state) => state.organizationList);
    const { loading, error, organizations} = organizationList;

    useEffect(() => {
        dispatch(listOrganizations());
    }, [dispatch]);

    return { loading, error, organizations};
}